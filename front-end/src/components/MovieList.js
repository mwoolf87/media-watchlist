import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList(props) {
    const { movieData } = props.movieData
    return (
        <div>
            { movieData && movieData.map((movie) => { return <MovieCard/>
                })
            }
        </div>
    )
}
