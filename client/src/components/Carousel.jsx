import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ngo1 from '../assets/ngo1.png';
import ngo2 from '../assets/ngo2.png';
import ngo3 from '../assets/ngo3.png';
import ngo4 from '../assets/ngo4.png';

const items = [
    { id: 1, title: 'Item 1', imageUrl: ngo1 },
    { id: 2, title: 'Item 2', imageUrl: ngo2 },
    { id: 3, title: 'Item 3', imageUrl: ngo3 },
    { id: 4, title: 'Item 4', imageUrl: ngo4},
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnSlideChange = (event) => {
        setCurrentIndex(event.item);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="w-full">
            <AliceCarousel
                items={items.map((item) => (
                    <div key={item.id}>
                        <img className=" w-[80vw] h-[60vh] object-cover mx-auto rounded-2xl mt-6" src={item.imageUrl} alt={item.title} />
                    </div>
                ))}
                activeIndex={currentIndex}
                onSlideChanged={handleOnSlideChange}
                autoPlayInterval={3000}
                autoPlayDirection="ltr"
                autoPlay={false}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                dotsDisabled={true}
                buttonsDisabled={true}
                showSlideInfo={false}
                disableButtonsControls={true}
                responsive={{
                    0: { items: 1 },
                    768: { items: 1 },
                    1024: { items: 1 },
                }}
            />
        </div>
    );
};

export default Carousel;
