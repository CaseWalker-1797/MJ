import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/appStack/HomeScreen';
import MenuScreen from '../screens/appStack/MenuScreen';
import YourOrderScreen from '../screens/appStack/YourOrderScreen';
import FavoriteScreen from '../screens/appStack/FavoriteScreen';
import {Icon} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

const AppNav = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon
              source={focused ? 'home' : 'home-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: 'Our Menu',
          tabBarIcon: ({color, focused}) => (
            <Icon
              source={
                focused ? 'format-list-bulleted-square' : 'format-list-checkbox'
              }
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={YourOrderScreen}
        options={{
          tabBarLabel: 'Your Orders',
          tabBarIcon: ({color,focused}) => (
            <Icon source={focused?"note-text":"note-text-outline"} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color, focused}) => (
            <Icon
              source={focused ? 'heart' : 'heart-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNav;
