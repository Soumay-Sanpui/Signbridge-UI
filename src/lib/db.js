import { Pool } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (!databaseUrl) {
    console.error('Missing database URL. Set DATABASE_URL or POSTGRES_URL environment variable.');
    throw new Error('DATABASE_URL environment variable is missing');
}

const pool = new Pool({
    connectionString: databaseUrl,
    ssl: {
        rejectUnauthorized: false,
    },
});

pool.on('error', (err) => {
    console.error('Unexpected error on Pool:', err);
});

export default pool;
