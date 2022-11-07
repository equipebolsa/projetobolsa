const nodemailer = require("nodemailer");
const path = require('path');


function enviarEmail(req, res) {

    const user = ""
    const pass = ""

    const transporter = nodemailer.createTransport({ host: "smtp.office365.com", port: 587, auth: { user, pass } })
    const dirPath = path.join(__dirname, '../../public/dashboard/img/wordcloud/');
    const imgDir = dirPath+"wordlcloud-Nov-07-2022.png";
    transporter.sendMail({
        from: user,
        to: user,
        // responde para
        replyTo: user,
        subject: "Olá",
        attachments: [{
            filename: 'WordCloud.png',
            path:imgDir
        }],
        text: "oLÁ"
    }).then(function(resposta){
        console.log("200 FOIi")
        res.status(200).json(resposta);
        
    }
    ).catch(function(erro){
        console.log("500 ERRO")
        res.status(500).json(erro);
        
    })
}

module.exports = {
    enviarEmail
}