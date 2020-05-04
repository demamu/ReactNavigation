// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons';

import About from 'components/About';
import CoursesList from 'components/CoursesList';
import CourseDetails from 'components/CourseDetails';
import AddReview from 'components/AddReview';


const BottomTabs = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="COURSES_LIST" component={CoursesList} options={{title:'Course List',headerShown:false}}/>
    <Stack.Screen name="COURSE_DETAILS" component={CourseDetails} options={{title:'Course Details'}}/>
    <Stack.Screen name="ADD_REVIEW" component={AddReview} options={{title:'Add Review'}}/>
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="Home" component={StackNavigator} 
         options={{
           tabBarIcon:({color}) => <MaterialCommunityIcons name = 'home' color={color} size={26}/>
         }}
        />
        <BottomTabs.Screen name="About" component={About}
        options={{
          tabBarIcon:({color}) => <MaterialCommunityIcons name = 'account' color={color} size={26}/>
        }}
        
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
