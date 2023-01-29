import React from "react";

// function Greeting(props) {
//     return (
//         <h1>
//             Hello {props.firstName} {props.lastName}, How are you ?
//         </h1>
//     );
// }

function Greeting(props) {
    const { firstName, lastName } = props;
    return (
        <h1>
            Hello {firstName} {lastName}, How are you ?
        </h1>
    );
}


export default Greeting;
