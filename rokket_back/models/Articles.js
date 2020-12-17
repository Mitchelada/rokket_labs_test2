import mongoose from 'mongoose'
const Schema = mongoose.Schema

const articlesSchema = new Schema({
    name: {
        type: String,
        trim: true
    }
})

export default mongoose.model('Articles', articlesSchema)