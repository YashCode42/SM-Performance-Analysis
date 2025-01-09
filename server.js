const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// API endpoint to provide AI insights
app.get('/api/getInsights', (req, res) => {
    const insights = [
        "Analyze user behavior to improve engagement.",
        "Implement A/B testing for your marketing campaigns.",
        "Streamline your workflow for greater efficiency.",
        "Leverage automation to reduce repetitive tasks.",
        "Explore new markets for expanding your audience."
    ];
    res.json(insights);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
