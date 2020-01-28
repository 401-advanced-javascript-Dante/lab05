'use strict';


const Interface = require('../mm-interface');
const schema = require('../schemas/products-schema') ;

class Products extends Interface {
  constructor(){
    super(schema);
  }
}


module.exports = Products ;