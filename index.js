const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        console.log(req.body);
        const htmlEmail = `
        <h3> Contact Details</h3>
        <ul>
            <li>Email: ${req.body.email} </li>
            <li>First Name: ${req.body.firstName} </li>
            <li>Phone Number: ${req.body.phoneNumber} </li>
        </ul> 
        <h3>Comment</h3>
        <p>${req.body.Comment}</p>
        `;

        let transporter = nodemailer.createTransport({
            // host: 'smtp.gmail.com',
            // port: 587,
            service: 'gmail',
            auth: {
                user: 'jonnymutavi@gmail.com', // generated ethereal user
                pass: 'Hakunapassword' // generated ethereal password
            }
        });

        let mailOptions = {
            from: `${req.body.email}`,
            to: 'john.mutavi@moringaschool.com',
            replyTo: `${req.body.email}`,
            subject: 'New City Mag Subscriber',
            text: req.body.Comment,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }

            console.log('Message sent: %s', info.Comment);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});