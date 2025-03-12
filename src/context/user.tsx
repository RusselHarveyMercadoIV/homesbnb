import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite/appwrite";
import { Models, OAuthProvider } from "appwrite";

// Define User type using Appwrite's model
type User = Models.User<Models.Preferences>;

// Define context type
type UserContextType = {
  user: User | null;
  loginWithGoogle: () => void;
  // register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
};

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to access context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};

// Provider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await account.get();
        setUser(response);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const loginWithGoogle = () => {
    try {
      account.createOAuth2Session(
        OAuthProvider.Google, // provider
        "https://homesbnb.vercel.app//success", // redirect here on success
        "https://homesbnb.vercel.app//login" // redirect here on failure
      );
    } catch (error) {
      console.error("login error > " + error);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  const value: UserContextType = { user, loginWithGoogle, logout };

  return (
    <UserContext.Provider value={value}>
      {loading ? <div>Loading...</div> : children}
    </UserContext.Provider>
  );
};
