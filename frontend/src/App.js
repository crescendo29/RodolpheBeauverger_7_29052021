import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import GlobalStyle from "./styles/GlobalStyle"
import { Switch, Route } from "react-router-dom"
import background from "./images/icon.svg"
import "./styles/App.css"

  const schema = yup.object().shape({
    email: yup.string().email().required('Please Enter your Email'),
    password: yup.string().required('Please Enter your password').matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  });
  
  const App = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
          
        <input {...register("password")} />
        <p>{errors.password?.message}</p>
        
        <input type="submit" />
      </form>
    );
  }
  

export default App
