// import * as yup from "yup";
// import yupToFormError from "@/utils/yupToFormError";
// import { ADDRESS, EMAIL, EMAIL_CHARS, PHONE } from "@/constant/regex";
// import { GENDER, ORGANIZATION_COUNT, ORGANIZATION_TYPE } from "@/constant/enums";


// export const organizationsCreation = async (req, res, next) => {
//     try {
//       const { body } = req;
  
//       const schema = yup.object({
//         email: yup
//         .string()
//         .email("Invalid email")
//         .min(5, "Invalid email")
//         .max(50, "Maximum character exceeded")
//         .matches(EMAIL, "Invalid Email")
//         .matches(EMAIL_CHARS, "Email has invalid characters")
//         .trim()
//         .required("Email is required"),

//     orgContact: yup
//         .string()
//         .test("len", "Contact number must be 10-12 digits", (val) => 
//             val && val.length >= 10 && val.length <= 12
//         )
//         .required("Organization contact is required"),

//     orgAddress: yup
//         .string()
//         .min(5, "Invalid address")
//         .max(50, "Maximum character exceeded")
//         .matches(ADDRESS, "Invalid address")
//         .trim()
//         .required("Organization address is required"),

//     orgType: yup
//         .string()
//         .oneOf(ORGANIZATION_TYPE, "Invalid organization type")
//         .required("Organization type is required"),

//     employeeCount: yup
//         .string()
//         .oneOf(ORGANIZATION_COUNT, "Invalid employee count")
//         .required("Employee count is required"),

//       });
  
//       try {
//         await schema.validate(body, { abortEarly: false });
//         return next();
//       } catch (validationError) {
//         return res.status(400).json({ success: false, errors: yupToFormError(validationError) });
//       }
//     } catch (error) {
//       console.error("Signup validation error:", error);
//       return res.status(500).json({ success: false, message: "Something went wrong during organizations Creation validation." });
//     }
//   };
