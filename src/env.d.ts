/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly DATABASE_URL: string
    readonly DEL_TOKEN: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }