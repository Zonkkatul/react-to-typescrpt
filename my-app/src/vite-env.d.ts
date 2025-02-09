interface ImportMetaEnv {
    readonly VITE_LOTR_API_TOKEN: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  
  declare module '*.png' {
    const value: string;
    export default value;
  }