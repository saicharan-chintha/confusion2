import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFormModalOpen : false
        }
        this.toggleFormModal = this.toggleFormModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.toggleFormModal();
        console.log("Current state is: "+JSON.stringify(values));
        alert("Current state is: "+JSON.stringify(values));
    }

    toggleFormModal() {
        this.setState({
            isFormModalOpen : !this.state.isFormModalOpen
        });
    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleFormModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isFormModalOpen} toggle={this.toggleFormModal}>
                <ModalHeader toggle={this.toggleFormModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label className="col-12">Rating</Label>
                            <Col>
                                <Control.select model=".rating" name="rating"
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label className="col-12" htmlFor="name">Your Name</Label>
                            <Col>
                                <Control.text model=".name" id="name" name="name"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters ',
                                        maxLength: 'Must be 15 characters or less '
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label className="col-12" htmlFor="message"> Comment</Label>
                            <Col>
                                <Control.textarea model=".message" id="message" name="message"
                                    rows="6"
                                    className="form-control" 
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button type="submit" color="primary">
                                Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal> 

            </div>
        );
    }
}

export default CommentForm;