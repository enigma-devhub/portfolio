import next from 'next';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link'
type Props = {}

export default function Hero({ }: Props) {

    // React simple typewriter
    const [text, count] = useTypewriter({
        words: [
            "Hello, This Is Emmanuel Onoja",
            "The Internet made me ENIGMA!",
            "I Am A Tech-Writer",
            "I Have A lot Of Interest In Blockchain",
            "<But-Loves-Code-More />",
            "<So I Chose To Be A BlockChain Dev/>"

        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden">

            <BackgroundCircles />

            {/* Circled image */}
            <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911329_960_720.jpg" alt="Image of a motherfucker" />

            <div className="z-20">
                {/* typewriter text */}
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">Front-End Engineer</h2>
                <h1 className="text-5xl lg:text-5xl font-semibold px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="#800080" />
                </h1>

                {/* Others */}
                <div className="pt-5">

                    <Link href="#about">
                        <button className="heroButton">About</button></Link>
                    <Link href="#experince">
                        <button className="heroButton">Experience</button></Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button></Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button></Link>
          {/*  1 hour 11 minutes  */}


                </div>
            </div>
        </div>
    )
}