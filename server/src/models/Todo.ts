import mongoose, { Document, Schema } from "mongoose";


export interface ITodo extends Document {
    name: string
    description: string
    status: boolean
}

const TodoSchema: Schema = new Schema(
    {
        name: { 
            type: String, 
            required: true
        }, 
        description: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ITodo>("Todo", TodoSchema);