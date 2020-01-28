'use strict';

class Interface{
  constructor(schema){
    this.schema = schema;
  }


  create(record){
    let newRecord = this.schema.create(record);
    return newRecord ;
  }

  read(_id){
    if(_id){
      return this.schema.findOne({_id});
    }else{
      return this.schema.find({});
    }
  }

  update(_id , record){
    return this.schema.findByIdAndUpdate(_id , record , {new : true}) ;
  }

  delete(_id){
    return this.schema.findByIdAndDelete(_id);
  }

}


module.exports = Interface ;