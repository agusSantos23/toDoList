import mongoose from "mongoose";

const taskChema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    completed:{
        type: Boolean,
        require: true,
        
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
    
},{
    timestamps: true
})

export default mongoose.model("Task", taskChema)





