const validationLogin = (userData) => {
    const errors = {};
    
    if(!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = "Enter a valid email"
    }
    if(userData.email === '') {
        errors.email = 'Email cannot be empty'
    }

    if(userData.email.length > 35) {
        errors.email = 'Email must be less than 35 characters'
    }

    if(!/\d/.test(userData.password)) {
        errors.password = 'Password must have at least one number'
    }
    if(userData.password.length < 6) {
        errors.password = 'Password must be at least six characters long'
    }
    if(userData.password.length > 10) {
        errors.password = 'Password cannot be longer than 10 characters'
    }
   
    return errors
}

export default validationLogin;