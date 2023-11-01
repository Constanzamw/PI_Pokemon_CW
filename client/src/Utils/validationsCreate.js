/* eslint-disable no-unused-vars */
const validationCreate = (formData) => {
let errores = {};
    const regex= new RegExp(/^[^\d\s]+$/u);
    const regex2= new RegExp(/^\d+$/);

    
    // if (!formData.id) {
    //     errores.name= "Your pokemon must have an id higher than 1292";
    // }
    
    if (!formData.name) {
        errores.name= "Your pokémon must have a name";
    }
    
    if (!regex.test(formData.name)) {
        errores.name = "The name must not have any numbers";
    }

    if (formData.name.length > 15) {
        errores.name = "The name must have less than 15 characters";
    }

    if (!formData.hitPoints) {
        errores.hitPoints = "All stats must be completed";
    }

    if (!regex2.test(formData.hitPoints)) {
        errores.hitPoints = "HitPoints must be a number";
    }

    if (formData.hitPoints < 0 || formData.hitPoints > 100) {
        errores.hitPoints = "HitPoints must be between 0 and 100";
    }

    if (!formData.attack) {
        errores.attack = "All stats must be completed";
    }

    if (!regex2.test(formData.attack)) {
        errores.attack = "Attack must be a number";
    }

    if (formData.attack < 0 || formData.attack > 100) {
        errores.attack = "Attack must be between 0 and 100";
    }

    if (!formData.defense) {
        errores.defense = "All stats must be completed";
    }

    if (!regex2.test(formData.defense)) {
        errores.defense = "Defense must be a number";
    }

    if (formData.defense < 0 || formData.defense > 100) {
        errores.defense = "Defense must be between 0 and 100";
    }

    if (!formData.speed) {
        errores.speed = "All stats must be completed";
    }

    if (!regex2.test(formData.speed)) {
        errores.speed = "Speed must be a number";
    }
    
    if (formData.speed < 0 || formData.speed > 100) {
        errores.speed = "Speed must be between 0 and 100";
    }

    if (!formData.height) {
        errores.height = "Height must be completed";
    }

    if (!regex2.test(formData.height)) {
        errores.height = "Height must be a number";
    }
    
    if (formData.height < 0 || formData.height > 100) {
        errores.height = "Height must be between 0 and 100";
    }

    if (!formData.weight) {
        errores.weight = "Weight must be completed";
    }

    if (!regex2.test(formData.weight)) {
        errores.weight = "Weight must be a number";
    }
    
    if (formData.weight < 0 || formData.weight > 100) {
        errores.weight = "Weight must be between 0 and 100";
    }

    // if (!formData.image) {
    //     errores.image = "Your pokémon must have an image";
    // }
    
    
    return errores;
    };

export default validationCreate;