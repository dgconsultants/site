var express = require('express');
require('dotenv').config()
const { API_KEY, DOMAIN } = process.env;
const mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN })
var router = express.Router();

/* GET home page. */
router.post('/register', function(req, res, next) {
  const data = {
    from: 'User <you@me.com>',
    to: 'dgconsultant@protonmail.com',
    subject: 'Hello',
    text: `Details: \n${Object.entries(req.query).map(([k,v]) => `${k}: ${v}`).join("\n")} \n${Object.entries(req.body).map(([k,v]) => `${k}: ${v}`).join("\n")}`
  };

  mailgun.messages().send(data, (error, body) => {
    if(error) return res.send({ error: 'an error occured' })
    res.send({ success: 'successful!' })
  });
});

module.exports = router;
