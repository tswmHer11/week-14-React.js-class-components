import React from 'react';
            
export default class Rating extends React.Component {
    
    render() {
        const {reviews, onChange} = this.props;
        return (
            <div>
                <select className="w-50" name="selector" value={reviews.selector} onChange={onChange} >
                    <option value="N/A" >Select</option>
                    <option value="1 star" >1 Star</option>
                    <option value="2 stars">2 Stars</option>
                    <option value="3 stars">3 Stars</option>
                    <option value="4 stars">4 Stars</option>
                    <option value="5 stars">5 Stars</option> 
                 </select>
            </div>        
        );
    }
}