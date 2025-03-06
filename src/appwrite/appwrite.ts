import { Client, Account, Avatars } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const avatar = new Avatars(client);

export const getUser = async () => {
  try {
    return await account.get();
  } catch (error) {
    console.error(error);
  }
};

// export async function getCurrentSession() {
//   try {
//     const session = await account.getSession("current");
//     console.log("Current session:", session);
//   } catch (error) {
//     console.error("Error getting session:", error);
//   }
// }
