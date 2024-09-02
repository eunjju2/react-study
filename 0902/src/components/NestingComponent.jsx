import React from "react";
import "./NestingComponent.scss";
const NestingComponent = () => {
return (

    //실습1
    // <div className="container">
    //     <ul>
    //         <li>빨강</li>
    //         <li>파랑</li>
    //         <li>초록</li>
    //     </ul>
    // </div>

    //실습2
    <>
    <div className="parent-small">안녕하세요</div>
    <div className="parent-medium">안녕하세요</div>
    <div className="parent-large">안녕하세요</div>
    </>
);
};
export default NestingComponent;