import validateSignup from './validateSignup';
import validateLogin from './validateLogin';
import verifyUserToken from './verifyUserToken';
import verifyAdminToken from './verifyAdminToken';
import validatePersonalData from './validatePersonalData';
import validateChurchData from './validateChurchData';
import validateEnrollmentData from './validateEnrollmentData';
import validateAcademicData from './validateAcademicData';
import validateReferenceData from './validateReferenceData';



const middlewares = {
  validateSignup,
  validateLogin,
  verifyUserToken,
  verifyAdminToken,
  validatePersonalData,
  validateChurchData,
  validateAcademicData,
  validateEnrollmentData,
  validateReferenceData
};

export default middlewares;
