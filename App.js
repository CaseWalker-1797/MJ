import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import MainNav from './src/navigation/MainNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {lightTheme} from './src/common/utilities/Colors';

const paperTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: lightTheme.colors,
};

const App = () => {
  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <MainNav />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
