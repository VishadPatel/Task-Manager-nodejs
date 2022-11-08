const {CustomAPIError} = require('../custom-error/customerror.js');

const errorhandler = (err, req, res, next)=>{
	console.log(err)
	if(err instanceof CustomAPIError){
		return	res.status(err.statusCode).json({msg : err.message})
	}else{
		return res.status(500).send({message: 'Internal server error. Try after sometime.', error:err});
	}
}

module.exports = errorhandler;
