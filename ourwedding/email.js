var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
transporter.sendMail({
    from: 'admin@friendlysbox.com',
    to: 'friendly781114@gmail.com',
    subject: 'hello',
    text: 'hello world!'
});
