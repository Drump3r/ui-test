"use strict";

module.exports = function setup(Model, db) {
  function findById(id) {
    return Model.findById(id);
  }
  function deleteById(_id) {
    return Model.deleteOne({
      _id,
    });
  }

  function findAll() {
    return Model.find().sort({ order: 1 });
  }

  function findAllActive() {
    return Model.find({ active: true }).sort({ name: 1 });
  }

  async function create(model) {
    const result = await new Model(model).save();
    return result;
  }

  async function createMany(data) {
    const result = await Model.insertMany(data);
    return result;
  }

  async function update(_id, model) {
    const cond = { _id };
    const result = await Model.updateOne(cond, model);
    return result ? Model.findOne(cond) : false;
  }

  async function updateMany(cond, model) {
    const result = await Model.updateMany(cond, model);
    return result?.ok === 1;
  }

  return {
    findById,
    findAll,
    findAllActive,
    create,
    createMany,
    deleteById,
    update,
    updateMany,
  };
};
