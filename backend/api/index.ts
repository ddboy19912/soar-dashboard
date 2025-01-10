import cors from "cors";
import jsonServer from "json-server";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import type { ErrorRequestHandler } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);

// Root route handler
server.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Soar Dashboard API</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            padding: 2rem;
            max-width: 800px;
            margin: 0 auto;
            color: #333;
          }
          h1 { color: #2563eb; }
          code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-size: 0.9em;
          }
          .endpoint {
            margin: 1rem 0;
            padding: 1rem;
            background: #f8fafc;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Soar Dashboard API</h1>
        <p>Welcome to the Soar Dashboard API. Available endpoints:</p>
        
        <div class="endpoint">
          <code>GET /users</code> - Get all users
        </div>
        
        <div class="endpoint">
          <code>GET /cards</code> - Get all cards
        </div>
        
        <div class="endpoint">
          <code>GET /transactions</code> - Get all transactions
        </div>
        
        <div class="endpoint">
          <code>GET /expenseCategories</code> - Get all expense categories
        </div>
        
        <div class="endpoint">
          <code>GET /dailyExpenses</code> - Get all daily expenses
        </div>
        
        <div class="endpoint">
          <code>GET /contacts</code> - Get all contacts
        </div>
        
        <div class="endpoint">
          <code>GET /monthlyBalances</code> - Get all monthly balances
        </div>

        <p>For more information, visit the <a href="https://github.com/ddboy19912/soar-dashboard">documentation</a>.</p>
      </body>
    </html>
  `);
});

server.use(router);

// Updated error handler to ignore EROFS errors
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.code === 'EROFS') {
    return next();
  }
  
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
};

// Ignore bad type declarations 🥲
server.use((err: any, req: any, res: any, next: any) => errorHandler(err, req, res, next));

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3001;
  server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
  });
}

export default server;
