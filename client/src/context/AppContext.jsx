import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [user, setuser] = useState(null)
    const [ShowLogin, setShowLogin] = useState(false)
    const [token, settoken] = useState(localStorage.getItem('token'))
    const [credit, setcredit] = useState(false)
    const navigate = useNavigate()

    const backendurl = import.meta.env.VITE_BACKEND_URL

    const LoadCreditsData = async () => {
        try {

            const { data } = await axios.post(backendurl + '/api/user/credits', {}, { headers: { token } })
            console.log("Backend response:", data)

            if (data.success) {
                setcredit(data.credits)
                setuser(data.user)
            }

        } catch (error) {
            console.log(error)
            toast(error.message)
        }
    }

    const generateImage = async (prompt) => {
        try {
            const {data} = await axios.post(backendurl + '/api/image/generate-image', { prompt }, { headers: { token } })

            if(data.success){
                LoadCreditsData();
                return data.resultImage
            }

            else{
                toast.error(data.message)
                LoadCreditsData();

                if(data.creditBalance === 0){
                    navigate('/buy')
                }
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        settoken('')
        setuser(null)
    }

    useEffect(() => {

        if (token) {
            LoadCreditsData();
        }

    }, [token])


    const value = {
        user,
        setuser,
        ShowLogin,
        setShowLogin,
        backendurl,
        token,
        settoken,
        credit,
        setcredit,
        LoadCreditsData,
        logout,
        generateImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider