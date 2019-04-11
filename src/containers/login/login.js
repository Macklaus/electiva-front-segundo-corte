import React, { Component } from 'react';

import './login.css';
// import withFirebaseAuth from 'react-with-firebase-auth';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from '../../firebase-config';
// import {Link} from 'react-router-dom';

// const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
	render() {
		// const { user, signOut, signInWithGoogle } = this.props;

		return (
			<div className="login-container">
				{/* {user ? <p>Hola, {user.displayName}</p> : <p>Inicie sesión.</p>}

				{user ? (
					<button onClick={signOut}>Cerrar sesión</button>
				) : (
					<button onClick={signInWithGoogle}>Ingresa con Google</button>
				)} */}
				
				<h2 className="text-bold">Credentials</h2>
				<input className="login-input-form" type="text" placeholder="Username"></input>
				<input className="login-input-form" type="text" placeholder="password"></input>
				<button className="login-button text-bold">LOGIN</button>
				<button className="login-button text-bold login-google">LOGIN WITH GOOGLE</button>
			</div>
		);
	}
}

// const firebaseAppAuth = firebaseApp.auth();

// const providers = {
// 	googleProvider: new firebase.auth.GoogleAuthProvider()
// };

// export default withFirebaseAuth({
// 	providers,
// 	firebaseAppAuth
// })(Login);

export default Login;