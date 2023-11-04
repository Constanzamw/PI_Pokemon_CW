const { User } = require("../../db")


const createUser = async (email, password) => {
      const [user, created] = await User.findOrCreate({ where: { email:email, password:password } });
      
      if (!created) {
        throw new Error("User already exists!");
      }
    
      return user

    };
    


    
module.exports = createUser;