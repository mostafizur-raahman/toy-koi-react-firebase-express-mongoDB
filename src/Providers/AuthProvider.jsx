import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
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
    const info = {
        handleGoogle,
        user,
        createUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;