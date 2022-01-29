import react from 'react';
// import exp1 from "./exp1";
// import {Link} from 'react-router-dom';

function Header() {
    return (
        <body>
            <header className="header">

                <div className="left">
                    <img src="https://cdn5.vectorstock.com/i/1000x1000/98/64/fitness-gym-logo-with-strong-athlete-and-barbell-vector-24189864.jpg"
                        alt=""></img>
                    <div style={{color:"black"}}>Fitness club</div>
                </div>

                <div className="mid">
                    <nav className="navbar">
                        <ul>
                            <li><a href="exp1.html">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Fitness calculator</a></li>
                            <li><a href="contact.html">Contact us</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="right">
                    <form action="exp1.html"></form>
                    <a href="exp1.html">
                        <button className="btn">Call us</button>
                        <button className="btn">Email us</button>
                    </a>




                </div>
            </header>
            <div className="container">
                <h1>Join the best gym</h1>
                <form action="successfully submitted">
                    <div className="frm">
                        <input type="text" name="" placeholder="Enter your name"></input>
                    </div>
                    <div className="frm">
                        <input type="text" name="" placeholder="Enter your email"></input>
                    </div>
                    <div className="frm">
                        <input type="number" name="" placeholder="Enter your age"></input>
                    </div>
                    <div className="frm">
                        <input type="number" name="" placeholder="Enter your weight"></input>
                    </div>
                    <button className="btn" onclick="getElementById('test').innerHTML = Date()">submit</button>

                    <p id="test"> </p>

                </form>
            </div>
        </body>
    );
}

export default Header;