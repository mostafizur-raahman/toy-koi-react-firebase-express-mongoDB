import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    // create user 

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
        return signOut(auth)
    }
    // signIn with google
    const handleGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const loggedUser = res.user;
                setUser(loggedUser);
            })
            .catch(e => {
                setError(e.message);
                console.log(e.message);
            })
    }
    const updateUserData = (user, name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // onstate change of user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            console.log(loggedUser)
            setUser(loggedUser)

        })
        return () => unsubscribe();
    })
    const info = {
        handleGoogle,
        user,
        createUser,
        logOut,
        error,
        updateUserData,
        loginUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;