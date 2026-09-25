import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const result = () => {
  const [Image, setImage] = useState(assets.sample_img_1)
  const [IsImageLoaded, setIsImageLoaded] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [Input, setInput] = useState('')
  const { generateImage } = useContext(AppContext)

  const onSubmithandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (Input) {
      const image = await generateImage(Input)
      if (image) {
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }

  return (
    <motion.form

      initial={{ opacity: .2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      onSubmit={onSubmithandler} className='flex flex-col justify-center items-center min-h-[90vh]'>
      <div>
        <div className='relative'>
          <img src={Image} alt="" className='max-w-sm rounded' />
          <span className={`bg-blue-500 h-1 absolute bottom-0 left-0 ${Loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
        </div>
        <p className={!Loading ? 'hidden' : ''}>Loading.....</p>
      </div>

      {!IsImageLoaded &&

        <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
          <input onChange={e => setInput(e.target.value)} value={Input}
            type="text" placeholder='Describe what do you want to generate' className='bg-transparent flex-1 ml-8 outline-none max-sm:w-20 placeholder-color' />
          <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>Generate</button>
        </div>

      }

      {IsImageLoaded &&
        <div className='flex flex-wrap gap-2 justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <p
            onClick={() => {
              setIsImageLoaded(false)
            }}
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
          <a href={Image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
        </div>
      }

    </motion.form>
  )
}

export default result

