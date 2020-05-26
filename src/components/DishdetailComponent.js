import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// class DishDetail extends Component {

//     componentDidMount() {
//         console.log('Dishdetail Component componentDidMount is invoked');
//     }

    // constructor(props) {
    //     super(props);
    // }

    // componentDidUpdate() {
    //     console.log('Dishdetail Component componentDidUpdate is invoked');
    // }

    function RenderDish({dish}) {

        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}) {

        const commens = comments.map((comment) => {
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
            <div className="col-12 col-md-5 m-1">
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commens}
                    </ul>
                </div>
            </div>
        );
    } 

    const DishDetail = (props) => {

        if(props.selectedDish!=null) {
            return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.selectedDish}/>
                    <RenderComments comments={props.selectedDish.comments}/>
                </div>
            </div>
            );
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12"></div>
                    </div>
                </div>
            );
        }


    }


export default DishDetail;