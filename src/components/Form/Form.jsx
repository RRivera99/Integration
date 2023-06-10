import { useState } from "react";
import validation from "./Validation";

export default function Form (){
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })
    const [errors, setErrors]= useState({
        email:'',
        password:'',
    })
    function handleChange (event){
        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData,[property]: value })
        validation({...userData,[property]: value }, errors, setErrors)
    };
    return (
        <form>
            <div>
            <label htmlFor=''> Email:</label>
            <input type='text' name = 'email' value={userData.email} onChange={handleChange}></input>
            </div>
            <div>
            <label htmlFor=''>Password:</label>
            <input type='password' name = 'password' value={userData.password} onChange={handleChange}></input><button>Ver</button>

            </div>
            <p>{errors.email}</p>
            <div>
                <button type='submit'>Submit</button>
            </div>
            
        </form>
    )
}