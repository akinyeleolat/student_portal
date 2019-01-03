import * as valid from './validate';

/**
   * This is a validation for user Academic Data
   * @constant
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next next object
   *
   * @returns {Object} an object containing an error message if validation fails
   *
   * @exports validateAcademicData
   */
  const validateAcademicData = (req,res,next) =>{
  let { highest_qualification,course_of_study,graduation_year,institution_name1,date_started1,date_ended1,institution_name2,date_started2,date_ended2,institution_name3,date_started3,date_ended3 } = req.body;

  highest_qualification = highest_qualification && highest_qualification.toString().trim();
  course_of_study = course_of_study && course_of_study.toString().trim();
  graduation_year = graduation_year && graduation_year.toString().trim();
  institution_name1 = institution_name1 && institution_name1.toString().trim();
  date_started1 = date_started1 && date_started1.toString().trim();
  date_ended1 = date_ended1 && date_ended1.toString().trim();
  institution_name2 = institution_name2 && institution_name2.toString().trim();
  date_started2 = date_started2 && date_started2.toString().trim();
  date_ended2 = date_ended2 && date_ended2.toString().trim();
  institution_name3 = institution_name3 && institution_name3.toString().trim();
  date_started3 = date_started3 && date_started3.toString().trim();
  date_ended3 = date_ended3 && date_ended3.toString().trim();

  if(valid.checkEmpty(highest_qualification)) return next(valid.validationError('Highest qualification required'));
  if(valid.checkEmpty(course_of_study)) return next(valid.validationError('Course of Study is required'));
  if(valid.checkEmpty(graduation_year)) return next(valid.validationError('Graduation year is required'));
  if(valid.checkEmpty(institution_name1)) return next(valid.validationError('Institution Name is required'));
  if(valid.checkEmpty(date_started1)) return next(valid.validationError('Date started is required'));
  if(valid.checkEmpty(date_ended1)) return next(valid.validationError('Date ended is required'));
  return next();
  }
  export default validateAcademicData;
