const express = require('express');
// 

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
})
app.get("/about", (req, res) => {
    // console.log('Request', req);
    console.log('Response', res);
    res.send('<h1>About Page</h1>');
})
app.get("/contact", (req, res) => {
    console.log('API111', req.query);
    res.send(`<h1>Contact Page ${req.query.abc} ${req.query.name} </h1>`);
})
app.get("/contact/:phone", (req, res) => {
    console.log('Request', req.params);

    res.send(`<h1>Contact Page ${req.params.phone}</h1>`);
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