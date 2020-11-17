import React from "react";
import ImageNyanCat from '../assets/nyancat.gif';
// import ImageNyanCat from '../assets/nyancat.gif';


// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// const NyanCat = (message: string) => (
//     <div>
//         <h1>{message}</h1>
//         <img src={NyanCatGif} alt="Nyan Cat"/>
//     </div>
// );


const NyanCat: React.FunctionComponent<{ message: string }> = ({ message }) => (
    <div>
        <h1>{message}</h1>
        <img src={ImageNyanCat} alt="Nyan Cat"/>
    </div>
    );

export default NyanCat;