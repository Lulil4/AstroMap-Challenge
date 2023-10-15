import 'dotenv/config'
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { goalRouter } from "./api/components/goal-map/goal-map.router";
import { PORT } from "./api/config";

process.on('uncaughtException', function (err) {
    console.error(err.stack);
    process.exit(1);
})

if (!PORT) {
    process.exit(1);
}

const app = express()
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/goal", goalRouter);

app.listen(PORT, () => {
    console.log('Application is up on port ${PORT}')
});