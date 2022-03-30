import React, { useEffect, useReducer, useState, useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GeneralRoutes, AdminRoutes } from 'shared/Routes';
import { Login } from 'pages/onboarding/Login';
import ObjectHash from 'object-hash';
// @ts-ignore
import 'jquery';
import { useApolloClient } from 'react-apollo';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/css/global.css'
import { authReducer, AuthDefaultState, AuthActionTypes, IAuthContext, AuthContext, CurrentUserProvider } from 'shared/Authentication';
import { setLocalToken, clearLocalToken, getLocalToken, getCurrentUser, setCurrentUser } from 'shared/Utilities';
import { isEmpty } from 'lodash';
import { AdminRouter } from 'pages/admin/AdminRouter';
import { Register } from 'pages/onboarding/Register';
import { Dashboard } from 'pages/dashboard/dashboard';
import { PendingVerification } from 'pages/onboarding/pendingVerification';
import { AddressEntry } from 'pages/onboarding/addressEntry';


interface IProps {
  match?: any;
}

export const App: React.FC<IProps> = ({ match }: IProps) => {
  const [authState, authDispatch] = useReducer(authReducer, AuthDefaultState);
  const [currentUserRefreshTimestamp, setCurrentUserRefreshTimestamp] = useState<number>();
  const apolloClient = useApolloClient();

  useEffect(() => {
    $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
    });
  }, []);

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        console.log("Checking user token");
        const token = getLocalToken();
        const currentUser = getCurrentUser();

        if (isEmpty(token) || isEmpty(currentUser)) {
          console.log("Token or user empty, triggering signout");
          authDispatch({ type: AuthActionTypes.SIGN_OUT });
        }

        console.log("Token/user", token, currentUser);
        authDispatch({ type: AuthActionTypes.SIGN_IN, payload: { token, currentUser } });
      } catch (e) {
        authDispatch({ type: AuthActionTypes.SIGN_OUT });
      }
    };
    checkUserToken().catch(console.log);
  }, []);

  const authContext = useMemo<IAuthContext>(
    () => ({
      signIn: async (token, currentUser) => {
        console.log("Setting access token", token);
        setLocalToken(token);
        setCurrentUser(currentUser);
        authDispatch({ type: AuthActionTypes.SIGN_IN, payload: { token, currentUser } });
      },
      signOut: async () => {
        console.log("Signing out, removing access token");
        await apolloClient.clearStore();
        clearLocalToken();
        authDispatch({ type: AuthActionTypes.SIGN_OUT });
      },
      currentUser: authState.currentUser,
      refreshCurrentUser: () => {
        console.log("Attempting to refresh current user");
        setCurrentUserRefreshTimestamp(new Date().getTime());
      }
    }), [authState.token, ObjectHash(authState.currentUser ?? {})],
  );

  if (authState.isLoading === true) {
    return <span />;
  }

  console.log(authState?.currentUser?.admin, authState?.currentUser?.verified, authState.currentUser,);

  return (
    <AuthContext.Provider value={authContext}>
      <CurrentUserProvider
        token={authState.token}
        currentUserRefreshTimestamp={currentUserRefreshTimestamp}
      />
      <Switch>
        {!!authState.token && !!authState.currentUser ?
          <Switch>
            <Route path={GeneralRoutes.LOGIN} component={Login} />

            {!!authState.currentUser.admin &&
              <Route path={AdminRoutes.HOME} component={AdminRouter} />
            }
            {(!!authState.currentUser.verified && authState.currentUser.addresses.some(item => !!item.verified)) ?
              <Switch>
                <Route path={GeneralRoutes.DASHBOARD} component={Dashboard} />
                <Redirect to={GeneralRoutes.DASHBOARD} />
              </Switch>
              : undefined
            }

            {authState.currentUser.addresses.length === 0 && <Route path={GeneralRoutes.ADDRESS_ENTRY} component={AddressEntry} />}
            <Route path={GeneralRoutes.PENDING_VERIFICATION} component={PendingVerification} />
            <Redirect to={authState.currentUser.addresses.length > 0 ? GeneralRoutes.PENDING_VERIFICATION : GeneralRoutes.ADDRESS_ENTRY} />
          </Switch>
          :
          <Switch>
            <Route path={GeneralRoutes.LOGIN} component={Login} />
            <Route path={GeneralRoutes.REGISTER} component={Register} />
            <Redirect to={GeneralRoutes.LOGIN} />
          </Switch>
        }
      </Switch>
    </AuthContext.Provider>
  );
}
