const db = require("../../db/index.js");

function findAll() {
  return new Promise(async (resolve, reject) => {
    const { Votes } = await db();

    const result = await Votes.findAll();
    resolve(result);
  });
}

function findAllActive() {
  return new Promise(async (resolve, reject) => {
    try {
      const { Votes } = await db();
      const result = await Votes.findAllActive();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

function findById(id) {
  return new Promise(async (resolve, reject) => {
    const { Votes } = await db();

    const result = await Votes.findById(id);
    resolve(result);
  });
}

function deleteById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const { Votes } = await db();

      const result = await Votes.deleteById(id);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

function create({ name }) {
  return new Promise(async (resolve, reject) => {
    try {
      const model = {
        name,
      };
      const { Votes } = await db();
      const result = await Votes.create(model);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

function addVote(id, type) {
  return new Promise(async (resolve, reject) => {
    try {
      const { Votes } = await db();
      const vote = await Votes.findById(id);
      const model = { votes: vote.votes };
      if (type === "positive") {
        model.votes.positive = (vote.votes.positive || 0) + 1;
      } else if (type === "negative") {
        model.votes.negative = (vote.votes.negative || 0) + 1;
      } else {
        throw Error("Invalid Type");
      }
      const result = await Votes.update(id, model);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

const voteController = {
  findAll,
  findAllActive,
  create,
  findById,
  deleteById,
  addVote,
};
module.exports = voteController;
