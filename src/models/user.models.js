import mongoose, {Schema} from "mongoose"

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            lowercase:true,
            unique:true,
            index:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            lowercase:true,
            unique:true,
            trim:true
        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true
        },        
        avatar:{
            type:String, //cloudinary URL
            required:true,
        },
        coverimage:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:[true, "Password is required!"],
        },
        refreshToken:{
            type:String
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ]

    },
    {timestamps:true})

export const User = mongoose.model("User", userSchema)