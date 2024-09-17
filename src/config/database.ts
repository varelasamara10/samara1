import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://ads_dic6_user:APk27jS6eUgjqpLTrRENNhU5ci22bJFM@dpg-cr769mg8fa8c739pacl0-a.oregon-postgres.render.com/ads_dic6";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
