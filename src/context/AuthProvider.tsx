"use client";

import { auth } from "@/utils/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type AuthContextType = {
  user: User | undefined;
  createAccount: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loggedIn: boolean;
  resetPassword: (email: string) => Promise<void>;
  loading?: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  createAccount: async () => {},
  login: async () => {},
  logout: async () => {},
  loggedIn: false,
  resetPassword: async () => {},
  loading: false,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const createAccount = useCallback(
    (email: string, password: string, displayName: string) => {
      console.log("creating account");
      setLoading(true);
      return new Promise<void>((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName,
            })
              .then(() => {
                setUser(user);
                setLoggedIn(true);
                resolve();
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject();
                throw new Error(`Error: ${errorCode} - ${errorMessage}`);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            reject();
            throw new Error(`Error: ${errorCode} - ${errorMessage}`);
          })
          .finally(() => {
            setLoading(false);
          });
      });
    },
    []
  );

  const login = useCallback((email: string, password: string) => {
    console.log("logging in");
    setLoading(true);
    return new Promise<void>((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUser(user);
          setLoggedIn(true);
          resolve();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          reject();
          throw new Error(`Error: ${errorCode} - ${errorMessage}`);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  const logout = useCallback(async () => {
    console.log("logging out");
    setLoading(true);
    return new Promise<void>((resolve, reject) => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          setLoggedIn(false);
          resolve();
          router.push("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          reject();
          throw new Error(`Error: ${errorCode} - ${errorMessage}`);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, [router]);

  const resetPassword = useCallback(
    (email: string) => {
      console.log("resetting password");
      setLoading(true);
      return new Promise<void>((resolve, reject) => {
        sendPasswordResetEmail(auth, email)
          .then(() => {
            alert("Password reset email sent!");
            router.push("/login");
            resolve();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            reject();
            throw new Error(`Error: ${errorCode} - ${errorMessage}`);
          })
          .finally(() => {
            setLoading(false);
          });
      });
    },
    [router]
  );

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoggedIn(true);
      } else {
        setUser(undefined);
        setLoggedIn(false);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [router]);

  const value = useMemo(() => {
    return {
      user,
      createAccount,
      login,
      logout,
      loggedIn,
      resetPassword,
      loading,
    };
  }, [user, createAccount, login, logout, loggedIn, resetPassword, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
