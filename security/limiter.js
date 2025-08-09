import { rateLimit } from "express-rate-limit";

// export const limiter = rateLimit({
//   windowMs: 1 * 60 * 1000,
//   limit: 5,
//   standardHeaders: "draft-7",
//   legacyHeaders: false,
//   handler: function (_, res) {
//     res.status(429).json({
//       success: false,
//       message: "Too many requests, please try again later.",
//     });
//   },
//   // store: ... , // Redis, Memcached, etc. See below.
// });

export const limiter = (req, res, next) => {
  return next();
};
