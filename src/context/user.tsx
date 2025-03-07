import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite/appwrite";
import { Models, OAuthProvider } from "appwrite";

// Define User type using Appwrite's model
type User = Models.User<Models.Preferences>;

// Define context type
type UserContextType = {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
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

  const loginWithGoogle = async () => {
    try {
      await account.createOAuth2Session(
        OAuthProvider.Google, // provider
        "http://localhost:5173/", // redirect here on success
        "http://localhost:5173/login" // redirect here on failure
      );
    } catch (error) {
      console.error(error);
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
