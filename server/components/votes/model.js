const { Schema } = require("mongoose");

const Model = new Schema({
  name: {
    type: String,
    required: true,
    comment: "Name",
  },
  description: {
    type: String,
    required: false,
    comment: "description",
  },
  category: {
    type: String,
    required: false,
    comment: "category",
  },
  picture: {
    type: String,
    required: false,
    comment: "picture",
  },
  lastUpdated: {
    type: String,
    required: false,
    comment: "lastUpdated",
  },
  votes: {
    type: {
      positive: Number,
      negative: Number,
    },
    required: false,
    comment: "votes",
  },
});

module.exports = (db) => {
  return db.model("votes", Model);
};
