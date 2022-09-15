import React from 'react';

export default class ReviewCard extends React.Component {
    render() {
        const { review, handleDelete } = this.props;
        return (
            <div className='row' >
                <h3 text='bold' >{review.username} Rated- {review.selector} </h3>
                <div className="col-sm">
                    <p>-"{review.textarea}"</p>
                </div>
                <button className="col-sm-3 btn btn-danger" onClick={() => handleDelete(review.id)}>delete</button>
            </div>
        ); 
    }; 
};

