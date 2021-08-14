import React from 'react'
import Example from './Example'
import ReactDOM from 'react-dom'
const slides = {
    title : ["Good Job !","Keep up the Good Work!"],
    text : ["You are a SupeHero","Learn More Train More Skill!"],
};
const Slides = () => {
    return (
        <>
            <Example slides={slides} />
        </>
    );
}

export default Slides;

// if (document.getElementById('app')) {
//     ReactDOM.render(<Slides />, document.getElementById('app'));
// }
