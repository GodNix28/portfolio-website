import { useState } from "react";
import axios from "axios";

function Contact() {

    const [formData,setFormData] =
    useState({
        name:"",
        email:"",
        message:""
    });

    const handleChange = (e)=>{

        setFormData({
            ...formData,
            [e.target.name]:
            e.target.value
        });
    };

    const handleSubmit = async(e)=>{

        e.preventDefault();

        try{

            await axios.post(
                "https://godwinnixon-portfolio.onrender.com/api/messages",
                formData
            );

            alert("Message Sent Successfully");

            setFormData({
                name:"",
                email:"",
                message:""
            });

        }catch(error){

            console.log(error);

            alert("Error Sending Message");
        }
    };

    return (

        <section className="projects-section">

            <h2 className="projects-title">
                Contact Me
            </h2>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Send Message
                </button>

            </form>

        </section>
    );
}

export default Contact;