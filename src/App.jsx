import React, { Component } from 'react';
import './App.css';

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tradingPair: '',
            accountNumber: '',
            password: '',
            brokerServer: '',
            serialKey: '',
            betAmount: '',
            errors: {
                tradingPair: '',
                accountNumber: '',
                password: '',
                brokerServer: '',
                serialKey: '',
                betAmount: ''
            }
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { tradingPair, accountNumber, password, brokerServer, serialKey, betAmount } = this.state;
        let valid = true;

        // Clear previous error messages
        const errors = {
            tradingPair: '',
            accountNumber: '',
            password: '',
            brokerServer: '',
            serialKey: '',
            betAmount: ''
        };

        // Validation checks
        if (tradingPair === '') {
            errors.tradingPair = 'Please select a trading pair.';
            valid = false;
        }
        if (accountNumber.trim() === '') {
            errors.accountNumber = 'Please enter your account number.';
            valid = false;
        } else if (accountNumber.trim().length !== 12) {
            errors.accountNumber = 'Account number must be 12 characters.';
            valid = false;
        }
        if (password.trim() === '') {
            errors.password = 'Please enter your password.';
            valid = false;
        } else if (!/[a-zA-Z]/.test(password.trim())) {
            errors.password = 'Password must contain at least one letter.';
            valid = false;
        }
        if (brokerServer.trim() === '') {
            errors.brokerServer = 'Please enter your broker server.';
            valid = false;
        }
        if (serialKey.trim() === '') {
            errors.serialKey = 'Please enter your serial key token.';
            valid = false;
        }
        if (betAmount.trim() === '' || isNaN(betAmount) || betAmount <= 0) {
            errors.betAmount = 'Please enter a valid bet amount.';
            valid = false;
        }

        // Update state with error messages
        this.setState({ errors });

        // If all validations pass, submit the form
        if (valid) {
            alert('Form submitted successfully!');
            // Perform form submission logic here
            // For example, you can send the form data to an API endpoint
        }
    };

    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    componentDidMount() {
        // Run this code after the component has mounted and the DOM is ready
        document.getElementById('tradingForm').addEventListener('submit', this.handleSubmit);
    }

    componentWillUnmount() {
        // Cleanup: Remove event listener when component is unmounted
        document.getElementById('tradingForm').removeEventListener('submit', this.handleSubmit);
    }

    render() {
        const { errors } = this.state;
        return (
            <section className="container mt-5 red-background">
                <div className="text-center mb-4">
                    <h1>Trading Interface</h1>
                </div>
                <form id="tradingForm" onSubmit={this.handleSubmit} noValidate>
                    <div className="mb-3">
                        <label htmlFor="tradingPair" className="form-label">Trading Pair:</label>
                        <select className="form-select" id="tradingPair" required onChange={this.handleChange} value={this.state.tradingPair}>
                            <option value="" disabled>Select a trading pair</option>
                            <option value="BTC/USD">Option1</option>
                            <option value="ETH/USD">Option2</option>
                        </select>
                        {errors.tradingPair && <div className="error-message" id="tradingPairError">{errors.tradingPair}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="accountNumber" className="form-label">Account Number:</label>
                        <input type="text" className="form-control" id="accountNumber" placeholder="Enter your account number" required onChange={this.handleChange} />
                        {errors.accountNumber && <div className="error-message" id="accountNumberError">{errors.accountNumber}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="password" placeholder="Strong-password" required onChange={this.handleChange} />
                        {errors.password && <div className="error-message" id="passwordError">{errors.password}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="brokerServer" className="form-label">Broker Server:</label>
                        <input type="text" className="form-control" id="brokerServer" placeholder="ICMarkets-Live" required onChange={this.handleChange} />
                        {errors.brokerServer && <div className="error-message" id="brokerServerError">{errors.brokerServer}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="serialKey" className="form-label">Serial Key Token:</label>
                        <input type="text" className="form-control" id="serialKey" placeholder="What is your serial key token?" required onChange={this.handleChange} />
                        {errors.serialKey && <div className="error-message" id="serialKeyError">{errors.serialKey}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="betAmount" className="form-label">Bet Amount:</label>
                        <input type="number" className="form-control" id="betAmount" placeholder="Enter your bet amount" required onChange={this.handleChange} />
                        {errors.betAmount && <div className="error-message" id="betAmountError">{errors.betAmount}</div>}
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-block">Start Trading</button>
                    </div>
                </form>
            </section>
        );
    }
}
