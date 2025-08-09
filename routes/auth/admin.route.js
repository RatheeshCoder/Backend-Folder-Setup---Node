// import express from "express";
// import * as controller from "@/controllers";
// import * as validations from "@/validations";
// import { limiter } from "@/security/limiter";
// import { loginRouteSwitch } from "@/middleware/auth.middleware";
// import { userAuthenticate as userAuth } from "@/security/passport";
// const router = express.Router();

// router
//   .route("/signup")
//   .post(limiter, validations.auth.admin.signup, controller.auth.admin.signup);
// router.route("/verify-email").post(limiter, controller.auth.admin.verifyEmail);
// router
//   .route("/create-password")
//   .post(
//     limiter,
//     validations.auth.admin.password,
//     controller.auth.admin.createPassword
//   );
// router
//   .route("/signin")
//   .post(limiter, validations.auth.admin.email, loginRouteSwitch);

// router.route("/refresh-token").post(controller.auth.admin.refreshToken);
// router.route("/logout").post(userAuth, controller.auth.admin.logOut);

// export default router;
