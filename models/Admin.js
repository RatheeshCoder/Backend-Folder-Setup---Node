    import mongoose from "mongoose";

    const adminSchema = new mongoose.Schema(
      {
       
      },
      {
        timestamps: true,
      }
    );

    const Admin = mongoose.model("admin", adminSchema, "admin");
    export default Admin;
