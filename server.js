require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const cors = require('cors')
const express = require("express");
const app = express();
global.__basedir = __dirname

app.use(cors({
  origin: "*",
}));

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with userRouter.js
app.use("/api", require("./routes/userRouter"));

// Redirect requests to endpoint starting with ticketRouter.js
app.use("/api", require("./routes/ticketRouter"));

// Redirect requests to endpoint starting with adminRouter.js
app.use("/api", require("./routes/adminRouter"));

// Redirect requests to endpoint starting with grupoouter.js
app.use("/api", require("./routes/grupoRouter"));

// Redirect requests to endpoint starting with archivoRouter.js
app.use("/api", require("./routes/archivoRouter"));

// Redirect requests to endpoint starting with respuestaRouter.js
app.use("/api", require("./routes/respuestaRouter"));

// Redirect requests to endpoint starting with averiaRouter.js
app.use("/api", require("./routes/averiaRouter"));

// Redirect requests to endpoint starting with grupo_usuarioRouter.js
app.use("/api", require("./routes/grupo_usuarioRouter"));

// Redirect requests to endpoint starting with averia_grupoRouter.js
app.use("/api", require("./routes/averia_grupoRouter"));

// Redirect requests to endpoint starting with notaRouter.js
app.use("/api", require("./routes/notaRouter"));

// Redirect requests to endpoint starting with chatRouter.js
app.use("/api", require("./routes/chatRouter"));

// Redirect requests to endpoint starting with mensajeRouter.js
app.use("/api", require("./routes/mensajeRouter"));

// Redirect requests to endpoint starting with configuracionRouter.js
app.use("/api", require("./routes/configuracionRouter"));

// Redirect requests to endpoint starting with informeRouter.js
app.use("/api", require("./routes/informeRouter"));

// Redirect requests to endpoint starting with informeRouter.js
app.use("/api", require("./routes/mailListenerRouter"));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

// Listen on PC port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running http://localhost:${PORT}`));
