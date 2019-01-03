import * as valid from './validate';

/**
   * This is a validation for user Enrollment Data
   * @constant
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next next object
   *
   * @returns {Object} an object containing an error message if validation fails
   *
   * @exports validateEnrollmentData
   */
  const validateEnrollmentData = (req,res,next) =>{
  let { firstChoice, secondChoice,born_again,salvation_date,salvation_experience,baptized_in_holyghost,baptism_date,baptism_experience,statement_purpose } = req.body;

  firstChoice = firstChoice && firstChoice.toString().trim();
  secondChoice = secondChoice && secondChoice.toString().trim();
  born_again = born_again && born_again.toString().trim();
  salvation_date = salvation_date && salvation_date.toString().trim();
  salvation_experience = salvation_experience && salvation_experience.toString().trim();
  baptized_in_holyghost = baptized_in_holyghost && baptized_in_holyghost.toString().trim();
  baptism_date = baptism_date && baptism_date.toString().trim();
  baptism_experience = baptism_experience && baptism_experience.toString().trim();
  statement_purpose = statement_purpose && statement_purpose.toString().trim();

  if(valid.checkEmpty(firstChoice)) return next(valid.validationError('First Choice is required'));
  if(valid.checkEmpty(born_again)) return next(valid.validationError('Kindly state whether you are born again or not'));
  if(valid.checkEmpty(salvation_date)) return next(valid.validationError('Kindly states your salvation date'));
  if(valid.checkEmpty(salvation_experience)) return next(valid.validationError('Kindly states your salvation experience'));
  if(valid.checkEmpty(baptized_in_holyghost)) return next(valid.validationError('Kindly state whether you are baptized in Holy Ghost or not'));
  if(valid.checkEmpty(baptism_date)) return next(valid.validationError('Kindly state the dates of your Holy Ghost Baptism'));
  if(valid.checkEmpty(statement_purpose)) return next(valid.validationError('Kindly state why you are applying'));
  }
  export default validateEnrollmentData;
  