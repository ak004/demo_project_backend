import dotenv from 'dotenv';
  dotenv.config();
  
 
// Connect to MongoDB
const port = process.env.PORT || 7000;
import mongoose from './src/config/mongoose.js';

mongoose()
  .then((_) => console.info("=== Database Connected ==="))
  .catch((error) => console.error(error));
  

// Configure routes
// app.use('/', routes);
import configureApp from './src/config/express.js';

const app = configureApp();

app.get("*", function (req, res) {
    res.status(404).send("page not found");
});

 

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


export default app;
