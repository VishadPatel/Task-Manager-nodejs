const Task = require('../schema/task-schema.js');
const asyncWrapper = require('../middleware/asyncWrapper.js');

const list = asyncWrapper(async (req,res)=>{

	let tasks = await Task.find({});
	res.status(200).json(tasks);
})

const remove = asyncWrapper(async (req, res)=>{
	let {id:taskId} = req.params;
	let task = await Task.findByIdAndDelete({_id: taskId});
	if(!task){
		return res.status(204).send({message:"No task found."})
	}
	res.status(200).send({message : `Task is removed successfully`});

});

const create = asyncWrapper(async (req, res)=>{
	let task= await Task.create(req.body);
	res.status(201).json({task});
});

const update =asyncWrapper( async (req, res)=>{

	let {id:taskId} = req.params;

	let task = await Task.findByIdAndUpdate(taskId, req.body, {new:true, runValidators:true});
	if(!task){
		return res.status(204)
	}
	res.status(200).send(task);

})

const get = asyncWrapper(async (req, res)=>{
	const task = await Task.findOne({_id:req.params.id});
	if(!task){
		res.status(204).send({message:'Task does not exist.'})
	}

	res.status(200).send(task);


});

module.exports = {list,create, get, update, remove}
