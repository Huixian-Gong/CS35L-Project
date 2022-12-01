const sendgrid = require('@sendgrid/mail');
const SENDGRID_API_KEY = "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";
sendgrid.setApiKey(SENDGRID_API_KEY)

const sendingMail=(receiver,text)=>{
        const msg = {
          to: '2244141075@qq.com',
          from: 'Nraelniurb@gmail.com',
          subject: 'Nraelniurb -- You have a new message from classmate',
          text: 'text',
        }
        sendgrid
          .send(msg)
          .then((resp) => {
            console.log('Email sent\n', resp)
          })
          .catch((error) => {
            console.error(error)
        })
    }

export default sendingMail;