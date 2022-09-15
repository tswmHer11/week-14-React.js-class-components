import React from 'react';
import ReviewForm from './review-form';
import ReviewCard from './review-card';

export default class Review extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            reviewArr: [],
            reviewData: {
                username: "",
                textarea: "",
                selector: "1 Star"
            },
            formReset: 0 // create a key for review-form to clear inputs
        }
    }
    
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => { 
        let { username, selector, textarea } = this.state
        let reviewData = {
            username: username,
            selector: selector,
            textarea: textarea,
            id: this.state.reviewArr.length // set id for map key
        }
        const reviews = [...this.state.reviewArr, reviewData]
        this.setState({
            reviewArr: reviews,
            formReset: this.state.formReset + 1, // increment review-form key so renders a new form and clears inputs
            // reset inputs
            username: '',
            textarea: '',
            selector: 'N/A'
        })
    }

    handleDelete = (id) => {
       const deleteReviews = this.state.reviewArr.filter(review => review.id !== id)
       this.setState({ reviewArr: deleteReviews })
    }

    render() {
        const { reviewArr } = this.state;
        const emptyReview = <p>"Add your Review"</p>;
        const newReview = reviewArr.map((review) => { 
            return (
                <ReviewCard review={review} 
                            key={review.id}
                            handleDelete={this.handleDelete}
                            />
            ) 
        });
        return (
            <div className='container'>
                <div className='card w-75'>
                    <div className='card-header bg-success text-white'>Movie Reviews
                    </div>
                    <div className='card-body'>
                        {(reviewArr.length === 0) ? emptyReview : newReview}
                    </div>
                    <div className="card-footer">
                        <ReviewForm handleSubmit={this.handleSubmit}
                                    onChange={this.onChange}
                                    reviews={reviewArr}
                                    key={this.state.formReset} // need this to clear inputs
                                    />
                    </div>
                </div>
            </div>
        );
    }
}