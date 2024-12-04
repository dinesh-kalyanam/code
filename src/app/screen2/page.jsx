"use client"
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
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
// import Diff from "./Screen3"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const FormScreen =()=>{
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })
    
      // 2. Define a submit handler.
      function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    
      return (
        <div className="FromContainer">
            
          <h1 className="FormHeading">
          Brooklyn Nine-Nine
          </h1>
          <div className="ChangeCard"> <a href="/"> <Button > 
                Change Card
            </Button></a></div>
            <ul className="FormImg">
                <li><img src="image43.png" className="imgform" alt="" /></li>
                <li><img src="image47.png" className="imgform" alt="" /></li>
                <li><img src="image48.png" className="imgform"  alt="" /></li>
                <li><img src="image51.png" className="imgform" alt="" /></li>
                
            </ul>
        
            <div className='Form'> 
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
<h1 className="FormName">What’s your name?</h1>
                  <FormControl>
                    <Input placeholder="YourName" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        <div className="FormButton"><Button type="submit" className="SubmitButton" >  
        <a href="/select"> Continue</a>
       </Button> </div>
           
          </form>

        </Form>

        </div>
      
        </div>
      )
}
export default FormScreen 