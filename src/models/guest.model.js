const {model, Schema } = require("mongoose");

const GuestSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  foodRecommendation: String,
  confirmed: Boolean,
});

const Guest = model("Guest", GuestSchema);

module.exports = Guest;
