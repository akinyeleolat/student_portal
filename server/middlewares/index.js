import validateSignup from './validateSignup';
import validateLogin from './validateLogin';
import verifyUserToken from './verifyUserToken';
import verifyAdminToken from './verifyAdminToken';
import validatePersonalData from './validatePersonalData';
import validateChurchData from './validateChurchData';



const middlewares = {
  validateSignup,
  validateLogin,
  verifyUserToken,
  verifyAdminToken,
  validatePersonalData,
  validateChurchData,
};

export default middlewares;
