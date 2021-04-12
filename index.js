var repo = "~/app"

// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

const exec = require('child_process').exec

// Initialize express and define a port
const app = express()
const PORT = 3000

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

app.post("/", (req, res) => {

    //This will depend on your project!
    if(req.body.ref == 'refs/heads/staging'){
        exec('cd '+repo+' && git checkout staging && git pull && mvn install && pm2 stop runapp && pm2 start runapp');
    }
    
    res.status(200).end() // Responding is important
})