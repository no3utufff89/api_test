import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { sequelize } from './db.js';
import * as models from './models/models.js';
import userRouter from './routes/userRouter.js';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRouter);
export const startApp = async () => {
    try {
        await sequelize.authenticate();

        await sequelize.sync();
        app.listen(PORT, () =>
            console.log(`Server started on port: ${PORT}, address is: http://localhost:${PORT}`)
        );
    } catch (e) {
        console.log(`e`, e);
    }
};
