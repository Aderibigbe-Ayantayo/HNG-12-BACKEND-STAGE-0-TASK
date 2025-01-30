const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Endpoint to return the required JSON response
app.get("/", (req, res) => {
  const response = {
    email: "adex.fadeel1989@gmail.com", // Replace with your registered email
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Aderibigbe-Ayantayo/your-repo", // Replace with your GitHub URL
  };

  res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
