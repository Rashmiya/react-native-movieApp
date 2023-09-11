import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShowDetails from './src/pages/ShowDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShowDetails"
          component={ShowDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   mainArea:{
//     flex:1,
//     backgroundColor: '#FFFFFF',
//   },
//   headerText:{
//     color:"#000000",
//     textAlign: 'center',
//   }
// });
