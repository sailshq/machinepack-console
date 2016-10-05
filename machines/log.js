module.exports = {


  friendlyName: 'Log to stdout',


  description: 'Output a message to stdout (standard output).',


  sideEffects: 'cacheable',


  sync: true,


  inputs: {

    value: {
      description: 'The value that will be written to stdout.',
      example: '==='
    }

  },


  fn: function(inputs, exits) {
    console.log(inputs.value);
    return exits.success();
  }

};
