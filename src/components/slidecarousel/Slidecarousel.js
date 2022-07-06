import React from "react";
import { Carousel } from "flowbite-react";

export default function Slidecarousel() {
    return (
        <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
                />
            </Carousel>
            <Carousel indicators={false}>
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
                />
            </Carousel>
        </div>
    );
}