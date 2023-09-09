import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movie from './Movie';
import TvShow from './TvShow';
import React from 'react';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movie" component={Movie} />
      <Tab.Screen name="TvShow" component={TvShow} />
    </Tab.Navigator>
  );
}
export default MyTabs;
