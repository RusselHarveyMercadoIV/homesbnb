import { createContext, useContext, useEffect, useState } from "react";
import { account, ID } from "../appwrite/appwrite";

type User = {
  id: string;
  email: string;
  name: string;
};

type UserContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await account.get();
        setUser(response);
      } catch (error) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error) {
      throw new Error("Login failed");
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const userId = ID.unique();
      await account.create(userId, email, password, name);
      await login(email, password);
    } catch (error) {
      throw new Error("Registration failed");
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      throw new Error("Logout failed");
    }
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
