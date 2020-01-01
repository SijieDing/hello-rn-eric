import React from 'react';
import  { StyleSheet, View, SafeAreaView, Dimensions, Text} from 'react-native';
import  AppRoot from './components/AppRoot'
import fontawesome from '@fortawesome/fontawesome'
import { faUser, faHome, faBars} from '@fortawesome/free-solid-svg-icons'



fontawesome.library.add(faHome, faUser, faBars);

export default function App() {  
  return (
    <AppRoot> </AppRoot>
  ) 
}