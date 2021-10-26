import React from 'react';
import heroImage from '../images/dog1.jpg';

export const Hero = () => (
    <div className="hero min-h-screen bg-base-200 rounded-lg">
        <div className="flex-col text-center hero-content ">
            <div>
                <h1 className="mb-5 text-5xl font-bold text-primary-focus">
                    Roxynho
                </h1>
                <p className="mb-5">
                    A la mémoire de Roxy.
                </p>
            </div>
            <img src={heroImage} className="min-w-full h-full rounded-lg shadow-2xl" alt="hero" />
            <div className="shadow stats ">
                <div className="stat">
                    <div className="stat-value text-sm italic text-primary">21-10-21</div>
                </div>
            </div>
        </div>
    </div>
)