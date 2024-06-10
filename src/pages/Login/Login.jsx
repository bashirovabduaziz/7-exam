import React from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Components from './Components';

function Login() {
  const [signIn, toggle] = React.useState(true);
  const [signUpData, setSignUpData] = React.useState({
    name: '',
    email: '',
    password: ''
  });
  const [signInData, setSignInData] = React.useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSignUp = () => {
    localStorage.setItem('user', JSON.stringify(signUpData));
    toggle(true);
    toast.success('Account created successfully!');
  };

  const handleSignIn = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      storedUser.email === signInData.email &&
      storedUser.password === signInData.password
    ) {
      navigate('/home'); // Use navigate to redirect to the home page
    } else {
      toast.error('Incorrect email or password');
    }
  };

  return (
    <>
      <ToastContainer />
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type='text'
              placeholder='Name'
              value={signUpData.name}
              onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
            />
            <Components.Input
              type='email'
              placeholder='Email'
              value={signUpData.email}
              onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
            />
            <Components.Input
              type='password'
              placeholder='Password'
              value={signUpData.password}
              onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
            />
            <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type='email'
              placeholder='Email'
              value={signInData.email}
              onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
            />
            <Components.Input
              type='password'
              placeholder='Password'
              value={signInData.password}
              onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
            />
            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
            <Components.Button onClick={handleSignIn}>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </>
  );
}

export default Login;
