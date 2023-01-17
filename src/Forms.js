import React from 'react'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const Forms = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Your fullname is required"),
        email: yup.string().email().required("Your email is required"),
        age:yup.number().positive().integer().min(18).required("Your age has to be min 18 years"),
        password: yup.string().min(8).max(20).required("Your password"),
        confirm: yup.string().oneOf([yup.ref("password"),null], "Passwords don't match").required(),
    }) //object of all data from from in an object format
    const onSubmit =(data)=>{
        console.log(data)
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    })
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name" {...register("fullName")}/>
            <p style={{color:"red"}}>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email" {...register("email")}/>
            <p style={{color:"red"}}>{errors.email?.message}</p>
            <input type="number" placeholder="Age" {...register("age")}/>
            <p style={{color:"red"}}>{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p style={{color:"red"}}>{errors.password?.message}</p>
            <input type="password" placeholder="Comfirm Password..." {...register("confirm")}/>
            <p style={{color:"red"}}>{errors.confirm?.message}</p>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Forms