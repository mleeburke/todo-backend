'use strict';

// item-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const item = sequelize.define('items', {
    text: {
      type: Sequelize.STRING,
      allowNull: false
    },
    complete: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  item.sync();

  return item;
};
