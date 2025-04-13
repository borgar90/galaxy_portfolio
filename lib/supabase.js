import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_PUBLIC_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // You’ll use this only server-side
)

export default supabase;

