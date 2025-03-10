import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const sequelize = new Sequelize(
    'postgres://neondb_owner:npg_t84oZHIsLGNl@ep-steep-dream-a276ungs-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require',
    {
        define: {
            timestamps: false,
        },
    }
);
