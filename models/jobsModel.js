import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Company name is required'],
    },

    position: {
      type: String,
      required: [true, 'position is required'],
    },
    status: {
      type: String,
      enum: ['pending', 'review', 'interview'],
      default: 'pending',
    },

    workType: {
      type: String,
      enum: ['full-time', 'part-time', 'contract', 'intern'],
      default: 'full-time',
    },

    workLocation: {
      type: String,
      default: 'Mumbai',
      required: [true, 'Mumbai is required'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
)

export default mongoose.model('Job', jobSchema)
