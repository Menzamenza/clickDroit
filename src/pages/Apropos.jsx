import React from 'react';
import Navbar from '../components/Navbar';
import no from "../assets/nopropos.jpg";

const Apropos = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center text-center pt-20">
                <img
                    src={no}
                    alt="Page en construction"
                    className="w-75 mb-5"
                />
                <h2 className="text-2xl font-bold mb-2">Page en construction</h2>
                <p className="text-lg">La page à propos n'est pas encore disponible.</p>
            </div>
        </>
    );
};

export default Apropos;