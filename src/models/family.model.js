const { model, Schema } = require("mongoose");

const FamilySchema = new Schema({
  code: { type: String, trim: true, required: true },
  name: { type: String, trim: true, required: true },
  guests: [{
    type: Schema.Types.ObjectId, ref: 'Guest', required: true
  }],
  email: String,
  cel: String,
  comment: String,
  confirmed: Boolean
});

const Family = model('Family', FamilySchema);

module.exports = Family;