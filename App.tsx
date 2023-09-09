import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/components/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
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
