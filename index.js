
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodelmailer = require('nodemailer');
// const cors = require('cors');
// const { response } = require('express');

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.get('/', () => {
//   resizeBy.send('welcome to my form')
// })

// app.post('/api/forma', (req, res) => {

//   let data = req.body
//   let smtpTransport = nodelmailer.createTestAccount({
//     service: 'Gmail',
//     port: 465,
//     auth: {
//       user: 'rohan@stally.in', // generated ethereal user
//       pass: 'qwer1234', // generated ethereal password
//     }
//   });

//   let mailOptions = {
//     from: data.email,
//     to: 'rohan@starlly.in',
//     subject: Message`from ${data.name}`,
//     html: `
//     <h3>Informations</h3>
//     <ui>
//     <li>Name : ${data.name}</li>
//     <li>Email: ${data.email}</li>
//     <li>Phone : ${data.phoneNumber}
//     </ui>

//     <h3>Massage</h3>
//     <p>${data.requrements}</p>
//     `
//   };

//   smtpTransport.sendMail(mailOptions, (error, response) => {
//       console.log(error,response)
//     if (error) {
//       res.send(error)
//     }
//     else {
//       res.send('Success')
//     }
//   })
//  console.log(smtpTransport)
//   smtpTransport.close();

// })

// const PORT  = process.env.PORT||3001;
// api.listen(PORT,()=>{
// console.log(`server started at port ${PORT}`)
// })

