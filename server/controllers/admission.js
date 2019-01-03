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
/**
   * @function academicData
   * @memberof AdmissionController
   * @param {Object} req - this is a request object that contains whatever is requested for
   * @param {Object} res - this is a response object to be sent after attending to a request
   * @static
   */
  static addAcademicData(req,res){
    const user_id = req.userId;
    const table_name = process.env.ACADEMIC_INFO;
    const submit_status = process.env.STATUS_1;

    let { highest_qualification,course_of_study,graduation_year,institution_name1,date_started1,date_ended1,institution_name2,date_started2,date_ended2,institution_name3,date_started3,date_ended3 } = req.body;
    
    highest_qualification = highest_qualification ? highest_qualification.toString().replace(/\s+/g, ' ') : highest_qualification;
    course_of_study = course_of_study ? course_of_study.toString().replace(/\s+/g, ' ') : course_of_study;
    graduation_year = graduation_year ? graduation_year.toString().replace(/\s+/g, ' ') : graduation_year;
    institution_name1 = institution_name1 ? institution_name1.toString.replace(/\s+/g, ' ') : institution_name1;
    date_started1 = date_started1 ? date_started1.toString().replace(/\s+/g, '') : date_started1;
    date_ended1 = date_ended1 ? date_ended1.toString.replace(/\s+/g, '') : date_ended1;
    institution_name2 = institution_name2 ? institution_name2.toString.replace(/\s+/g, ' ') : institution_name2;
    date_started2 = date_started2 ? date_started2.toString().replace(/\s+/g, '') : date_started2;
    date_ended2 = date_ended2 ? date_ended2.toString.replace(/\s+/g, '') : date_ended2;
    institution_name3 = institution_name3 ? institution_name3.toString.replace(/\s+/g, ' ') : institution_name3;
    date_started3 = date_started3 ? date_started3.toString().replace(/\s+/g, '') : date_started3;
    date_ended3 = date_ended3 ? date_ended3.toString.replace(/\s+/g, '') : date_ended3;
    
    return db.task('addAcademicData', db => db.users.findById(user_id)
      .then((result) => {
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
                message: 'users academic record already  already exist, you can only edit',
              });
            }
             return db.admission.createAcademicData({ user_id,highest_qualification,course_of_study,graduation_year,institution_name1,date_started1,date_ended1,institution_name2,date_started2,date_ended2,institution_name3,date_started3,date_ended3, submit_status })
              .then((user) => {
                return res.status(201).json({
                  success: 'true',
                  message: 'Academic Data added',
                });
              });
          })
        })
      .catch((err) => {
        return res.status(500).json({
          success: 'false',
          message: 'unable to add academic Data',
          err: err.message,
        });
      }));
  }
/**
   * @function enrollmentData
   * @memberof AdmissionController
   * @param {Object} req - this is a request object that contains whatever is requested for
   * @param {Object} res - this is a response object to be sent after attending to a request
   * @static
   */
  static addEnrollmentData(req,res){
    const user_id = req.userId;
    const table_name = process.env.ENROLLMENT_INFO;
    const submit_status = process.env.STATUS_1;
    let { firstChoice, secondChoice,born_again,salvation_date,salvation_experience,baptized_in_holyghost,baptism_date,baptism_experience,statement_purpose } = req.body;

    firstChoice = firstChoice ? firstChoice.toString().replace(/\s+/g, ' ') : firstChoice;
    secondChoice = secondChoice ? secondChoice.toString().replace(/\s+/g, ' ') : secondChoice;
    born_again = born_again ? born_again.toString().replace(/\s+/g, '') : born_again;
    salvation_date = salvation_date ? salvation_date.toString().replace(/\s+/g, '') : salvation_date;
    salvation_experience = salvation_experience ? salvation_experience.toString().replace(/\s+/g, ' ') : salvation_experience;
    baptized_in_holyghost = baptized_in_holyghost ? baptized_in_holyghost.toString().replace(/\s+/g, '') : baptized_in_holyghost;
    baptism_date = baptism_date ? baptism_date.toString().replace(/\s+/g, '') : baptism_date;
    baptism_experience =  baptism_experience ? baptism_experience.toString().replace(/\s+/g, ' ') : baptism_experience;
    statement_purpose = statement_purpose ? statement_purpose.toString().replace(/\s+/g, ' ') : statement_purpose;

    return db.task('addEnrollmentData', db => db.users.findById(user_id)
      .then((result) => {
        if (!result) {
          return res.status(400).json({
            success: 'false',
            message: 'users not found',
          });
        }
        return db.admission.findProgram(firstChoice || secondChoice)
        .then((available) => {
         if(!available){
          return res.status(400).json({
            success: 'false',
            message: 'The chosen course not available',
          });
         }
        return db.admission.findByUserId(table_name,user_id)
          .then((found) => {
            if (found) {
              return res.status(409).json({
                success: 'false',
                message: 'users enrollment record already  already exist, you can only edit',
              });
            }
             return db.admission.createEnrollData({ user_id,firstChoice, secondChoice,born_again,salvation_date,salvation_experience,baptized_in_holyghost,baptism_date,baptism_experience,statement_purpose,submit_status })
              .then((user) => {
                return res.status(201).json({
                  success: 'true',
                  message: 'Enrollment Data added',
                });
              });
          })
        })
      })
      .catch((err) => {
        return res.status(500).json({
          success: 'false',
          message: 'unable to add enrollment Data',
          err: err.message,
        });
      }));
  }
