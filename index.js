const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const followRoutes = require('./routes/followRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


// HEALTH CHECK
const router = express.Router({});
const health = router.get('/',(req,res)=>{
  const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
  };
  console.log({healthcheck})
  res.send(healthcheck)
})


app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/follow', followRoutes);
app.use('/health',health)
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
