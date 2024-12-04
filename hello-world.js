console.log("HELLO WORLD");

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
//Creates an HTTP server:
const fs = require('fs');
const fileName = 'hello.txt';

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created successfully!');
});//Writes a file (welcome.txt):


fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
  }
  // Log the content of the file
  console.log(`Content of ${fileName}:\n${data}`);
});

const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 14, // Length of the password
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true
});//Password Generation

console.log('Generated Password:', password);


const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jouinibader.jb@gmail.com', // Your email address
    pass: 'lnzk kruq zruy sshi', //Password you generated
  },
});//Sending an Email


const mailOptions = {
  from: 'jouinibader.jb@gmail.com', 
  to: 'oussemaarmani@gmail.com', 
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js using nodemailer.'
};//Security Notes

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Email sent:', info.response);
  }
});
