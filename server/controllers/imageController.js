import usermodel from "../models/userModel.js"
import FormData from 'form-data'
import axios from 'axios'


export const generateImage = async (req, res) => {
    try {

        const { userID, prompt } = req.body

        const user = await usermodel.findById(userID)

        if (!user || !prompt) {
            return res.json({ success: false, message: 'Missing details' })
        }

        if (user.creditBalance === 0 || usermodel.creditBalance < 0) {
            return res.json({ success: false, message: 'No credit balance', creditBalance: user.creditBalance })
        }

        const formData = new FormData()
        formData.append('prompt', prompt)

        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64')

        const resultImage = `data:image/png;base64,${base64Image}`

        await usermodel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })

        res.json({ success: true, message: 'Image Generated', creditBalance: user.creditBalance - 1, resultImage })

    } catch (error) {
        console.log("STATUS:", error.response?.status)
        console.log("DATA:", error.response?.data?.toString())
        console.log("MESSAGE:", error.message)
        res.json({ success: false, message: error.message })
    }
}