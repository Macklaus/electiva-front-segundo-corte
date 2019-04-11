import React from 'react';
import './navbar.css';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase-config';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Navbar extends React.Component {
    render(){
        const { user, signOut, signInWithGoogle } = this.props;
        return (
            <div className="navbar-container">
                <div className="navbar-title">Post <em>& Users</em></div>
                <div className="navbar-buttons">
                    <nav>
                        <a href="http://localhost:3000/posts">Posts</a>
                        <a href="http://localhost:3000/albums">Albums</a>
                    </nav>
                    {user ? (<div className="navbar-username">Hi, {user.displayName}</div>) : (<p></p>)}
                    {user ? (
					    <button className="navbar-logout-button" onClick={signOut}>Logout</button>
				    ) : (
					    <button className="navbar-logout-button" onClick={signInWithGoogle}>Login with Google</button>
				    )}
                </div>
            </div>
        )
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
	googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
	providers,
	firebaseAppAuth
})(Navbar);