const FormValidators = (e) => {
    const {name, value} = e.target
    switch(name){
        case "name": 
        case "color":
            if(value && value.length===0)
                return name + "Field is Mendatory"
            else if(value.length < 3 || value.length > 30)
                return name + " Length must be 3 to 30 character"
            else
                return null
        
        case "size":
            if(value && value.length===0)
                return name + "Field is Mendatory"
            else if(value.length > 10)
                return name + " Length must be Upto 10 character"
            else
                return null

        case "basePrice":               
            if(value && value.length===0)
                return name + "Field is Mendatory"
            else if(value<1)
                return "Base Price must be a positive value"
            else
                return null

        case "stockQuantity":
            if(value && value.length===0)
                return name + "Field is Mendatory"
            else if(value<0)
                return "stockQuantity must be 0 or positive value"
            else
                return null

        case "discount":
            if(value && value.length===0)
                return name + "Field is Mendatory"
            else if(value<0 || value>99)
                return "Discount must be 0-99%"
            else
                return null


        case "message": 
            if(value && value.length===0)
                return name + "Field is Mendatory"
            else if(value.length < 50)
                return name + " Length must be 50 character or more."
            else
                return null
        default:
            return null
    }
}

export default FormValidators;
