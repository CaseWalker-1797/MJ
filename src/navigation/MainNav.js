import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNav from './AppNav';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppNav"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="AppNav" component={AppNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
