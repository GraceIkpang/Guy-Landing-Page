const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>The Future of Guy</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; background: #f4f4f4; color: #333; }
          h1 { color: #2c3e50; }
          h2 { color: #16a085; }
        </style>
      </head>
      <body>
        <h2>Grace Ikpang</h1>
	<h3>Role - Lead Cloud Engineer</h1>
        <h1>The Future of Guy</h1>
	<p>Imagine moving to a new city and you need to install your TV, find a nice place to eat, or get your hair done.</p>
        <p><strong>Pitch:</strong> "Guy" is a smart app that helps people find artisans, businesses, restaurants, and service providers across Nigeria. Whether you're in Lagos or Enugu, Guy connects you with whatever you are searching for.</p>
        <h3>Bio</h3>
	<p>I am a cloud engineer with a background in Biochemistry. I finished from University of Uyo with First Class Honors. I transitioned into the tech space to solve real world problems using modern infrastructure and technologies such as AWS, Nginx, Node.js, Ansible, Kubernetes, Docker and Linux. My goal is to bridge the gap between peopl and services through reliable engineering platforms.</p>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

