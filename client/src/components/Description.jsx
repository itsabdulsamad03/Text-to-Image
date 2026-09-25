import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'


const Description = () => {
    return (
        <motion.div

            initial={{ opacity: .2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className='flex flex-col justify-center items-center my-24 p-6 sm:px-28'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
            <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

            <div className='flex flex-col gap-5 md:flex-row md:gap-14 items-center'>
                <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
                <div>
                    <h2 className='text-3xl font-medium mb-4 max-w-lg'>Introducing the AI-Powered text to image generator</h2>
                    <p className='text-gray-600 mb-4'>This project is a Text-to-Image Generator that converts user input
                        into AI-generated images. Built with modern web technologies and
                        integrated with a deep learning model, it allows users to visualize
                        text prompts as unique images, making it a powerful tool for creativity,
                        design inspiration, and content generation.</p>

                    <p className='text-gray-600'>You simply enter a text prompt describing the image you want.
                        The system sends it to an AI model that understands the text
                        and creates a matching image. Within seconds, the generated
                        image appears on your screen—turning your imagination
                        into visuals effortlessly.</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description