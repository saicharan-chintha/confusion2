import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount() {
        console.log('Dishdetail Component componentDidMount is invoked');
    }

    // constructor(props) {
    //     super(props);
    // }

    componentDidUpdate() {
        console.log('Dishdetail Component componentDidUpdate is invoked');
    }

    renderDish(dish) {

        console.log('Dishdetail Component render is invoked');

        if (dish != null) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(dish) {

        if (dish!=null) {

            const comments = dish.comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- <span>{comment.author}</span> , 
                        <span> {new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "2-digit"
                                }).format(new Date(Date.parse(comment.date)))}
                        </span></p>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    } 

    render() {

        return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        </div>
        );
    }

}

export default DishDetail;
