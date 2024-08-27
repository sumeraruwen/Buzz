import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet,View } from 'react-native';
import HistoryScreen from '../views/HistoryScreen';
import TripScreen from '../views/TripScreen';
import EarningsScreen from '../views/EarningsScreen';
import SavedTripScreen from '../views/SavedTripScreen';
import OptimizeRouteScreen from '../views/OptimizeRouteScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <View style={styles.container}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconSource;

          switch (route.name) {
            case 'Route':
              iconSource = require('../assets/routeIcon.webp');
              break;
            case 'Trip':
              iconSource = require('../assets/tripIcon.webp');
              break;
            case 'Saved Trip(s)':
              iconSource = require('../assets/savedTripIcon.webp');
              break;
            case 'History':
              iconSource = require('../assets/historyIcon.webp');
              break;
            case 'Earnings':
              iconSource = require('../assets/earningsIcon.webp');
              break;
          }

          return <Image source={iconSource} style={{ width: 29, height: 29, tintColor: color }} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#3D3D3D80',
        tabBarStyle: {
          height: 78, // Increase the height of the tab bar
          paddingBottom: 10, // Adjust padding to center the content
        },
        tabBarLabelStyle: {
          fontSize: 12, // Increase the text size of the tab labels
          fontWeight: '600',
        },
        
        header: () => null,
      })}
    >
      <Tab.Screen name="Route" component={OptimizeRouteScreen} />
      <Tab.Screen name="Trip" component={TripScreen} />
      <Tab.Screen name="Saved Trip(s)" component={SavedTripScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Earnings" component={EarningsScreen} />
    </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000', // Shadow color
          shadowOffset: { width: 0, height: 30 }, // Shadow offset (negative height to cast shadow upwards)
          shadowOpacity: 0.35, // Shadow opacity
          shadowRadius: 3.5, // Shadow radius
          elevation: 5, // Required for Android shadow
  },
});

export default TabNavigator;
