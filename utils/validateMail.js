import * as mailsafety from "mailsafety";
import config from "@/config";

export const validateEmail = async (email) => {
  const validation = await mailsafety.validateEmail(email);

  if (config.RUNTIME === "production" && validation.isDisposable) {
    return { status: true };
  } else {
    return { status: true };
  }
};
