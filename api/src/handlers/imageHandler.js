const getImage = require ("../controllers/imagePoke")

const ImageHandler = async (req,res)=>{
    try {
        const image = await getImage();
        return res.status(200).json(image);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}


module.exports= ImageHandler;
