const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    cardio: {
      type: String,
    },
    _id: {
      type: String,
    },
    date: {
      type: String,
    },
    clientId: {
      type: String,
    },
    exercises: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Workouts", schema);
