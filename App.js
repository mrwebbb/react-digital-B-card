import React from "react"
import Intro from "./components/Intro.js"
import Main from "./components/Main.js"
import Navbar from "./components/Navbar.js"
// import Intro02 from './components/Intro02';
import Footer from "./components/Footer.js";



export default function App(){
    return( 
        <div className="app">
            <Navbar />
            <div>
                <Intro />
                <Main />
                <Footer />
            </div>
            {/* <div>
                <Intro02 />
                <Main />
            </div> */}

           
            
        </div>
    )
}