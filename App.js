import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import MainNav from './src/navigation/MainNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider, MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
import {darkTheme, ligthTheme} from './src/common/utilities/Colors';
import {useMaterial3Theme} from '@pchmn/expo-material3-theme';

const App = () => {
  const colorScheme = useColorScheme();
  const {theme} = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? {...MD3DarkTheme, colors: darkTheme.colors}
      : {...MD3LightTheme, colors: ligthTheme.colors};

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
