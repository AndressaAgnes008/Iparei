import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, SafeAreaView, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognize WebSocket',
  'YellowBox has been'
]);

import Navigation from './index';



export default function chamaNavigation() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000'/>
      <NavigationContainer>
        <Navigation /> 
        
       </NavigationContainer>
    </>
    
  );
}
// Login:{
        //     screen: Login,
        //     navigationOptions:{
        //         title: '',

        //         headerStyle: {
        //             backgroundColor: '#DD3A06',
        //             height: 0,
        //         },
        //     },
            
            
        // },