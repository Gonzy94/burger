const orm = require("../burger/config/orm");

const burger = {
  selectAll() {
    orm.selectAll();
  },
  insertOne() {
    orm.insertOne();
  },
  updateOne() {
    orm.updateOne();
  },
};

module.exports = burger;