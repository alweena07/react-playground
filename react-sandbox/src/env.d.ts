interface ImportMetaEnv {
  readonly VITE_SSO_AZURE_CLIENT_ID?: string;
  readonly VITE_SSO_AZURE_TENANT_ID?: string;
  // add other VITE_ env vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
