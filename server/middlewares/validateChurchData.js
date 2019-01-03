import * as valid from './validate';

/**
 * This is a validation for user church data
 * @constant
 * 
 * @param {String} message - any error message we provide
 * 
 * @returns {Object}
 */

const churchDataError = (message) => {
    const err = Error(message);
    err.statusCode = 400;
    return err;
  };

/**
   * This is a validation for user church Data
   * @constant
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next next object
   *
   * @returns {Object} an object containing an error message if validation fails
   *
   * @exports validateChurchData
   */
  const validateChurchData = ( req, res, next)=>{
    let { church_name,church_address,position_in_church,pastors_name,pastors_telephone,pastors_email } = req.body;
    church_name = church_name && church_name.toString().trim();
    church_address = church_address && church_address.toString().trim();
    position_in_church = position_in_church && position_in_church.toString().trim();
    pastors_name = pastors_name && pastors_name.toString().trim();
    pastors_telephone = pastors_telephone && pastors_telephone().toString().replace(/\s+/g, '');
    pastors_email = pastors_email && pastors_email.toString().trim();

    if(valid.checkEmpty(church_name)) return next (churchDataError('Church Name is required'));
    if(valid.checkEmpty(church_address)) return next(churchDataError('Church Address is required'));
    if(valid.checkEmpty(position_in_church)) return next(churchDataError('Position in church cannot be empty'));
    if(valid.checkEmpty(pastors_name)) return next(churchDataError('Pastors name is required'));
    if(valid.checkEmpty(pastors_telephone)) return next(churchDataError('Pastors Telephone is required'));
    if(!valid.checkNumber(pastors_telephone)) return next(churchDataError('Pastors Telephone must be a number'));
    if(!valid.checkLengthMax(pastors_telephone,11)) return next(churchDataError('Pastors telephone must not be less than or greater than 11 characters'));
    if(!valid.checkPhoneNumber(pastors_telephone)) return next(churchDataError('Valid telephone number is required'));
    if(valid.checkEmpty(pastors_email)) return next(churchDataError('Pastors email is required'));
    if(!valid.checkEmail(pastors_email)) return next(churchDataError('Enter valid email for your pastor'));
    return next();
  }
  export default validateChurchData;