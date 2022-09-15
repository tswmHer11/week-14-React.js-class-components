import React from 'react';
import Review from './review';

export default class MovieList extends React.Component {
    render() {
        return (
            <div className=" container">
                {this.props.movies.map((movie) => {
                    return (
                        <div className="card w-75" key={movie.id}>
                            <div className='card-header bg-black text-white'>
                                {movie.title}
                            </div>
                            <div className="card-body">
                                <img src={movie.image} alt={movie.alt}/>
                                <p>{movie.genre}</p>
                            </div>
                            <div className="card-footer">
                                <Review movie={movie}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}