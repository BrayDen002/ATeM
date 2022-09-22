import React from 'react';
import './Card.css';
import {FiArrowRight, FiArrowLeft} from 'react-icons/fi';

export default function HorizontalCard(props) {
    return (
        <div className="horizontal-payment-card">
            <div className="horizontal-top-row">
                {props.paymentType === "Pay" && 
                    <div className="payment-users">
                        <div className="paid-icon"><FiArrowRight /></div>
                        <p><strong>{props.usernameA}</strong> paid <strong>{props.usernameB}</strong></p>
                    </div>
                    
                }
                {props.paymentType === "Request" && 
                    <div className="payment-users">
                        <div className="request-icon"><FiArrowLeft /></div>
                        <p><strong>{props.usernameA}</strong> requested <strong>{props.usernameB}</strong></p>
                    </div>
                }
                <div className="transaction-time">
                    <p>at {props.timeDate}</p>
                </div>
            </div>
            <div className="payment-amount">
                <p>${props.amount}</p>
            </div>
            <div className="payment-desc">
                <p>{props.paymentNotes}</p>
            </div>
            {/* <button onClick={testSomething}>Test something</button> */}
        </div>
    );
}


