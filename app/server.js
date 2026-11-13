const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check API
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'AWS DevOps CI/CD application is running'
  });
});

// Welcome API
app.get('/', (req, res) => {
  res.send('Welcome to AWS DevOps CI/CD Project!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
