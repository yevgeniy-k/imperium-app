import React, { useContext, useState, } from 'react';
import { useLoginMutation } from 'types/gqlReactTypings.generated.d';
import { AuthContext } from 'shared/Authentication';
import AppInput, { InputType } from 'components/AppInput';
import { OnboardingWrapper } from './components/onboardingWrapper';
import { GeneralRoutes } from 'shared/Routes';
import { devEntry } from 'shared/Utilities';
import { Redirect } from 'react-router-dom';

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(devEntry('admin@test.com') ?? '');
  const [password, setPassword] = useState<string>(devEntry('testtest') ?? '');
  const { signIn } = useContext(AuthContext);
  const [loginMutation] = useLoginMutation({ variables: { email, password } });
  const [redirect, setRedirect] = useState<boolean>(false);

  const login = () => {
    loginMutation().then(({ data }) => {
      if (!data) {
        throw Error('No data for login');
      }

      const { token, user } = data?.login;

      if (!!token) {
        signIn(token, user);
        setRedirect(true);
      }
    }).catch(err => {
      console.error(err);
    });
  }

  if (!!redirect) {
    return <Redirect to={GeneralRoutes.DASHBOARD} />
  }
  return (
    <OnboardingWrapper
      cardTitle='Login'
      action={{ title: 'Login', onClick: login }}
      secondaryAction={{ title: 'Sign up for a new user?', href: GeneralRoutes.REGISTER }}
    >
      <AppInput type={InputType.TEXT} onChange={setEmail} placeholder='Your Email' value={email} />
      <AppInput type={InputType.PASSWORD} onChange={setPassword} placeholder='Password' value={password} />
    </OnboardingWrapper >
  )
}