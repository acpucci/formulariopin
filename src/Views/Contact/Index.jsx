import {useState} from 'react';
import axios from 'axios'
import Formulario from "./Components/Formulario";

function Contact(){
    const [userData, setUserData] = useState({name: "", email:"", phone:"", message:""})
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)


    const handleChange = (event)=>{
        setSuccess(false)
        setError(false)
        const property = event.target.id
        const newValue = event.target.value
        setUserData({...userData, [property]: newValue})
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', userData)
        .then(
            response=>{
                setUserData({name: "", email:"", phone:"",message:""})
                setSuccess(true)
            }
        )
        .catch(
            error=>{
                setError(true)
            }
        )
    }

    return(
        <>
            <Formulario userData={userData} handleChange={handleChange} handleSubmit={handleSubmit}/>
            {success && <div class="alert alert-success" role="alert">
                Tu solicitud fue enviada con exito!
            </div>}
            {error && <div class="alert alert-danger" role="alert">
                Tuvimos un problema para procesar tu solicitud!
            </div>}
        </>
    )
};

export default Contact;