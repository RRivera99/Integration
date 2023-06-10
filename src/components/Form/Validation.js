const validation = (userData,errors,setErrors)=>{

    if(!userData.email) {
    setErrors({...errors, email:'Por favor completa este campo'});}

    else if (userData.email.lenth > 35){
    setErrors({...errors, email: 'No puede superar los 35 caracteres'});}

    else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)
        ) {
            setErrors({...errors, email:'Email invalido'});
        
    }else {
        setErrors({...errors, email:''});
    }
}

export default validation;