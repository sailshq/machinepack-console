module.exports = {


  friendlyName: 'Log message',


  description: 'Output a message to the console.',


  extendedDescription: 'The message will be written to stdout.',


  cacheable: false,


  sync: true,


  inputs: {

    value: {
      description: 'The value that will be written to the console.',
      example: '==='
    }

  },


  fn: function(inputs, exits) {
    console.log(inputs.value);
    return exits.success();
  }

};
