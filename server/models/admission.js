import bcrypt from 'bcrypt-nodejs';

/** Class for interacting with the user data table. */
export default class Admission {
  /**
  * Class constructor.
  * @param {object} db - Object used to query database.
  */
  constructor(db) {
    this.db = db;
  }
  /**
  * Create a new admission metadata for a candidate.
  * @param {object} values - values gotten from the body of a request.
  */

  createAdmissionData(values) {
    const sql = 'INSERT INTO admission (user_id,personal_info_status,academic_info_status,enroll_info_status,church_info_status,reference_info_status,upload_doc_status,reg_payment_status,interview_status,admission_status) VAlUES(${user_id},${personal_info_status},${academic_info_status},${enroll_info_status},${church_info_status},${reference_info_status},${upload_doc_status},${reg_payment_status},${interview_status},${admission_status}) RETURNING user_id,personal_info_status,academic_info_status,enroll_info_status,church_info_status,reference_info_status,upload_doc_status,reg_payment_status,interview_status,admission_status';
    return this.db.one(sql, values);
  }
  /**
  * Create a new admission personal_info for a candidate.
  * @param {object} values - values gotten from the body of a request.
  */
  createPersonalData(values){
    const sql ='INSERT INTO admission_personal_info (user_id,home_address,marital_status,gender,age,living_with_spouse,reason_if_no,work,work_address) VALUES(${user_id},${home_address},${marital_status},${gender},${age},${living_with_spouse},${reason_if_no},${work},${work_address}) RETURNING user_id,home_address,marital_status,gender,age,living_with_spouse,reason_if_no,work,work_address'
    return this.db.one(sql,values);
  }
  /**
  * Create a new admission church_info for a candidate.
  * @param {object} values - values gotten from the body of a request.
  */
   createChurchData(values){
     const sql='INSERT INTO admission_church_info (user_id,church_name,church_address,position_in_church,pastors_name,pastors_telephone,pastors_email) VALUES(${user_id},${church_name},${church_address},${position_in_church},${pastors_name},${pastors_telephone},${pastors_email}) RETURNING user_id,church_name,church_address,position_in_church,pastors_name,pastors_telephone,pastors_email'
     return this.db.one(sql,values)
   }
   /**
  * Create a new admission church_info for a candidate.
  * @param {object} values - values gotten from the body of a request.
  */
  createAcademicData(values){
    const sql = 'INSERT INTO admission_academic_info (user_id,highest_qualification,course_of_study,graduation_year,institution_name1,date_started1,date_ended1,institution_name2,date_started2,date_ended2,institution_name3,date_started3,date_ended3) VALUES(${user_id},${highest_qualification},${course_of_study},${graduation_year},${institution_name1},${date_started1},${date_ended1},${institution_name2},${date_started2},${date_ended2},${institution_name3},${date_started3},${date_ended3} RETURNING user_id,highest_qualification,course_of_study,graduation_year,institution_name1,date_started1,date_ended1,institution_name2,date_started2,date_ended2,institution_name3,date_started3,date_ended3)'
    return this.db.one(sql,values)
  }
  /**
  * Method for finding a user using the id.
  * @param {number} id - the id of a user.
  */

  findById(id) {
    const sql = 'SELECT * FROM users WHERE id = $1';
    return this.db.oneOrNone(sql, id);
  }
  /**
* Method for finding a user using the status.
* @param {number} status - the status of a user.
*/

  findByStatus(status) {
    const sql = 'SELECT id, firstname, lastname, email, telephone, image_url, created_at FROM users WHERE user_status = $1';
    return this.db.many(sql, status);
  }
  /**
  * Method for finding a user using the email address.
  * @param {String} email - the email of a user.
  */

  findByEmail(email) {
    const sql = 'SELECT * FROM users WHERE email = $1';
    return this.db.oneOrNone(sql, email);
  }
  /**
  * Method for finding a user using the telephone number.
  * @param {String} telephone - the telephone number of a user.
  */

  findByTelephone(telephone) {
    const sql = 'SELECT * FROM users WHERE telephone = $1';
    return this.db.oneOrNone(sql, telephone);
  }
  /**
  * Method for removing a user from the database using the id.
  * @param {number} id - the id of a user.
  */

  remove(id) {
    const sql = 'DELETE FROM users WHERE id = $1';
    return this.db.one(sql, id);
  }
  /** Method for getting all users in the database. */

  allData() {
    const sql = 'SELECT * FROM users';
    return this.db.many(sql);
  }
  /**
  * Method for modifying user information.
  * @param {number} id - the id of a user.
  */

  modify(values, id) {
    values.id = id;
    const sql = 'UPDATE users SET firstname=${firstname}, lastname=${lastname}, email=${email}, telephone=${telephone} WHERE id=${id} RETURNING *';
    return this.db.one(sql, values);
  }
  /**
  * Method for modifying user status.
  * @param {number} id - the id of a subject course.
  */

  modifyStatus(values, id) {
    values.id = id;
    const sql = 'UPDATE users SET user_status=${approve} WHERE id=${id} RETURNING *';
    return this.db.one(sql, values);
  }
}
