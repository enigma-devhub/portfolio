
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link'
import { PageInfo } from '../typings';
import { urlFor } from '../Sanity';

type Props = {
   pageInfo: PageInfo;
}

export default function Hero({pageInfo}: Props) {

    // React simple typewriter
    const [text, count] = useTypewriter({
        words: [
            `Hello, This Is ${pageInfo?.name}`,
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
                src={urlFor(pageInfo?.heroImage).url()} alt="Image of a motherfucker" />

            <div className="z-20">
                {/* typewriter text */}
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">{pageInfo.role}</h2>
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