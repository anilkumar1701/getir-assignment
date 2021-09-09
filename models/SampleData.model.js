const mongoose = require('mongoose')

// schema declaration for dummy collection

const { Schema } = mongoose

const SampleData = mongoose.model(
  'Records',
  new Schema({
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    counts: {
      type: [Number],
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
  }),
)

module.exports = SampleData
