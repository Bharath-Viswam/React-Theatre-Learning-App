import React, { JSX } from 'react'


interface WelcomeProps {
    name: string;
}

export default function Welcome({name}: WelcomeProps): JSX.Element {
    return (
        <div>
            <h1>Welcome,{name}! Enjoy the show 🎭</h1>
        </div>
    );
}