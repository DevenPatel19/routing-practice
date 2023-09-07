import React from 'react';
import { useParams } from 'react-router';


const Word = () => {
    const { word, color, back } = useParams();
    const style = {
        color: color || 'black',     // Default to black if color is not specified
        backgroundColor: back || 'white',  // Default to white if background is not specified
        padding: '10px',
    };

    return(
        <div className='mt-5' style={style}>
        {isNaN(word)? (<h2>The word is: {word}</h2>):(<h2 >The number is: {word}</h2>)}
        </div>
    );
};

export default Word;