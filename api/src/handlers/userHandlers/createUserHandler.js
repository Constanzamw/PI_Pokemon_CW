const createUser = require ("../../controllers/userControllers/createUser")

const createUserHandler = async (req, res) => {
    try {
        const {email, password} = req.body;
        const newUser = await createUser(email, password);
        return res.status(200).json(newUser);
    } catch (error) {
       
        return res.status(404).json({ errorMessage: error.message })
       
    }
};


module.exports = createUserHandler;