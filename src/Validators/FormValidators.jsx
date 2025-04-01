const FormValidators = (e) => {
    const {name, value} = e.target
    switch(name){
        case name: 
            if(value && value.length===0)
                return name + "Field is Mendatory"
            else if(value.length < 3 || value.length > 30)
                return name + " Length must be 3 to 30 character"
            else
                return null
        default:
            return null
    }
}

export default FormValidators;
