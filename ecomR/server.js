const path = require('path');
const express = require('express');
const mysql = require('mysql');
let app = express(); // crMySQL With Node.jséation de l'objet représentant notre application express
let port = 8080;
const ejs = require('ejs');
var bodyParser =    require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(express.static('views/html'))
app.use(express.static(__dirname + '/views/html/css'));


const db = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password :'',
    database : 'crud'});

    db.connect((err) => {
        if (err){
            throw err;
        }
        console.log('MySql Connected ...')
        })


        app.set('views',path.join(__dirname,'views/html'));
        
			
        //set view engine
        app.set('views', './views/html');
        

        app.set('view engine', 'ejs'); 

        app.get('/category', (req,res)=>{
            let sql = "SELECT * FROM categorie";
            let query = db.query(sql, (err, rows) => {
                if(err) throw err;
                res.render('index', {
                  
                   categorie : rows
                });
            });
          
        })
        
        app.post('/addC',(req,res)=>{

            var nom = req.body.nom;
            let sqlp ="INSERT INTO categorie(nom) VALUES ('"+nom+"')";
            db.query(sqlp,(err,rows,fields)=>{
                if (!err) {
                    res.redirect('/category')
                }else{
                    console.log(err);
                }
            });
        
        console.log(req.body.category);
        });

        app.get('/edit/:id',(req,res)=>{

          
            let sql ="SELECT * FROM categorie WHERE id = '+req.params.id+'  ";
            
            
            let query = db.query(sql,(err,result)=>{
                if (err) throw err;
                res.render('category');
            
            });
            
            });
            ///
            app.post('/category/update',(req,res)=>{
                let catId = req.body.id;
            
                let sqlS ="UPDATE categorie SET nom='"+req.body.nameupdate+"' WHERE id="+catId+"";
            
                let query=db.query(sqlS,(err,result)=>{
                    if (err) throw err;
                    res.redirect('/category');
            
                });
            
            });

            app.get('/delete/:id',(req,res)=>{
    
                let sqlQ = `DELETE FROM categorie WHERE id = `+req.params.id +``;
                db.query(sqlQ,(err,rows,fields)=>{
                    
                    if (!err) {
                        res.redirect('/category')
                    }else{
                        console.log(err);
                        
                    }        
                });
            });
       

       
      
      
     
       
     /////////
     
    


  


app.listen(port, () =>  { // ecoute du serveur sur le port 8080
    console.log('le serveur fonctionne !!')
});