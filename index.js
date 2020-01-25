'use strict';

const mongoose = require('mongoose');
const MONGOOSE_URI = 'mongodb://localhost:27017/lab05';
mongoose.connect(MONGOOSE_URI, {useNewUrlParser: true}) ;