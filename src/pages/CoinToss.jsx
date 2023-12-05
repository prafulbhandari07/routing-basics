import { useState } from "react";

function CoinToss() {
    const [tossResult, setTossResult] = useState('')
    function handleClick(evt) {
        evt.preventDefault();
        const result = Math.random(0, 1);
        if (result > 0.5) {
            setTossResult('Heads')
        } else {
            setTossResult('Tails')
        }

    }
    return (<>
        <div id="contain">
            <div className="cointoss-container">
                <p id="cointoss-heading">Hello & Welcome to CoinFlip...</p>
                <div className="toss-btn">
                    <p id="result">{tossResult}</p>
                    <button id="btn" onClick={handleClick}>Click here to Toss the Coin</button>
                </div>
            </div>
        </div>
    </>)
}
export default CoinToss