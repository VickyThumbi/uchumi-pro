import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../../firebase/firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    function signUp(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            
        })
        return unsubscribe
    }, [])
    

    const value = { signUp, login, logout, currentUser}

  return (
    <AuthContext.Provider value = {value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

