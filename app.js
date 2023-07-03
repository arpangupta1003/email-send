const express = require('express');
const Email = require("./Email.js");

const path = require('path');
const hbs = require("hbs");

const app = express();


const PORT = 8000;

const staticPath = path.join(__dirname, "../public");


const templatePath = 'C:/Users/arpan/OneDrive/Desktop/backend/emailSend/template/views';
console.log(templatePath);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", templatePath);




app.get('/', (req, res) => {
    res.send("I AM SERVER");
});

app.get('/email', Email);

app.get('/login',(req,res)=>{
    res.render('login');
    Email;
    
})
app.post('/verify', async (req, res) => {
    const otpFilled = req.body.otp;
    // const ObjectCopy=Email;

    // const Email = EmailObject.Email;
// const otpSent = ObjectCopy.copy;

    // console.log(`Sent Otp is ${otpSent}`);
    // console.log(`Otp filled is ${otpFilled}`);
    // console.log(otpSent);
    // res.send(otpFilled == otpSent);
})





app.listen(PORT, () => {
    console.log(`Server running on port no ${PORT}`);
});