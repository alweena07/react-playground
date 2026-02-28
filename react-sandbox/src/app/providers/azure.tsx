import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { useEffect, useState } from "react";

const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_SSO_AZURE_CLIENT_ID!,
    authority: `https://login.microsoftonline.com/${import.meta.env.VITE_SSO_AZURE_TENANT_ID}`,
    redirectUri: `${window.location.origin}`,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const AzureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    let mounted = true;
    const initializeAuth = async () => {
      try {
        await msalInstance.initialize();
        await msalInstance.handleRedirectPromise();
      } catch (error) {
        console.error("MSAL initialization/redirect handling failed:", error);
      } finally {
        if (mounted) setInitialized(true);
      }
    };
    initializeAuth();
    return () => { mounted = false };
  }, []);

  if (!initialized) return null;

  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};

export const loginRequest = {
  scopes: ["User.Read"],
};

export default AzureProvider;