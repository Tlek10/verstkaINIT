import logo from '/src/img/logo.svg';
import React from 'react';

export default function Blog() {
    return (
        <div>
            <nav>
                <img className="w-3 h-3" src={logo} alt="logo" />
            </nav>
        </div>
    );
}