/**
   * @function referenceData
   * @memberof AdmissionController
   * @param {Object} req - this is a request object that contains whatever is requested for
   * @param {Object} res - this is a response object to be sent after attending to a request
   * @static
   */
  static addReferenceData(req,res){
    const user_id = req.userId;
    const table_name = process.env.REFERENCE_INFO;
    const submit_status = process.env.STATUS_1;

    let { reference1_name,reference1_email,reference1_telephone,reference1_work_address,reference1_home_address,reference1_relationship,reference1_relationship_duration,reference2_name,reference2_email,reference2_telephone,reference2_work_address,reference2_home_address,reference2_relationship,reference2_relationship_duration } = req.body;
    
    reference1_name = reference1_name ? reference1_name.toString().replace(/\s+/g, ' ') : reference1_name;
    reference1_email = reference1_email ? reference1_email.toString().replace(/\s+/g, '') : reference1_email;
    reference1_telephone = reference1_telephone ? reference1_telephone.toString().replace(/\s+/g, '') : reference1_telephone;
    reference1_work_address = reference1_work_address ? reference1_work_address.toString().replace(/\s+/g, ' ') : reference1_work_address;
    reference1_home_address = reference1_home_address ? reference1_home_address.toString().replace(/\s+/g, ' ') : reference1_home_address;
    reference1_relationship = reference1_relationship ? reference1_relationship.toString().replace(/\s+/g, ' ') : reference1_relationship;
    reference1_relationship_duration = reference1_relationship_duration ? reference1_relationship_duration.toString().replace(/\s+/g, '') : reference1_relationship_duration;

    reference2_name = reference2_name ? reference2_name.toString().replace(/\s+/g, ' ') : reference2_name;
    reference2_email = reference2_email ? reference2_email.toString().replace(/\s+/g, '') : reference2_email;
    reference2_telephone = reference2_telephone ? reference2_telephone.toString().replace(/\s+/g, '') : reference2_telephone;
    reference2_work_address = reference2_work_address ? reference2_work_address.toString().replace(/\s+/g, ' ') : reference2_work_address;
    reference2_home_address = reference2_home_address ? reference2_home_address.toString().replace(/\s+/g, ' ') : reference2_home_address;
    reference2_relationship = reference2_relationship ? reference2_relationship.toString().replace(/\s+/g, ' ') : reference2_relationship;
    reference2_relationship_duration = reference2_relationship_duration ? reference2_relationship_duration.toString().replace(/\s+/g, '') : reference2_relationship_duration;

    return db.task('addReferenceData', db => db.users.findById(user_id)
      .then((result) => {
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
                message: 'users reference record already  already exist, you can only edit',
              });
            }
             return db.admission.createReferenceData({ user_id,reference1_name,reference1_email,reference1_telephone,reference1_work_address,reference1_home_address,reference1_relationship,reference1_relationship_duration,reference2_name,reference2_email,reference2_telephone,reference2_work_address,reference2_home_address,reference2_relationship,reference2_relationship_duration,submit_status })
              .then((user) => {
                return res.status(201).json({
                  success: 'true',
                  message: 'Reference Data added',
                });
              });
          })
        })
      .catch((err) => {
        return res.status(500).json({
          success: 'false',
          message: 'unable to add reference Data',
          err: err.message,
        });
      }));
  }
}
export default AdmissionController;
