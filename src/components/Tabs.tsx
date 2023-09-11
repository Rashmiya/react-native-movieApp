import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movie from '../pages/Movie';
import TvShow from '../pages/TvShow';
import React from 'react';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movie} />
      <Tab.Screen name="TVShows" component={TvShow} />
    </Tab.Navigator>
  );
}
export default MyTabs;
