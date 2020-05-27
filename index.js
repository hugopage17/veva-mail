let nodemailer = require('nodemailer')
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
const port = 4000

app.post('/send', (req, res) => {
  console.log(req.body);
  const email = req.body.email
  const subject = req.body.subject
  const msg = req.body.msg
  let transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
          auth: {
              user: 'vevadevmail@gmail.com',
              pass: 'vevaaws!234'
          }
  });
  const message = {
      from: email,
      to: 'contact@vevadev.co.nz',
      subject: `${email} - ${subject}`,
      text: msg
  }
  transport.sendMail(message).then((info) => {
    res.status(200).send('email sent')
  }).catch((error) => {
    res.status(500).send(error)
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
