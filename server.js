const express=require('express')
const app=express()

app.use('/css',express.static('css'));
// app.use('/css', express.static('css'));

app.get('/',(req,res)=>{
    res.render('Ichiban_Nepal.ejs')
})
app.get('/about',(req,res)=>{
    res.render('About.ejs')
})
app.get('/addtocart',(req,res)=>{
    res.render('addtocart.ejs')
})
app.get('/loginpage',(req,res)=>{
    res.render('loginpage.ejs')
})
app.get('/shop',(req,res)=>{
    res.render('shop.ejs')
})

app.listen(3000)