import { createContext } from 'react';

// Credential context
export const CredentialsContext = createContext({ storedCredentials: {}, setStoredCredentials: () => {} });
export const ExtendedCredentialsContext = createContext({ extendedCredentials: {}, setExtendedCredentials: () => {} });
