import React from 'react'

const index = () => {
    return (
        <div>index</div>
    )
}
export default index


// import cookies from "js-cookie";
// import { createContext } from "react";

// export const AuthContext = createContext({})

// const ContextApi = () => {
//     let value = { name: "faysal" }
//     if (cookies.get('testcookie')) {
//         value = JSON.parse(cookies.get('testcookie'))
//     } else {
//         // cookies.set('testcookie', JSON.stringify({ name: 'A', id: Math.random() }), { expires: 12121 });
//     }

//     return <AuthContext.Provider value={value}>

//     </AuthContext.Provider>
// }

// export default ContextApi