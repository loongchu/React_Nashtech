import React from 'react';
import {Container, Form, FormControl} from "react-bootstrap";
import './EditPost.css'

const EditPost = () => {
    return (
        <div>
            <Form className="form-edit">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    );
};

export default EditPost;