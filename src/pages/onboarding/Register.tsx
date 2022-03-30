import React, { useContext, useState, } from 'react';
import { useRegisterMutation, UserInput } from 'types/gqlReactTypings.generated.d';
import { AuthContext } from 'shared/Authentication';
import AppInput, { InputType } from 'components/AppInput';
import { OnboardingWrapper } from './components/onboardingWrapper';
import { GeneralRoutes } from 'shared/Routes';
import { random } from 'lodash';
import { devEntry } from 'shared/Utilities';
import { hookStateChangeInjector } from '@pbale/pb_utils';
import { Col, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'shared/Constants';
import gql from 'graphql-tag';

const TermsLink = styled(Link)`
  color: ${Colors.PRIMARY};
`;

gql`
  mutation Register($userInput: UserInput!) {
    register(userInput: $userInput) {
      token, user { ...CurrentUserFields }
    }
  }
`

export const Register: React.FC = () => {
  const [termsAgreed, setTermsAgreed] = React.useState<boolean>(false);
  const [exclusivityAgreed, setExclusivityAgreed] = React.useState<boolean>(false);
  const [registerMutation] = useRegisterMutation();
  const [redirect, setRedirect] = useState<boolean>(false);

  const [input, setInput] = useState<UserInput>({
    email: devEntry(`philip+${random(10000)}@waker.com`),
    phoneNumber: devEntry(`+1302275${random(1000, 9999)}`),
    firstName: devEntry('Philip'),
    lastName: devEntry('Bale'),
    password: devEntry('testtest'),
  });
  const changeInput = hookStateChangeInjector<UserInput>(input, setInput);
  const { signIn } = useContext(AuthContext);

  const register = () => {
    registerMutation({ variables: { userInput: input } }).then(({ data }) => {
      if (!data) {
        throw Error('No data for login');
      }

      const { token, user } = data?.register;

      if (!!token) {
        signIn(token, user);
        setRedirect(true);
      }

    }).catch((err) => {
      console.error(err);
      window.alert(`Error during sign up: ${err}`);
    });
  }

  if (!!redirect) {
    return <Redirect to={GeneralRoutes.DASHBOARD} />
  }

  return (
    <OnboardingWrapper
      cardTitle='Sign Up'
      action={{ title: 'Register', onClick: register, disabled: (!termsAgreed || !exclusivityAgreed) }}
      secondaryAction={{ title: 'Already have an account? Log in', href: GeneralRoutes.LOGIN_BASE }}
    >
      <AppInput type={InputType.TEXT} onChange={changeInput('email')} value={input.email} placeholder='Your Email' />
      <Row>
        <Col xs={6}>
          <AppInput type={InputType.TEXT} onChange={changeInput('firstName')} value={input.firstName} placeholder='First name' />
        </Col>
        <Col xs={6}>
          <AppInput type={InputType.TEXT} onChange={changeInput('lastName')} value={input.lastName} placeholder='Last name' />
        </Col>
      </Row>
      <AppInput type={InputType.TEXT} onChange={changeInput('phoneNumber')} value={input.phoneNumber} placeholder='Phone number (+1...)' />
      <AppInput type={InputType.PASSWORD} onChange={changeInput('password')} value={input.password} placeholder='Create password' />

      <AppInput type={InputType.CHECKBOX}
        value={termsAgreed} onChange={setTermsAgreed}
        checkboxContent={
          <span style={{ color: '#92929D', fontSize: 12 }}>You confirm that you've read and accepted our <TermsLink to={'/'}>Terms & Conditions</TermsLink> and <TermsLink to={'/'}>Privacy Policy</TermsLink></span>
        } />

      <AppInput type={InputType.CHECKBOX}
        value={exclusivityAgreed} onChange={setExclusivityAgreed}
        wrapperStyle={{ marginTop: -20, marginBottom: 0 }}
        checkboxContent={
          <span style={{ color: '#92929D', fontSize: 12 }}>You submitted <TermsLink to={'/'}>Letters of authorization/exclusivity</TermsLink></span>
        } />
    </OnboardingWrapper>
  )
}