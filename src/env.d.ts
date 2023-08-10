/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly PUBLIC_DATABASE_URL: string
    readonly PUBLIC_DEL_TOKEN: string
    readonly PUBLIC_SUPABASE_URL: string
    readonly PUBLIC_SUPABASE_KEY: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  declare namespace App {

}

type credentials ={
  accessToken:string,
  refreshToken:string,
  expires:string
}

type IJob ={
  company:string,
title:string,
link:string,
email:string,
type:string,
deadline:string,
logo:string,
skills:string
}
