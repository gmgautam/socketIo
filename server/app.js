import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const app = express();
const server = createServer(app); // Create HTTP server with Express

// ✅ Configure Socket.IO with CORS
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Frontend URL (change as needed)
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const port = 3001;

// ✅ Optional: Use CORS middleware for Express routes
app.use(cors());

// ✅ Express route for testing
app.get("/", (req, res) => {
  res.send("hello yruwqewiqtuiwqtiurtg");
});

// ✅ Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("🟢 User connected");
  console.log(`🔗 Socket ID: ${socket.id}`);

  // You can add events here
  // socket.on("some-event", (data) => { ... });
socket.emit("gautam","Welcome to Your kindom  ")
  socket.on("disconnect", () => {
    console.log("🔴 User disconnected");
  });
});

// ✅ Start server
server.listen(port, () => {
  console.log(`🚀 Server running: http://localhost:${port}`);
});
