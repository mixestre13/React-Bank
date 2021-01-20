import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';

class UserProfile extends Component {
    render() {
        return (
            <div className="container">
                <Link to="/">
                <img src="bank.png" alt="bankimage" className="logo"/>
                </Link> 
                <h1>User Profile</h1>
                <div className="marginHelperSmall">Username: {this.props.user.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>
                <AccountBalance className="marginHelperSmall" accountBalance={this.props.accountBalance} debitTotal={this.props.debitTotal} creditTotal={this.props.creditTotal}/>
                <div className="linkContainer marginHelperSmall">
                <div>{this.props.user.loggedIn ? <Link className="linkItem" to="/debits">Debits</Link> : ""}</div>
                <div>{this.props.user.loggedIn ? <Link  className="linkItem"to="/credit">Credit</Link> : ""}</div>
                </div>
            </div>
        )
    }
}

export default UserProfile;