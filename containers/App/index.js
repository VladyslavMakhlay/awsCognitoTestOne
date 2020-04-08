/**
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {NativeAuthContext} from '../../sh-universal-user-auth/native';
import AppContainer from '../AppContainer';
import {isMountedRef, navigationRef} from './RootNavigation';

const App = () => {
  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  console.disableYellowBox = true; //disable warns

  return (
    <NativeAuthContext>
      <NavigationContainer ref={navigationRef}>
        <AppContainer />
      </NavigationContainer>
    </NativeAuthContext>
  );
};

export default App;
