import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
// class Menu extends Component {    

    // renderDish(dish) {
    //     if (dish != null) {
    //         return(
    //             <Card>
    //                 <CardImg top src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                   <CardTitle>{dish.name}</CardTitle>
    //                   <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     else {
    //         return(
    //             <div></div>
    //         );
    //     }
    // }

    // render() {

    function RenderMenuItem({ dish}) {
        return (
            // <Card onClick={() => onClick(dish.id)}>
            <Card>
                <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.dishes.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
                {/* <RenderMenuItem dish={dish} onClick={props.onClick} /> */}
              </div>
            );
        });

        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
        }
    }

    // const menu = this.props.dishes.map((dish) => {
    //     return (
    //       <div key={dish.id} className="col-12 col-md-5 m-1">
    //     <Card onClick={() => this.props.onClick(dish.id)}>
    //     <CardImg width="100%" src={dish.image} alt={dish.name} />
    //     <CardImgOverlay>
    //         <CardTitle>{dish.name}</CardTitle>
    //     </CardImgOverlay>
    //     </Card>
    //       </div>
    //     );
    // });

    // console.log('Menu Component render is invoked');

    // return (
    //     <div className="container">
    //         <div className="row">
    //             {menu}
    //         </div>
    //     </div>
    // );
        


export default Menu;