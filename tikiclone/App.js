import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import NotificationScreen from './src/Screens/NotificationScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#157cdb',
          inactiveTintColor: '#262626'
        }}
      >
        <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color}) => {
            return(
              <MaterialIcons name='home' size={26} color={color}/>
            );
          }
        }}
        />
        <Tab.Screen 
        name="Notification" 
        component={NotificationScreen} 
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({color}) => {
            return(
              <MaterialIcons name='notifications-none' size={26} color={color}/>
            );
          }
        }}
        />
        <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({color}) => {
            return(
              <MaterialIcons name='person' size={26} color={color}/>
            );
          }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>  
  );
}

export default App;