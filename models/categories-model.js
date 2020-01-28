'use strict';


const Interface = require('../mm-interface');
const schema = require('../schemas/categories-schema') ;

class Catagories extends Interface {
  constructor(){
    super(schema);
  }
}


module.exports = Catagories ;