import {createClient} from '@supabase/supabase-js'

const sb:{URL:string,KEY:string} = {
    URL: import.meta.env.PUBLIC_SUPABASE_URL,
    KEY: import.meta.env.PUBLIC_SUPABASE_KEY
}
export const supabase = createClient(sb.URL,sb.KEY,
    {
        auth:{
        storageKey:'zj',
        persistSession:false,
        },
        global:{
            fetch:(...args) => fetch(...args),
        }
    }
    )