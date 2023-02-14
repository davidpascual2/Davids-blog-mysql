// import axios from "axios";
// import { createContext, useEffect } from "react";

// export const AuthContext = createContext()

// export const AuthContextProvider = ({children}) => {
//     const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null )

//     const login = async(inputs)=>{
//         const res = await axios.post('http://localhost:3001/api/login');
//         setCurrentUser(res.data)
//     }

//     const logout = async(inputs)=>{
//         await axios.post('http://localhost:3001/api/logout');
//         setCurrentUser(null)
//     }

//     useEffect(() =>{
//         localStorage.setItem('user', JSON.stringify(currentUser))
//     }, [currentUser]);

//     return (
//         //double curly brackets because it is a prop
//         <AuthContext.Provider value={{currentUser, login, logout}}> 
//             {children}
//         </AuthContext.Provider>
//     )
// }