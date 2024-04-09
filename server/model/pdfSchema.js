const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  data: {
    type: Buffer, // Store binary data
    required: true
  }
});

const Pdf = mongoose.model('Pdf', pdfSchema);

module.exports = Pdf;
