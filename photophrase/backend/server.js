import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define the test route
  server.get("/test", (req, res) => {
    console.log("Test route is workinggggggggggggggggggggggggggggg!"); // This logs to the server console
    res.send("Test route is working!"); // This sends a response to the client
  });

  // Handle all other requests
  server.all("*", (req, res) => {
    return handle(req, res); // Pass control to Next.js
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
