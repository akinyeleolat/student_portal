import express from 'express';
import UserController from '../controllers/users';
import AdminController from '../controllers/admin';
import AdmissionController from '../controllers/admission'
import middlewares from '../middlewares';

const router = express.Router();

router.post('/auth/signup', middlewares.validateSignup, UserController.signup);
router.post('/auth/login', middlewares.validateLogin, UserController.login);
router.post('/auth/admin/signup', middlewares.validateSignup, AdminController.adminSignup);
router.post('/auth/admin/login', middlewares.validateLogin, AdminController.adminLogin);
router.post('/admission/personal',middlewares.verifyUserToken,middlewares.validatePersonalData,AdmissionController.addPersonalData);
router.post('/admission/church',middlewares.verifyUserToken,middlewares.validateChurchData,AdmissionController.addChurchData);

// router.use('*', middlewares.verifyAdminToken);




export default router;
