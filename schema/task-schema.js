const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	name:{
		type:String,
		required:[true,'Task name must not be empty'],
		trim : true,
		maxlength: [20, 'Name cannot be more than 20 characters']
	},
	completed :{
		type: Boolean,
		default:false
	}
})

module.exports = mongoose.model('Task',TaskSchema);
