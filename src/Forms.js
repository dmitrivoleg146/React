import React from 'react'
import {useForm} from "react-hook-form";
import * as yup from "yup"

const Forms = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age:yup.number().positive().integer().required(),
        password: yup.string().min(14).max(20).required(),
        confirm: yup.string().oneOf([yup.red("password"),null]).required(),
    }) //object of all data from from in an object format
    const onSubmit =(data)=>{
        console.log(data)
    }

    const {register, handleSubmit} = useForm({
        resolver:
    });
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name" {...register("fullName")}/>
            <input type="text" placeholder="Email" {...register("email")}/>
            <input type="number" placeholder="Age" {...register("age")}/>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <input type="password" placeholder="Comfirm Password..." {...register("confirmPassword")}/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Forms