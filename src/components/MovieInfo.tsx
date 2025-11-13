import React, { JSX } from 'react'

interface MovieInfoProps {
    title: string;
    language: string;
    rating: number;
}
export default function MovieInfo({title, language, rating}: MovieInfoProps): JSX.Element {
    return (
        <div>
            <h3>{title}</h3>
            <p>Language: {language}</p>
            <p>⭐Rating: {rating}/10</p>
        </div>
    );
}