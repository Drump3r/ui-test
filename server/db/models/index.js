"use strict";

// const defaults = require('defaults');
const setupDatabase = require("../lib/mongodb");
const setupVoteModel = require("../../components/votes/model");

////////////

const setupVote = require("../../components/votes/store");

module.exports = async (config) => {
  const db = setupDatabase(config);

  const VoteModel = setupVoteModel(db);

  const Votes = setupVote(VoteModel, db);

  return {
    Votes,
  };
};
