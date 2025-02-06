import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres', // Change to 'mysql' or 'sqlite' if needed
    host: 'localhost',
    port: 5432, // Change to 3306 for MySQL
    username: 'postgres',
    password: 'postgres',
    database: 'mydb',
    entities: ['dist/**/*.entity{.ts,.js}'], // Load all entity files
    migrations: ['dist/migrations/*{.ts,.js}'], // Migration files
    synchronize: false, // Set to false in production
    logging: false,
    extra: {
        options: "-c timezone=UTC",
    },
});

export default AppDataSource;
