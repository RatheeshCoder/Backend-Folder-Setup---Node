export default{
    PORT: process.env.PORT,
    ACCESS_TOKEN_SECRET: process.env.JWT_SECRET,
    FRONTEND_URL: process.env.FRONTEND_URL,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
    API_HOST: process.env.API_HOST,
    MONGO_URI: process.env.MONGO_URI,
    EMAIL_USER:process.env.EMAIL_USER,
    EMAIL_PASS:process.env.EMAIL_PASS,
    EXPIREIN:process.env.EXPIREIN,
    JWT_SECRET:process.env.JWT_SECRET,
    EMAIL_TOKEN_EXPIRY:process.env.EMAIL_TOKEN_EXPIRY,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
    OTP_EXPIRY: process.env.OTP_EXPIRY,
    HASHING_SECRET: process.env.HASHING_SECRET,
    TWO_FA_NAME: process.env.TWO_FA_NAME,


    
    
    NODEMAILER: {
        MAIL: process.env.MAIL,
        HOST: process.env.HOST,
        PORT: 465,
        SECURE: true,
        USER_NAME: process.env.USER_NAME,
        PASSWORD: process.env.PASSWORD,
      },


   
}