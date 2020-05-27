import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


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

    function RenderMenuItem({ dish, onClick}) {
        return (
            // <Card onClick={() => onClick(dish.id)}>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
              </div>
            );
        });

        console.log('Menu Component render is invoked');

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
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