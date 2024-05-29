import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import { pathFromSrc } from '../helpers/general';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URL,
  entities: [pathFromSrc('/**/*.entity.{js,ts}')],
  migrations: [pathFromSrc('config/migrations/**/*.{js,ts}')],
  synchronize: false,
  logging: true,
  migrationsRun: true,
  ssl: true,
  extra: {
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 10000,
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

dataSource
  .initialize()
  .then(() => {
    console.log('Database connection established successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
