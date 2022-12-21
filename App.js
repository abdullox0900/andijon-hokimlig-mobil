import * as React from 'react';
import MainContainer from './Components/Navigation/MainContainer';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { PostNavigatin } from './Components/Navigation/Navigation';

function App() {
  return (
    <>
      <MainContainer />
      <StatusBar backgroundColor='#0B0B92' barStyle='light-content' />
    </>
  );
}

export default App;