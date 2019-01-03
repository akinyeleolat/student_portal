import * as valid from './validate';

/**
   * This is a validation for user Reference Data
   * @constant
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next next object
   *
   * @returns {Object} an object containing an error message if validation fails
   *
   * @exports validateReferenceData
   */
  const validateReferenceData = (req,res,next) => {
    let { reference1_name,
          reference1_email,
          reference1_telephone,
          reference1_work_address,
          reference1_home_address,
          reference1_relationship,
          reference1_relationship_duration,
          reference2_name,
          reference2_email,
          reference2_telephone,
          reference2_work_address,
          reference2_home_address,
          reference2_relationship,
          reference2_relationship_duration } = req.body;

          reference1_name = reference1_name && reference1_name.toString().trim();
          reference1_email = reference1_email && reference1_email.toString().trim();
          reference1_telephone = reference1_telephone && reference1_telephone.toString().replace(/\s+/g, '');
          reference1_work_address = reference1_work_address && reference1_work_address.toString().trim();
          reference1_home_address = reference1_home_address && reference1_home_address.toString().trim();
          reference1_relationship = reference1_relationship && reference1_relationship.toString().trim();
          reference1_relationship_duration = reference1_relationship_duration && reference1_relationship_duration.toString().trim();
          reference2_name = reference2_name && reference2_name.toString().trim();
          reference2_email = reference2_email && reference2_email.toString().trim();
          reference2_telephone = reference2_telephone && reference2_telephone.toString().replace(/\s+/g, '');
          reference2_work_address = reference2_work_address && reference2_work_address.toString().trim();
          reference2_home_address = reference2_home_address && reference2_home_address.toString().trim();
          reference2_relationship = reference2_relationship && reference2_relationship.toString().trim();
          reference2_relationship_duration = reference2_relationship_duration && reference2_relationship_duration.toString().trim();
          
          if(valid.checkEmpty(reference1_name)) return next(valid.validationError('Reference name is required'));
          if(valid.checkEmpty(reference1_email)) return next(valid.validationError('Reference email is required'));
          if(!valid.checkEmail(reference1_email)) return next(valid.validationError('Enter correct email format'));
          if(!valid.checkEmail(reference2_email)) return next(valid.validationError('Enter correct email format'));
          if(valid.checkEmpty(reference1_telephone)) return next(valid.validationError('Reference Telephone number is required'));
          if(!valid.checkNumber(reference1_telephone)) return next(valid.validationError('Reference Telephone must be a number'));
          if(!valid.checkLengthMax(reference1_telephone,11)) return next(valid.validationError('Reference telephone must not be less than or greater than 11 characters'));
          if(!valid.checkPhoneNumber(reference1_telephone)) return next(valid.validationError('Valid telephone number is required'));
          if(!valid.checkNumber(reference2_telephone)) return next(valid.validationError('Reference Telephone must be a number'));
          if(!valid.checkLengthMax(reference2_telephone,11)) return next(valid.validationError('Reference telephone must not be less than or greater than 11 characters'));
          if(!valid.checkPhoneNumber(reference2_telephone)) return next(valid.validationError('Valid telephone number is required'));
          if(valid.checkEmpty(reference1_work_address)) return next(valid.validationError('Reference place of work is required'));
          if(valid.checkEmpty(reference1_home_address)) return next(valid.validationError('Reference home address is required'));
          if(valid.checkEmpty(reference1_relationship)) return next(valid.validationError('Kindly states relationship with the reference'));
          if(valid.checkEmpty(reference1_relationship_duration)) return next(valid.validationError('Kindly states duration of relationship with the reference'));
          return next();
  }
  export default validateReferenceData;