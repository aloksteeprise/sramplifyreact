import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator, Button,withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig)
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.signInDetails.loginId}</h1>
          <Button onClick={signOut}>Sign out</Button>
        </main>
      )}
    </Authenticator>
      </header>
    </div>
  );
}

export default withAuthenticator(App);