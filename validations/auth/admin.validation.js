import { EMAIL,EMAIL_CHARS, PASSWORD  } from "@/constant/regex";
import yupToFormError from "@/utils/yupToFormError";
import * as yup from "yup";

export const signup = async (req, res, next) => {
  try {
    const { body } = req;
    
    const schema = yup.object({
      email: yup
        .string()
        .email("Invalid email")
        .min(5, "Invalid email")
        .max(50, "Maximum character exceeded")
        .matches(EMAIL, "Invalid Email")
        .matches(EMAIL_CHARS, "Email has invalid characters")
        .trim()
        .required("Email is required"),
        orgName: yup.string().min(1).max(50, "Maximum character exceeded").required("Organization name is required"),
    });

    try {
      await schema.validate(body, { abortEarly: false });
      return next();
    } catch (validationError) {
      return res.status(400).json({ success: false, errors: yupToFormError(validationError) });
    }
  } catch (error) {
    console.error("Signup validation error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong during signup validation." });
  }
};


