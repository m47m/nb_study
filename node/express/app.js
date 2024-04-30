import  express from 'express';
import User from './src/user.js';
import List from './src/list.js';
import LoggerMiddleware from './middleware/logger.js'

const app = express();

app.use(LoggerMiddleware)
app.use(express.json());
app.use('/user',User);
app.use('/list',List);

app.listen(3001,()=>{
	console.log("3001 listen")
})
