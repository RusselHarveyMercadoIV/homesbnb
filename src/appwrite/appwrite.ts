import { merchantType } from "@/constants/types";
import { Client, Account, ID, OAuthProvider } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export { ID };

export async function login(merchant: merchantType) {
  try {
    if (merchant === "google") {
      await account.createOAuth2Session(
        OAuthProvider.Google, // provider
        "https://homesbnb.vercel.app/", // redirect here on success
        "https://homesbnb.vercel.app/login" // redirect here on failure
      );
    }
  } catch (err) {
    console.error(err);
  }
}
