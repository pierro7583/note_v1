import React from "react";

function Footer(){

// Mise a jour automatique de l'année !    
const currentYear = new Date().getFullYear();

    return (
    <footer>
    <p>Copyright (c) {currentYear}</p>
    </footer>
    );
}

export default Footer;