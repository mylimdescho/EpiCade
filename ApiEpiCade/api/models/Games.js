/**
 * Games.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    genre: {
      type: 'string'
    },
    platform: {
      type: 'string'
    },
    nb_players: {
      type: 'integer'
    },
    year: {
      type: 'integer'
    },
    publisher: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    configfile: {
      type: 'string'
    },
    gamepath: {
      type: 'string'
    },
    plays: {
      type: 'integer'
    }
  }
};
