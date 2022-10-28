import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";

export const AuthContext = createContext();
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Sign in with google
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // Sign in with github
    const githubLogin = (githubProvider) => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // Sign up new users
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in existing users
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // fetch user data from firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("inside auth state change", currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        signUp,
        loading,
        signIn,
        user,
        logOut,
        providerLogin,

        githubLogin,
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
