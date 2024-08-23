import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import ResolutionCenterScreen from '../views/ResolutionCenterScreen';
import SupportTeamChatScreen from '../views/SupportTeamChatScreen';
import AddOnServiceScreen from '../views/AddOnServiceScreen';
import PickupTaskScreen from '../views/PickupTaskScreen';
import DropoffTaskScreen from '../views/DropoffTaskScreen';
import OptimizeRouteScreen from '../views/OptimizeRouteScreen';


const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
          header:()=>null
          
        }}
    >
      {/* <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} /> */}
       <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="ResolutionCenterScreen" component={ResolutionCenterScreen} />
       <Stack.Screen name="SupportTeamChatScreen" component={SupportTeamChatScreen} />
       <Stack.Screen name="AddOnServiceScreen" component={AddOnServiceScreen} />
       <Stack.Screen name="PickupTaskScreen" component={PickupTaskScreen} />
       <Stack.Screen name="DropoffTaskScreen" component={DropoffTaskScreen} />
       
     
    </Stack.Navigator>
  );
}

export default StackNavigator;
