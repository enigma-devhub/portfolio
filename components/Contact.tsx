import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    //what type of data are we accepting from react hooks form
    name: string;
    email: string;
    subject: string;
    message: string;


};

type Props={};

function Contact({}: Props) {

    const { register,  handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:papareact.team@gmail?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <div
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth z-0">

            <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">Contact Me
            </h3>


            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>I have got what you need. {" "}
                    <span className='underline decoration-[#800080]'>Hit Me Up</span>

                </h4>
                <div className='space-y-10'>

                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#800080] h-7 w-7 animate-pulse' />
                        <p className='text-4xl'>+2349053386778</p> </div>
                    <div className='flex items-center space-x-5 justify-center'>  <MapIcon className='text-[#800080] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Km 10, Canaanland Ota</p></div>
                    <div className='flex items-center space-x-5 justify-center'>  <EnvelopeIcon className='text-[#800080] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>emmanuelonoja291@gmail.com</p>
                    </div>
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input
                       {...register("name")}
                            type="text"
                            placeholder='Name'
                            className='contactInput' />

                        <input 
                        {...register('email')}
                            type="email"
                            placeholder='Email'
                            className='contactInput' />
                    </div>

                    <input
                     {...register('subject')}
                        type="text"
                        placeholder='Subject'
                        className='contactInput' />

                    <textarea
                     {...register('message')}
                        placeholder='Message'
                        className='contactInput' />

                    <button className='bg-[#800080] py-5 px-10 rounded-md text-white font-bold' type='submit'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Contact