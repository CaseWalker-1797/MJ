import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNav from './AppNav';
import {NavigationContainer} from '@react-navigation/native';
import ProductScreen from '../screens/appStack/ProductScreen';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppNav"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="AppNav" component={AppNav} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
