import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//Maintain workflow for checkout steps based on user actions
export default function CheckoutSteps(props) {

    return (
        <Row className='checkout-steps'>
            <Col className={props.step1 ? 'active' : ''}>SignIn</Col>
            <Col className={props.step2 ? 'active' : ''}>Shop Items</Col>
            <Col className={props.step3 ? 'active' : ''}>Shipping</Col>
            <Col className={props.step4 ? 'active' : ''}>Payment</Col>
            <Col className={props.step5 ? 'active' : ''}>Place Order</Col>
        </Row>
    )
}