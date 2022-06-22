const app = require('express')();
const port = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send('Hello');
})

app.get('/api/users', (req, res) => {
    res.json([
        {
            name: "khuoch",
            dob: "11/01/1995",
            address: "Somewhere"
        },
        {
            name: "dara",
            dob: "22/02/2022",
            address: "pp"
        }
    ])
})

app.listen(port, () => {
    console.log('app is running');
})