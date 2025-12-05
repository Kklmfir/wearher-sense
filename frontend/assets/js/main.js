import express from "express";
import weatherRoute from "./routes/weather.js";
import trafficRoute from "./routes/traffic.js";
import routesRoute from "./routes/routes.js";
import subscribeRoute from "./routes/subscribe.js";

const app = express();
app.use(express.json());

app.use("/api/weather", weatherRoute);
app.use("/api/traffic", trafficRoute);
app.use("/api/routes", routesRoute);
app.use("/api/subscribe", subscribeRoute);

app.listen(4000, () => console.log("Backend berjalan di port 4000"));
