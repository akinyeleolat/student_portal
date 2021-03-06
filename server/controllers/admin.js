import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import db from '../db';


/** user controller class */

class AdminController {
  /**
* @function adminSignup
* @memberof AdminController
* @static
*/
  static adminSignup(req, res) {
    const adminStatus = process.env.ADMIN_DEFAULT;
    let { firstname, lastname, email, telephone, image, } = req.body;
    const { password } = req.body;
    firstname = firstname ? firstname.toString().replace(/\s+/g, '') : firstname;
    lastname = lastname ? lastname.toString().replace(/\s+/g, '') : lastname;
    telephone = telephone ? telephone.toString().replace(/\s+/g, '') : telephone;
    email = email ? email.toString().replace(/\s+/g, '') : email;
    image = image ? image.toString().replace(/\s+/g, '') : image;

    return db.task('signup', db => db.admin.findByEmail(email)
      .then((result) => {
        if (result) {
          return res.status(409).json({
            success: 'false',
            message: 'user with this email already exist',
          });
        }
        return db.admin.findByTelephone(telephone)
          .then((found) => {
            if (found) {
              return res.status(409).json({
                success: 'false',
                message: 'user with this telephone number already exist',
              });
            }
            return db.admin.create({ firstname, lastname, email, telephone, password, image, adminStatus })
              .then((user) => {
                const token = jwt.sign({ id: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email, telephone: user.telephone,  user_image: user.image_url }, process.env.SECRET_KEY, { expiresIn: '2hrs' });
                // console.log(token)
                // send activation link
                return res.status(201).json({
                  success: 'true',
                  message: 'Account created successfully',
                });
              });
          });
      })
      .catch((err) => {
        return res.status(500).json({
          success: 'false',
          message: 'unable to create user account',
          err: err.message,
        });
      }));
  }

  /**
  * @function adminlogin
  * @memberof AdminController
  *
  * @param {Object} req - this is a request object that contains whatever is requested for
  * @param {Object} res - this is a response object to be sent after attending to a request
  *
  * @static
  */

 static adminLogin(req, res) {
  let { email } = req.body;
  const { password } = req.body;
  email = email && email.toString().trim();

  db.task('signin', data => data.admin.findByEmail(email)
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          success: 'false',
          message: 'You have entered an invalid email or password',
        });
      }
      const allowEntry = bcrypt.compareSync(password, user.admin_password);
      if (!allowEntry) {
        return res.status(401).json({
          success: 'false',
          message: 'You have entered an invalid email or password',
        });
      }
      const token = jwt.sign({ id: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email, telephone: user.telephone,  user_image: user.image_url }, process.env.SECRET_KEY, { expiresIn: '2hrs' });
      return res.status(200).json({
        success: 'true',
        message: 'Login was successful',
        token,
      });
    }))
    .catch((err) => {
      return res.status(500).json({
        success: 'false',
        message: 'unable to login, try again!',
        err: err.message,
      });
    });
}
  
}

export default AdminController;
