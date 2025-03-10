import { Client, Account, OAuthProvider } from "appwrite";

export const config = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
};

const client = new Client()
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!);

export const account = new Account(client);

export { OAuthProvider, client };
