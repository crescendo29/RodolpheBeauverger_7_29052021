import React from 'react';
import background from "../images/icon.svg"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import AuthService from '../services/auth.service';


const schema = yup.object().shape({
  email: yup.string().email().required('Veuillez indiquer votre Email.'),
  password: yup.string().required('Veuillez indiquer votre mot de passe.').matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "doit contenir au moins 8 Caractèress, 1 Majuscule, 1 Minuscule, 1 Nombre et 1 caractère spécial"
  ),
});

const Login = (props) => {
  
 /*  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("false")
  const [message, setMessage] = useState("") */

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  })
  
  const onSubmit = data => {
    console.log(data.email)
    AuthService.login(data.email, data.password).then(
      () => {
        props.history.push("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    )
  }
  

  return (
    <div className="HomePage">
      <img src={background} alt="Logo" className="Logo" />
      <div className="HomeNav">
        <h1>Groupomania</h1>
        <a className="register" href="#">S'inscrire</a>
      </div>
      <div className="Loginform">
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="Email"/>
        <p>{errors.email?.message}</p>
          
        <input {...register("password")} placeholder="Mot de passe"/>
        <p>{errors.password?.message}</p>
        
        
        <input type="submit" value=" entrer" />
    </form>
      </div>
    </div>
  );
}

export default Login