import mongoose from "mongoose";

// describing the schema for user
const UserSchema = new mongoose.Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    authentication: {
        // slect false mean when we fetch the user data dont include is feild bydefualt.
        password: { type: String, require: true, select: false },
        salt: { type: String, select: false }, 
        sessionToken:{type:String, select:false}
    }
})

// creatign the user modele with described schema
export const UserModel = mongoose.model('User', UserSchema)

// actions for User Models
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => { UserModel.findOne({ email }) }
export const getUserBySessionToken = (sessionToken: string) => { UserModel.findOne({ 'authentication.sessionToken': sessionToken }) }
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user: any) => user.toObject())
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id })
export const updateUserById = (id:string, values: Record<string,any>) => UserModel.findByIdAndUpdate(id, values)