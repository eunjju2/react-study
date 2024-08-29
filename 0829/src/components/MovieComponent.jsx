import React from 'react';

const MovieComponent = (props) => {
    const { title, open, image } = props;
    return (
        //실습1, 2
        <div>
            <h1>제목 : {title} </h1>
            <h1>개봉 : {open} </h1>
            <img style={{width:300}} src={image}></img>
            <hr/>
        </div>
    );
};

export default MovieComponent;