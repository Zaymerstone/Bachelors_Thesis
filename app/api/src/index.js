const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const { authRouter } = require("./auth/auth.routes");
const { habitRouter } = require("./habits/habit.routes");
const { statisticsRouter } = require("./statistics/statistics.routes");
const { globalHabitRouter } = require("./globalHabits/globalHabit.routes");

const app = express();
app.use(
  cors({
    // middleware for cors (type built-in)
    origin: "http://localhost:5173",
  })
);
// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/auth", authRouter);
app.use("/habits", habitRouter);
app.use("/statistics", statisticsRouter);
app.use("/global-habits", globalHabitRouter);
app.listen(3000);
