const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected"));

const userRoutes = require('./routes/userRoutes');
const historyRoutes = require('./routes/historyRoutes');

app.use('/api/users', userRoutes);
app.use('/api/history', historyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
