const express = require('express')

let app = express(); // création de l'objet représentant notre application express
let port = 8080;
let path = require('path');
const fs = require('fs');
//let contents = fs.readFileSync("data.json");
//let jsonContent = JSON.parse(contents);



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false})) 

app.use(bodyParser.json());



app.get('/', function(req, res) { // création de la route sous le verbe get
   
    res.sendFile(path.join(__dirname + '\index.html')); 
    
})



app.post('/user_create', function (req, res) {
   
    console.log(req.body)
    

    res.json(req.body)
   




        fs.appendFile('data.json', JSON.stringify(req.body, null, 4), (err) => {
            if (err) throw err;
            console.log('saved !')
        })

    
    

    /*fs.writeFile('data.json', JSON.stringify(req.body, false, 4), (err) => {
        if (err) throw err;
        console.log('Tout va bien !')
    })*/
    
    })


  
   
   
    


app.listen(port, () =>  { // ecoute du serveur sur le port 8080
    console.log('le serveur fonctionne')
})

