const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://vishad79:jW5dOBRUjMImSMfn@cluster0.zo4joh8.mongodb.net/task-manager?retryWrites=true&w=majority';
const connectDb = (url)=>{
	return mongoose.connect(dbURL);
}

module.exports = connectDb;
