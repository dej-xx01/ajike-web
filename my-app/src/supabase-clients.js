import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://nbsdaokmnuwyeidtnlvj.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ic2Rhb2ttbnV3eWVpZHRubHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NDI0MjksImV4cCI6MjA4MTAxODQyOX0.F1kAcdziCdydPydikc_-Ii_Wu69o_X5Sz776vyXo3KY")

export default supabase