import React from 'react'
import { useForm } from "react-hook-form"


function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const onSubmit = (data) => console.log(data)



  return (
   <>
   <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" {...register("emailRequired" , {required:true})} placeholder='Email' /><br />
    {errors.emailRequired && <span style={{color:'red'}}>This field is required</span>}<br/>
   <input type="password" {...register("passwordRequired", { required: true })} placeholder='Password' /><br />
     {errors.passwordRequired && <span style={{color:'red'}}>This field is required</span>}<br/>
   <button>Login</button>
   </form>
   </>
  )
}

export default App