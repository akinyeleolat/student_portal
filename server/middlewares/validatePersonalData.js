/**
 * This is a validation for user personal daata
 * @constant
 * 
 * @param {String} message - any error message we provide
 * 
 * @returns {Object}
 */

const personalDataError = (message) => {
    const err = Error(message);
    err.statusCode = 400;
    return err;
  };

/**
   * This is a validation for user personal Data
   * @constant
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next next object
   *
   * @returns {Object} an object containing an error message if validation fails
   *
   * @exports validatePersonalData
   */
  const validatePersonalData = ( req, res, next)=>{
    let { 
        home_address, marital_status, gender, age, living_with_spouse, reason_if_no, work, work_address 
    } = req.body;
    home_address = home_address && home_address.toString().trim();
    marital_status = marital_status && marital_status.toString().trim().toLowerCase();
    gender = gender && gender.toString().trim();
    age = age && age.toString().replace(/\s+/g, '');
    living_with_spouse = living_with_spouse && living_with_spouse.toString().trim();
    reason_if_no = reason_if_no && reason_if_no.toString().trim();
    work = work && work.toString().trim();
    work_address = work_address && work_address.toString().trim();
    const maritalStatusValue = ['single','married','divorced','widowed'];
    
    if(!home_address || home_address.trim() === '') return next (personalDataError('Home address is required'));
    if(!marital_status || marital_status.trim() === '') return next(personalDataError('Marital Status is required'));
    if(maritalStatusValue.indexOf(marital_status) < 0) return next(personalDataError('Invalid Data in marital status'));
    if(!gender || gender.trim() === '') return next(personalDataError('Gender is required'))
    if(!age || age.trim() === '') return next(personalDataError('Age is required'));
    if(age && isNaN(age)) return next(personalDataError('Age must contain a number'));
    if(age < 18) return next(personalDataError('Age of candidate cannot be less than 18'));
    if(!living_with_spouse || living_with_spouse.trim() === '') return next(personalDataError('Question about living with spouse is required'));
    if(!work || work.trim() === '') return next(personalDataError('Occupation/Work is required'))
    if(!work_address || work_address.trim() === '') return next(personalDataError('Work address is required'))
    return next();
  }
export default validatePersonalData;
