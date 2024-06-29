
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lwpkgzazxjtzqicawdvx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3cGtnemF6eGp0enFpY2F3ZHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MzYxODEsImV4cCI6MjAzNTAxMjE4MX0._ta8998tAgrwKn-xawECk6Mu7BBjiT-YJpvoTDiwyRE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;