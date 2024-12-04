"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })
   

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   })
// function onSubmit(values) {

// console.log(values)
// }
const CopyCode = () => {
 
  return (
    <div className='FromContainer'>

<div className="ChangeCard"> <a href="/"> <Button>
        Change Card
      </Button></a></div>
      <h1 className="FormHeading1">
          Brooklyn Nine-Nine
          </h1>
      <ul className="FormImg">
        <li><img src="image43.png" className="imgform" alt="" /></li>
        <li><img src="image47.png" className="imgform" alt="" /></li>
        <li><img src="image48.png" className="imgform" alt="" /></li>
        <li><img src="image51.png" className="imgform" alt="" /></li>

      </ul>
      <p className='CopyCodePara'>
      Yeyy! You are almost done. Share the below code with your friends to start
      </p>
    
<Form>
  
</Form>
    </div>
  )
}

export default CopyCode