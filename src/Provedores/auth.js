import { createContext, useState } from "react";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    
    const  login =  (email, password) => {
        const history = unstable_HistoryRouter
       /*  const navigate = useNavigate()  */
        console.log('login', { email, password })

        if(password==='123'){
            setUser({
                id: '123',
                email
            });
            history.push('/habitos')
           /*  navigate('/habitos')   */
         
        }
       
    }
   
    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login }}>
            {children}
        </AuthContext.Provider>
    )
}