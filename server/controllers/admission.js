import db from '../db';


/** admission controller class */

class AdmissionController {
    /**
   * @function personalData
   * @memberof AdmissionController
   * @param {Object} req - this is a request object that contains whatever is requested for
   * @param {Object} res - this is a response object to be sent after attending to a request
   * @static
   */
  static addPersonalData(req,res){
    const user_id = req.userId;
    const table_name = process.env.PERSONAL_INFO;
    const submit_status = process.env.STATUS_1;
    let { home_address, marital_status, gender, age, living_with_spouse, reason_if_no, work, work_address } = req.body;
    home_address = home_address ? home_address.toString().replace(/\s+/g, ' ') : home_address;
    marital_status = marital_status ? marital_status.toString().replace(/\s+/g, '') : marital_status;
    gender = gender ? gender.toString().replace(/\s+/g, '') : gender;
    age = age ? age.toString().replace(/\s+/g, '') : age;
    living_with_spouse = living_with_spouse ? living_with_spouse.toString().replace(/\s+/g, ' ') : living_with_spouse;
    reason_if_no = reason_if_no ? reason_if_no.toString().replace(/\s+/g, ' ') : reason_if_no;
    work = work ? work.toString().replace(/\s+/g, '') : work;
    work_address = work_address ? work_address.toString().replace(/\s+/g, ' ') : work_address;
    

    return db.task('addPersonalData', db => db.users.findById(user_id)
      .then((result) => {
        console.log(user_id)
        if (!result) {
          return res.status(400).json({
            success: 'false',
            message: 'users not found',
          });
        }
        return db.admission.findByUserId(table_name,user_id)
          .then((found) => {
            if (found) {
              return res.status(409).json({
                success: 'false',
                message: 'users personal record already  already exist, you can only edit',
              });
            }
             return db.admission.createPersonalData({ user_id,home_address,marital_status,gender,age,living_with_spouse,reason_if_no,work,work_address, submit_status })
              .then((user) => {
                return res.status(201).json({
                  success: 'true',
                  message: 'Personal Data added',
                });
              });
          })
        })
      .catch((err) => {
        return res.status(500).json({
          success: 'false',
          message: 'unable to add personal Data',
          err: err.message,
        });
      }));
  }
  /**
   * @function churchData
   * @memberof AdmissionController
   * @param {Object} req - this is a request object that contains whatever is requested for
   * @param {Object} res - this is a response object to be sent after attending to a request
   * @static
   */
  static addChurchData(req,res){
    const user_id = req.userId;
    const table_name = process.env.CHURCH_INFO;
    const submit_status = process.env.STATUS_1;
    let { church_name,church_address,position_in_church,pastors_name,pastors_telephone,pastors_email } = req.body;
    church_name = church_name ? church_name.toString().replace(/\s+/g, ' ') : church_name;
    church_address = church_address ? church_address.toString().replace(/\s+/g,' ') : church_address;
    position_in_church = position_in_church ? position_in_church.toString().replace(/\s+/g,' ') : position_in_church;
    pastors_name = pastors_name ? pastors_name.toString().replace(/\s+/g,' ') : pastors_name;
    pastors_telephone = pastors_telephone ? pastors_telephone.toString().replace(/\s+/g,'') : pastors_telephone;
    pastors_email = pastors_email ? pastors_email.toString().replace(/\s+/g,'') : pastors_email;

    return db.task('addChurchData', db => db.users.findById(user_id)
      .then((result) => {
        console.log(user_id)
        if (!result) {
          return res.status(400).json({
            success: 'false',
            message: 'users not found',
          });
        }
        return db.admission.findByUserId(table_name,user_id)
          .then((found) => {
            if (found) {
              return res.status(409).json({
                success: 'false',
                message: 'users church record already  already exist, you can only edit',
              });
            }
             return db.admission.createChurchData({ user_id,church_name,church_address,position_in_church,pastors_name,pastors_telephone,pastors_email, submit_status })
              .then((user) => {
                return res.status(201).json({
                  success: 'true',
                  message: 'Church Data added',
                });
              });
          })
        })
      .catch((err) => {
        return res.status(500).json({
          success: 'false',
          message: 'unable to add church Data',
          err: err.message,
        });
      }));
  }
}
export default AdmissionController;
