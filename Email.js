
const nodemailer = require('nodemailer');
let random = Math.trunc(Math.random() * 10000);
const copy=random;

const Email = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();

    let random = Math.trunc(Math.random() * 10000);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'tester201003@gmail.com',
            pass: 'axleclwtfteuttml'
        }
    });

    let info = await transporter.sendMail({
        from: '"Tester" <tester201003@gmail.com>', // sender address
        to: "arpangupta320@gmail.com, arpan2010071@akgec.ac.in", // list of receivers
        subject: "OTP for verification ✔", // Subject line
        text: `${random}`, // plain text body
        // html: "<b>Hello world?</b>", // html body
    });

    // console.log(random);
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    res.render('C:/Users/arpan/OneDrive/Desktop/backend/emailSend/template/views/verificationPage.hbs')
};



module.exports = Email;
// module.exports.copy=copy;
// module.exports=random;