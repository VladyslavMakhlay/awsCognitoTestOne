import React, {useContext, useEffect} from 'react';
import {Button} from 'react-native';
import {Page} from '../components/page';
import {routes} from '../constants';
import {NativeAuthContext} from '../sh-universal-user-auth/native';
import {Divider} from '../components/divider';
import Btn from '../components/btn';
import {asyncActions} from '../sh-universal-user-auth/native/constants';
import withAuth from '../components/withAuth';

export const HomeScreen = withAuth(({navigation}) => {
  const {loginWithGoogle, checkSession, checkLoadingById} = useContext(
    NativeAuthContext.context,
  );

  useEffect(() => {
    checkSession();
  }, []);

  return (
    // <Page navigation={navigation}>
    <Page>
      <Button
        title="Passwordless login"
        onPress={() => navigation.navigate(routes.signIn)}
      />
      <Divider />
      <Btn
        isLoading={checkLoadingById(asyncActions.loginViaGoogle)}
        title="Sign in with google"
        color="red"
        onPress={loginWithGoogle}
      />
    </Page>
  );
});
