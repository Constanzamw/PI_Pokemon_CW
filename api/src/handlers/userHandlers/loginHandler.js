const login = require ("../../controllers/userControllers/login")

const loginHandler = async (req, res) =>{
    try {
        const { email, password }= req.body;
        const userId = await login(email, password);
        return res.status(200).json(userId)
    } catch (error) {
      console.log(error.message)
        return res.status(404).json({ errorMessage: error.message })
    }
};

module.exports = loginHandler