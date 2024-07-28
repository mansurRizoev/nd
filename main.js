const express = require('express');
// 

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
})
app.get("/about", (req, res) => {
    res.send('<h1>About Page</h1>');
})
app.get("/api/category", (req, res) => {
    res.json({
        message: "This is the API endpoint for categories.",
        data: {
            categories: ["Electronics", "Clothing", "Books", ""]
        }
    });
})
app.listen(8080, () => {
    console.log('Server started on port 8080');
});