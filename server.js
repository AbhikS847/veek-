const express = require('express');

const app = express();

const connectDB = require('./config/db');

const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

app.use(express.json({extended:false}));

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));


app.listen(port, () => {console.log(`Server is running on port ${port}`)});

