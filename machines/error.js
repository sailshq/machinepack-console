module.exports = {


  friendlyName: 'Log error',


  description: 'Output an error message to the console.',


  extendedDescription: 'The message will be written to stderr.',


  cacheable: false,


  sync: true,


  inputs: {

    value: {
      description: 'The value that will be written to the console.',
      example: '==='
    }

  },


  fn: function(inputs, exits) {
    console.error(inputs.value);
    return exits.success();
  }

};
