import React from 'react';
import Review from './review';

export default class MovieCard extends React.Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         // username: '',
    //         // selector: '',
    //         // id: '',
    //         reviews: [{
    //             id: 0,
    //             username: '',
    //             selector: '',
    //             textarea: ''
    //         }],
    //     }
    // }
    // onChange = e => {
    //     console.log(e.target.value);
    //     this.setState({ [e.target.name]: e.target.value });
    // }

    // handleSubmit = e => {
    //     const {reviews} = this.state;
    //     const id = 0;
    //     this.setState({ 
    //         reviews: 
    //             {...reviews,id: id + 1,
    //                         username: e.target.value,
    //                         selector: e.target.value,
    //                         textarea: e.target.value}
    //     })
    //     console.log(this.state)
    //     console.log('handle submit')

    // }

    // handleSelector = e => {
    //     this.setState({
    //         selector: e.target.value
    //     })
    // }

    render() {
        return (
            <div className="container">
                 <div className="card w-75">
                    <div className='card-header bg-black text-white'>
                        {this.props.movies.title}
                    </div>
                     <div className="card-body">
                        <img src={this.props.movies.image} alt={this.props.movies.alt}/>
                        <p>{this.props.movies.genre}</p>
                    </div>
                    <div className="card-footer">
                        {/* <Review reviews={ this.state.reviews }
                                onSubmit={this.handleSubmit}
                                onChange={this.onChange}
                                /> */}
                        <Review />
                    </div>
                </div>
            </div>
        );
    }
}