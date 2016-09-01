var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  navn: String,
  tlfNr: Number,
  email: String,
  beskrivelse: String
})


module.export = mongoose.model('Order', OrderSchema);
