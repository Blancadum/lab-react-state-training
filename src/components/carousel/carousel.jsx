import { useState } from "react";

function Carousel({ images }) {
    // Estado para almacenar el índice de la imagen actual
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función para ir a la imagen anterior
    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Función para ir a la siguiente imagen
    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={handleLeftClick}>Left</button>
            <img 
                src={images[currentIndex]} 
                alt="Carousel" 
                style={{ width: "200px", height: "200px", margin: "0 20px" }}
            />
            <button onClick={handleRightClick}>Right</button>
        </div>
    );
}

export default Carousel;
