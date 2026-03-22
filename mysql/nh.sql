CREATE DATABASE patientdb;

USE patientdb;

CREATE TABLE patients (
  patient_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  date_of_birth DATE NOT NULL,
  gender ENUM('Male', 'Female', 'Other') NOT NULL,
  blood_group VARCHAR(5),
  phone_number VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(255) UNIQUE,
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  postal_code VARCHAR(10),
  emergency_contact_name VARCHAR(100),
  emergency_contact_phone VARCHAR(15),
  medical_history TEXT,
  weight INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE patdetails (
  patient_id INT AUTO_INCREMENT PRIMARY KEY,
  hospital_name VARCHAR(255),
  patient_type ENUM('Inpatient', 'Outpatient') DEFAULT 'Outpatient',
  admission_date DATE,
  discharge_date DATE,
  ward_number VARCHAR(50),
  room_number VARCHAR(50),
  doctor_assigned VARCHAR(100)
);

INSERT INTO patdetails 
  (hospital_name, patient_type, admission_date, discharge_date, ward_number, room_number, doctor_assigned)
VALUES
  ('Apollo Hospital', 'Inpatient', '2025-10-21', '2025-10-25', 'B3', '202', 'Dr. Meena Reddy'),
  ('Fortis Hospital', 'Outpatient', '2025-10-22', '2025-10-22', 'A1', '101', 'Dr. Rajesh Kumar'),
  ('Max Hospital', 'Inpatient', '2025-10-20', '2025-10-26', 'C2', '305', 'Dr. Neha Singh'),
  ('Manipal Hospital', 'Outpatient', '2025-10-23', '2025-10-23', 'B2', '110', 'Dr. Arjun Verma'),
  ('AIIMS', 'Inpatient', '2025-10-19', '2025-10-24', 'D1', '401', 'Dr. Meena Reddy');

SELECT * FROM patdetails;


INSERT INTO patients (
  first_name, last_name, date_of_birth, gender, blood_group,
  phone_number, email, address, city, state, postal_code,
  emergency_contact_name, emergency_contact_phone, medical_history, weight
)
VALUES
('Ravi', 'Kumar', '1985-03-14', 'Male', 'O+', '9876543210', 'ravi.k@example.com', '12 MG Road', 'Bangalore', 'Karnataka', '560001', 'Sita Kumar', '9812345678', 'Diabetes', 134),
('Priya', 'Sharma', '1990-08-22', 'Female', 'A+', '9823456789', 'priya.s@example.com', '45 Anna Nagar', 'Chennai', 'Tamil Nadu', '600040', 'Rahul Sharma', '9834567890', 'No allergies', 90),
('Mohammed', 'Ali', '1978-12-05', 'Male', 'B+', '9811122233', 'ali.m@example.com', '22 Park Street', 'Kolkata', 'West Bengal', '700016', 'Fatima Ali', '9844455566', 'Hypertension', 99),
('Sneha', 'Patil', '1995-04-10', 'Female', 'AB-', '9870011223', 'sneha.p@example.com', '19 FC Road', 'Pune', 'Maharashtra', '411005', 'Ramesh Patil', '9822244455', 'Asthma', 81),
('John', 'Mathew', '1980-09-30', 'Male', 'O-', '9901122334', 'john.m@example.com', '5 Marine Drive', 'Mumbai', 'Maharashtra', '400020', 'Mary Mathew', '9811133344', 'Allergic to penicillin', 122);





/*  
  1. Show first name , last name and gender of patients whose gender is 'M'
*/

SELECT first_name , last_name , gender 
FROM patients
WHERE gender = 'Male';



/* 
  2.show first_name ,last_name of the patients show that doesnt have the allergies
*/
SELECT first_name , last_name , medical_history
 FROM patients
WHERE medical_history = "No allergies" ;




/* 
 3.show first name of patients show that the name starts with R
*/

		SELECT *
		FROM patients
		WHERE first_name LIKE 'R%';
        
        
        
/*
4.show the patients details that patient weight range within 90 to 120
*/
      SELECT * FROM patients
WHERE weight >=90 AND weight <=120



/* 
5. update the table where the no allergies replace the NKA
*/
UPDATE patients 
SET medical_history = "NKA"
WHERE medical_history = "No allergies"



/* 
6. Concat first_name , last_name as full name into one column show their full name
*/
SELECT CONCAT(first_name ," " , last_name) AS full_name
FROM patients 


/* 
7.show the first name , last name and the province name of the patient test
*/
SELECT p.first_name , p.last_name , h.hospital_name
FROM patients p
JOIN patdetails h
ON p.patient_id = h.patient_id


/* 
 8. show how many patients have a birth date with 2010 as a birth year
*/

	SELECT COUNT(*) FROM patients
    WHERE YEAR(date_of_birth)=1990
    
    SELECT * FROM patients 
    WHERE YEAR(date_of_birth) >=1990
    
    
 /* 
 9. show the patient who have highest height 
 */
	SELECT first_name , last_name , weight
FROM patients
WHERE weight = (
    SELECT MAX(weight)
    FROM patients
);


/*
 10. show the patients and patient id =1 
*/
	SELECT * FROM patients
	WHERE patient_id = 1 ;
    
    
/*
  11. show the total number of admission 
*/  
	SELECT COUNT(*) FROM patients


/*
  12. show all the columns where the admissions and discharge date at the same date
*/
  SELECT * FROM patdetails
  WHERE admission_date = discharge_date