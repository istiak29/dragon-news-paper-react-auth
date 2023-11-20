import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// AuthProvider function
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    
    // Fixing Loading issues
    const [loading, setLoading] = useState(true);

    // create user/ register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login / sign in
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout / sign out
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    // for onAuthChange 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            console.log('user is in onAuthChange', CurrentUser);
            setLoading(false);
            setUser(CurrentUser);
        });
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logout,
        login,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}