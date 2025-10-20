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
								reject(error.message);
							});
					})
					.catch((error) => {
						reject(error.message);
					})
					.finally(() => {
						setLoading(false);
					});
			});
		},
		[]
	);

	const login = useCallback((email: string, password: string) => {
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
					if (error.code === "auth/invalid-credential") {
						reject("We do not recognize that email and password");
					}
					reject(error.message);
				})
				.finally(() => {
					setLoading(false);
				});
		});
	}, []);

	const logout = useCallback(async () => {
		setLoading(true);
		return new Promise<void>((resolve, reject) => {
			signOut(auth)
				.then(() => {
					// Sign-out successful.
					setLoggedIn(false);
					resolve();
					// Use setTimeout to avoid setState during render
					setTimeout(() => {
						router.push("/login");
					}, 0);
				})
				.catch((error) => {
					reject(error.message);
				})
				.finally(() => {
					setLoading(false);
				});
		});
	}, [router]);

	const resetPassword = useCallback((email: string) => {
		setLoading(true);
		return new Promise<void>((resolve, reject) => {
			sendPasswordResetEmail(auth, email)
				.then(() => {
					resolve();
				})
				.catch((error) => {
					reject(error.message);
				})
				.finally(() => {
					setLoading(false);
				});
		});
	}, []);

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
