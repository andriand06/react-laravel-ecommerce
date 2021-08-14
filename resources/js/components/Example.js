import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Example({slides}) {
    const [current, setCurrent] = useState(0);
    const [ title, setTitle] = useState(slides.title[current]);
    const [ text, setText] = useState(slides.text[current]);
    const [ nextClassName, setNextClassName] = useState("");
    const [ prevClassName, setPrevClassName] = useState("");
    const [ restartClassName, setRestartClassName] = useState("");
    const slidesKey = Object.keys(slides);
    const slidesLength = slidesKey.length;
    console.log(slidesLength);
    console.log(current);
    const Next = () => {
        if( current === +slidesLength - 1){
            setCurrent(current);
            setNextClassName("disabled");
        }
        else {
        setCurrent(current + 1);
        setTitle(slides.title[current + 1]);    
        setText(slides.text[current + 1]);
        setPrevClassName("");
        setRestartClassName("");
        }
    }
    const Prev = () => {
        if (current > 0) {
            setCurrent(current - 1);
            setTitle(slides.title[current - 1]);
            setText(slides.text[current - 1]);
            setNextClassName("");
            setRestartClassName("");
        }
        else {
            setPrevClassName("disabled");
        } 
    }
    const Restart = () => {
        setCurrent(0);
        setTitle(slides.title[0]);
        setText(slides.text[0]);
        if(current === 0) setRestartClassName("disabled");
        
        
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">{title}</div>

                        <div className="card-body">{text}</div>
                        <div>
                            <button onClick={Next} className={["btn","btn-primary",nextClassName].join(" ")}>Next</button>
                            <button onClick={Prev} className={["btn","btn-primary",prevClassName].join(" ")}>Prev</button>
                            <button onClick={Restart} className={["btn","btn-primary",restartClassName].join(" ")}>Restart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

// if (document.getElementById('app')) {
//     ReactDOM.render(<Example />, document.getElementById('app'));
// }
