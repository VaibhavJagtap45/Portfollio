const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

const app=express()
app.use(express.json())
app.use(cors())

const PORT=8080;
mongoose.connect(`mongodb+srv://vaibhav:Aaidada@143@cluster0.0vvs4s8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// // Define a schema and model for the contact form data
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

// // Define the route to handle form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving to database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`)
})