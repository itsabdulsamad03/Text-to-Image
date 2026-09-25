import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {

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
            viewport={{ once: true }}

            className='flex flex-col justify-center items-center text-center my-20'>
            <motion.div
                initial={{ opacity: .2, y: 100 }}
                transition={{ delay: .2, duration: .8 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}

                className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
                <p>Best text to image generator</p>
                <img src={assets.rating_star} alt="" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0 }}
                transition={{ delay: .4, duration: 2 }}
                animate={{ opacity: 1 }}
                viewport={{ once: true }}

                className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-500'>image </span> within seconds.</motion.h1>
            <p className='text-center max-w-xl mx-auto mt-5'>Imagify transforms your thoughts into images using AI.
                Type a few words, hit generate, and watch your vision appear — fast, fun, and creative.</p>

            <motion.button

                initial={{ opacity: 0 }}
                whileTap={{ scale: .95 }}
                transition={{ default: { duration: .5 }, opacity: { delay: .8, duration: 1 } }}
                animate={{ opacity: 1 }}


                onClick={onClickHandler} className='bg-black text-white px-12 py-2.5 w-auto mt-8 gap-2 items-center rounded-full flex sm:text-lg hover:scale-115 duration-400 transition-all'>Generate Images
                <img className='h-6' src={assets.star_group} alt="" />
            </motion.button>

            <motion.div


                initial={{ opacity: 0 }}
                transition={{ delay: .4, duration: 2 }}
                animate={{ opacity: 1 }}
                viewport={{ once: true }}

                className='flex flex-wrap justify-center mt-16 gap-3'>
                {Array(6).fill('').map((item, index) => (
                    <img src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt="" key={index} width={70} />
                ))}
            </motion.div>
            <p className='mt-2 text-neutral-600'>Generated images from imagify</p>
        </motion.div>
    )
}

export default Header