import React from 'react'
import Header from './Header'
import Footer from './Footer';

export default function Mainlayout(props) {
    const removeLayer = () => {
        document.getElementById("root").classList.remove("dash-main-class-add");
    }
    return (<>
        <Header />
        {props.children}
        <div className="overlay toggle-icon-main" onClick={removeLayer}></div>
        <Footer />
    </>
    )
}
