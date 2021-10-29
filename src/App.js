import "./App.css";
import {useState} from "react";

function App() {

    const [topLeft, setTopLeft] = useState(0);
    const [topRight, setTopRight] = useState(0);
    const [bottomLeft, setBottomLeft] = useState(0);
    const [bottomRight, setBottomRight] = useState(0);

    const changeBorder = () => {
        let container = document.getElementById("container");
        container.style.borderTopLeftRadius = topLeft + "px"
        container.style.borderTopRightRadius = topRight + "px"
        container.style.borderBottomLeftRadius = bottomLeft + "px"
        container.style.borderBottomRightRadius = bottomRight + "px"
    }

    /**
     * Has to create a hidden text area somewhere and copy the text from there
     */
    const copyContainerStyles = () =>{
        let containerStyles = document.querySelector('#container').getAttribute("style")

        navigator.clipboard.writeText(JSON.stringify(containerStyles)).then(function() {
            console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });

    }

    return (
        <div className="App">
            <header className="App-header">Border Radius Previewer</header>
            <div class="container-controls">
                <h4>Container Controls</h4>
                <div className="control-container">
                    <span className="value-controller-text">Border Radius Top Left Corner</span>
                    <input
                        type="number"
                        min={0}
                        className="value-controller"
                        value={topLeft}
                        onChange={(e) => {
                            setTopLeft(e.target.value)
                            changeBorder();
                        }}/>
                </div>
                <div className="control-container">
                    <span className="value-controller-text">Border Radius Top Right Corner</span>
                    <input
                        type="number"
                        min={0}
                        className="value-controller"
                        value={topRight}
                        onChange={(e) => {
                            setTopRight(e.target.value)
                            changeBorder();
                        }}
                    />
                </div>
                <div className="control-container">
                    <span className="value-controller-text">Border Radius Bottom Left Corner</span>
                    <input
                        type="number"
                        min={0}
                        className="value-controller"
                        value={bottomLeft}
                        onChange={(e) => {
                            setBottomLeft(e.target.value)
                            changeBorder();
                        }}
                    />
                </div>
                <div className="control-container">
                    <span className="value-controller-text">Border Radius Bottom Right Corner</span>
                    <input
                        type="number"
                        min={0}
                        className="value-controller"
                        value={bottomRight}
                        onChange={(e) => {
                            setBottomRight(e.target.value)
                            changeBorder();
                        }}
                    />
                </div>
            </div>
            <div className="copy-css-button-container">
                <button className="copy-css-button" onClick={() => copyContainerStyles()}>
                    <img src="https://img.icons8.com/material-outlined/48/000000/copy.png"/>
                </button>

            </div>
            <div class="container-ui">
                <div id="container" style={{border: "white solid 5px", height:"300px", width:"600px"}}></div>
            </div>
        </div>
    );
}

export default App;
