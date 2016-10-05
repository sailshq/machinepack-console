module.exports = {


  friendlyName: 'Log to stderr',


  description: 'Output a message to stderr (standard error).',


  sideEffects: 'cacheable',


  sync: true,


  inputs: {

    value: {
      description: 'The value that will be written to stderr.',
      example: '==='
    }

  },


  fn: function(inputs, exits) {
    console.error(inputs.value);
    return exits.success();
  }

};
