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

		res.send('Remove a task');
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
	res.send('Update an existing task');
}

const get = async (req, res)=>{
	try{
		console.log(req.params);
		const task = await Task.find({_id:req.params.id});
		if(!task){
			res.status(204).send({})
		}	
		res.status(200).send(task);

	}catch(err){
		res.status(500).send(err);
	}
}

module.exports = {list,create, get, update, remove}
