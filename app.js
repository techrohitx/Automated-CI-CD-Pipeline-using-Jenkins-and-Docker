const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Jenkins CI/CD Demo</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, Helvetica, sans-serif;
          background: linear-gradient(135deg, #1d2671, #c33764);
        }

        .card {
          background: #ffffff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          text-align: center;
          width: 420px;
        }

        h1 {
          margin-bottom: 10px;
          color: #333;
        }

        p {
          color: #555;
          font-size: 18px;
        }

        .version {
          margin-top: 15px;
          display: inline-block;
          padding: 8px 18px;
          background: #28a745;
          color: #fff;
          border-radius: 20px;
          font-size: 14px;
        }

        .footer {
          margin-top: 20px;
          font-size: 13px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 Jenkins CI/CD one</h1>
        <p>Hello from Jenkins!</p>
        <p>This is the <strong>third version</strong> of the Node.js application.</p>
        <div class="version">Deployment Successful done new ver ✅</div>
        <div class="footer">
          GitHub Webhook → Jenkins → Node.js
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
