import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


const Generatebtn = () => {

    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () => {

        if (user) {
            navigate('/result')
        }

        else {
            setShowLogin(true)
        }

    }

    return (
        <motion.div

            initial={{ opacity: .2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className='flex flex-col justify-center items-center my-24 p-6 sm:px-28'>

            <h1 className='text-3xl sm:text-4xl font-semibold mb-5'>See the magic. Try now</h1>
            <button onClick={onClickHandler} className='bg-black text-white px-12 py-2.5 w-auto mt-8 gap-2 items-center rounded-full flex sm:text-lg hover:scale-115 transition-all duration-400'>Generate Images
                <img className='h-6' src={assets.star_group} alt="" />
            </button>
        </motion.div>
    )
}

export default Generatebtn