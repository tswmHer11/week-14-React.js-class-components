import React from 'react';
import Rating from './rate-stars';

export default class ReviewForm extends React.Component {
        
        render() {
        const { reviews, onChange, handleSubmit,handleformreset} = this.props
        return (
            <div className="container">
                <div className="form-outline w-absolute" >
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Username</span>
                                </div>
                                <input type="text" className="form-control" name="username" onChange={onChange} aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <Rating onChange={onChange}
                                    handleformreset={handleformreset}
                                    reviews={reviews}
                                    />
                        </div>
                        <label className="form-label" htmlFor="review-box">Review</label>
                        <textarea className="form-control" type="text" value={reviews.textarea}  name="textarea" onChange={onChange}></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleSubmit} >Submit</button>
                </div>
            </div>
        );
    }
}
