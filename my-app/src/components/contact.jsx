import { useState } from "react"
import supabase from "../supabase-clients"

const Contact = () =>{
    const [form,setForm] = useState({name: "", email: "", timeframe: "", budget: "", message: ""})
    const handleClick = (e) =>{
        const {id,value} = e.target
        setForm(form =>{
            return {
                ...form,
                [id]:value
            }
        })
        console.log(form)
    }
    
    //post function
    const postForm = async() =>{

        const {error} = await supabase.from("requests").insert(form).single()
        if (error){
            console.error(error)
        }
        setForm({name: "", email: "", timeframe: "", budget: "", message: ""})
    }
    //post function end

    //post btn
    
    const postBtn = (e) =>{
        e.preventDefault()
        postForm()
    }
    //post btn end
    return(
        <section className="pt-25 px-3 mb-70">
            <form action="">
                <label htmlFor="name" className="text-white">
                    Your name
                    <input type="text" className="form-input" id="name" onChange={handleClick}  placeholder="Enter your name" value={form.name}/>
                </label>
                <label htmlFor="email" className="text-white">
                    Your Email
                    <input type="text" className="form-input" id="email" onChange={handleClick}  placeholder="you@example.com" value={form.email}/>
                </label>
                <label htmlFor="timeframe" className="text-white">
                    Timeframe (optional)
                    <input type="text" className="form-input" id="timeframe" onChange={handleClick}  placeholder="Enter date or approx timeframe" value={form.timeframe}/>
                </label>
                <label htmlFor="budget" className="text-white">
                    Project Budget (optional)
                    <input type="text" className="form-input" id="budget" onChange={handleClick}  placeholder="What is your budget?" value={form.budget}/>
                </label>
                <label htmlFor="message" className="text-white">
                    Message
                    <input type="text" className="form-input h-30" id="message" onChange={handleClick}  placeholder="Enter your message" value={form.message}/>
                </label> 
                <button className="bg-white text-gray-900 p-2 rounded-md" onClick={postBtn}>submit</button>                                                               
            </form>
        </section>
    )
}

export default Contact