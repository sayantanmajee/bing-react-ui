import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight, BsChevronCompactRignt } from 'react-icons/bs'


function Carousel() {
    const url =
        "https://pixabay.com/api/?key=28956212-6d0ae436b5e82108983959648&q=yellow+flowers&image_type=photo&pretty=true";

    const [imagesData, setImagesData] = useState([]);
    const [style, setStyle] = useState("")
    // fetch images from pixabay dummy api
    const fetchImages = async () => {
        await fetch(url, { method: "GET" })
            .then((res) => res.json())
            .then((json) => setImagesData(json.hits));
    };

    useEffect(() => {
        fetchImages();
    }, []);
    

    const slideLeft = () => {
        const width = window.innerWidth
        const slider = document.getElementById('slider')
        if (width > 1300) slider.scrollLeft = slider.scrollLeft - 600
        else slider.scrollLeft = slider.scrollLeft - 500

        console.log("left" +slider.scrollLeft)
    }

    const slideRight = () => {
        const width = window.innerWidth
        const slider = document.getElementById('slider')
        if (width > 1300) slider.scrollLeft = slider.scrollLeft + 600
        else slider.scrollLeft = slider.scrollLeft + 500
        console.log("width"+width)
        console.log("right" +slider.scrollLeft)
    }

    const changeStyle = () => {
        setStyle("scale-75 transition-all")
    }

    return (imagesData.length > 0 ? (<div className="hidden absolute bottom-40 max-w-[80%] md:flex flex-row items-center justify-center space-x-6">
        <BsChevronCompactLeft className= "h-36 select-none w-36 cursor-pointer text-white opacity-50 hover:opacity-100 active:scale-75 duration-100 transition-all" onClick={slideLeft} />
        <div id="slider" className="relative md:grid gap-2 grid-flow-col max-w-[100%] overflow-x-auto overscroll-contain scrollbar-hide scroll-smooth whitespace-nowrap rounded-lg">
            {imagesData.map((image) => (
                <div className="h-50 hover:scale-105 duration-100 transition-all cursor-pointer w-40 bg-black text-white rounded-lg" key={image.id}>
                    <p className="p-1 capitalize">{image.user}</p>
                    <img src={image.largeImageURL} className="aspect-video object-cover " alt="/" />
                </div>
            ))}
        </div>;
        <BsChevronCompactRight className="h-36 w-36 select-none cursor-pointer text-white opacity-50 hover:opacity-100 active:scale-75 duration-100 transition-all" onClick={slideRight} />
    </div>) : (<div className="text-5xl absolute bottom-52 text-white">Loading...</div>))
}

export default Carousel;
