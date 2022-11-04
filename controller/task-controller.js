const Task = require('../schema/task-schema.js');


const list = async (req,res)=>{
	try{

		let tasks = await Task.find({});
		res.status(200).json(tasks);
	}catch(err){
		res.status(500).send(err);
	}
}

const remove = async (req, res)=>{
	try{
		let {id:taskId} = req.params;
		let task = await Task.findByIdAndDelete({_id: taskId});
		if(!task){
			return res.status(204).send({message:"No task found."})
		}
		res.status(200).send({message : `Task is removed successfully`});
	}catch(err){
		res.status(500).send(err);
	}
}

const create = async (req, res)=>{
	try{

		let task= await Task.create(req.body);
		res.status(201).json({task});
	}catch(err){
		res.status(500).send(err);
	}
}

const update = async (req, res)=>{

	try{
	let {id:taskId} = req.params;
	
	let task = await Task.findByIdAndUpdate(taskId, req.body, {new:true, runValidators:true});
	if(!task){
		return res.status(204)
	}
	res.status(200).send(task);
	}catch(error){
		res.status(500).send(error);
	}
}

const get = async (req, res)=>{
	try{
		console.log(req.params);
		const task = await Task.findOne({_id:req.params.id});
		if(!task){
			res.status(204).send({message:'Task does not exist.'})
		}

		res.status(200).send(task);

	}catch(err){
		res.status(500).send(err);
	}
}

module.exports = {list,create, get, update, remove}
