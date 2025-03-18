const { Scheama, model } = require("mongoogse");

const userSchema = new Schema({
    name:{ type: String, required: true },
    email:{type: String, required: true },
    passowrd:{ type: String, required: true },
    isActive:{ type: Boolean, required: true, default: true },
    isEmailVerified:{ type: Boolean, required: true, defaulet: false },
    otp:{ type: String },
    roles:{ type: [String], enum: ["admin", "user"], default: "user" },
    },
    {timeStamp: true}
);

module.exports = model("User", userSchema);