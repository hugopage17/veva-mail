let nodemailer = require('nodemailer')
const express = require('express')
const app = express()
const port = 4000

app.get('/send', (req, res) => {
  const email = req.query.email
  const subject = req.query.subject
  const msg = req.query.msg
  let transport = nodemailer.createTransport({
      host: 'email-smtp.us-east-1.amazonaws.com',
      port: 25,
          auth: {
              user: 'AKIAYQSGT2PEUP2CPL4Z',
              pass: 'BKRDCaEWFVDmf1gTsoedKn+PAFcdDuQdWhJFiA58fZeE'
          }
  });
  const message = {
      from: 'hpage@vevadev.co.nz', // Sender address
      to: 'contact@vevadev.co.nz',         // List of recipients
      subject: `${email} - ${subject}`, // Subject line
      text: msg // Plain text body
  }
  transport.sendMail(message).then((info) => {
    res.status(200).send('enail sent')
  }).catch((error) => {
    res.status(500).send('enail sent')
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
