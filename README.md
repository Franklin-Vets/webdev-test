### Environment & Setup

1. **Clone the repository**

   ```bash
   git clone <REPO_URL>
   cd <REPO_NAME>
   ```

2. **Install dependencies**

   ```bash
   npm i
   ```

3. **Copy the provided environment variables**

   ```bash
   cp .env.example .env
   ```
   Then paste in the `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` we give you during the session.

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open the local URL printed in the terminal (usually [http://localhost:5173](http://localhost:5173)).