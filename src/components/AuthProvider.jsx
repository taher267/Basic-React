import Cookies from 'js-cookie';
import React from 'react';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const logout = _ => Cookies.remove('testcookie');
    const login = _ => Cookies.set('testcookie', JSON.stringify({ id: Math.random().toString() }));
    const isAuth = Cookies.get('testcookie') && JSON.parse(Cookies.get('testcookie'))?.id;

    const func = () => React;

    const value = { logout, login, isAuth, func }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider