const express = require('express');
const taskrouter = require('./routes/task-router.js');
const connectDb = require('./db/connection.js');
const notFound = require('./middleware/not-found/notfound.js');

const app = express();
app.use(express.json());
app.use(express.static(__dirname));


app.get("/",(req,res)=>{
	res.send("Hello Node..");

});

app.use('/api/v1/tasks', taskrouter);


app.use(notFound);

connectDb('').then(
	()=>{
		console.log('Database is connected successfully');
		app.listen(3000,()=>{
			console.log("Server is listening to port 3000");
		});
	}
).catch((err)=>{
	console.error(err);
});

