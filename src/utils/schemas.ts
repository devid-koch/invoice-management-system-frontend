// import * as yup from "yup";
// import { AddEmployeeFormValues } from "./types";

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// export const addEmployeeFormSchema:
//   | yup.ObjectSchema<AddEmployeeFormValues>
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   | any = yup
//     .object({
//     employee_id: yup.string().required("Employee ID is required"),
//     firstName: yup.string().required("First Name is required"),
//     middleName: yup.string().optional(),
//     lastName: yup.string().required("Last Name is required"),
//     fatherName: yup.string().required("Father Name is required"),
//     motherName: yup.string().required("Mother Name is required"),
//     phoneNumber: yup
//       .string()
//       .required("required")
//       .matches(phoneRegExp, "Phone number is not valid")
//       .min(10, "too short")
//       .max(10, "too long"),
//     altPhoneNumber: yup
//       .string()
//       .matches(phoneRegExp, "Phone number is not valid")
//       .min(10, "too short")
//       .max(10, "too long"),
//     gender: yup.string().required("Gender is required"),
//     dob: yup.string().required("Date of Birth is required"),
//     email: yup.string().email().required("Email is required"),

//     uuid: yup.string().required("ID number is required"),
//     idType: yup
//       .number()
//       .required("ID is required")
//       .typeError("Invalid  Number"),
//     maritalStatus: yup
//       .number()
//       .required("Marital Status is required")
//       .typeError("Invalid ID"),

//     relationship: yup.string(),
//     emergencyContactName: yup.string().optional(),
//     emergencyContactNumber: yup
//       .string()
//       .optional(),
//     emergencyHomeAddress: yup
//       .string()
//       .optional(),
//     emergencyOfficeAddress: yup.string().optional(),

//     addressLine1: yup.string().required("Address Line 1 is required"),
//     addressLine2: yup.string(),
//     city: yup.string().required("City/Village/Town is required"),
//     district: yup.string().required("District is required"),
//     pin: yup.number().required("Pin Code is required"),

//     addressLine1Permanent: yup.string(),
//     addressLine2Permanent: yup.string(),
//     cityPermanent: yup.string(),
//     districtPermanent: yup.string(),
//     pinPermanent: yup.number(),

//     designation: yup.string().required("Designation is required"),
//     dateOfJoining: yup.string().required("Date is required"),

//     department: yup.string().optional(),
//     qualification: yup.string().required("Qualification is required"),

//     blood: yup.string().required("Blood group is required"),
//     religion: yup.string().required("Religion is required"),
//     caste: yup.string().required("Caste is required"),
//     bank: yup.string(),
//     accountNumber: yup
//       .number(),
//     ifsc: yup.string(),
//     branch: yup.string(),
//   })
//   .required();
// addEmployeeFormSchema;
