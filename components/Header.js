import React from "react";
import {  
  View,
  Text ,
  TouchableOpacity,
  StyleSheet
  } from "react-native"; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
function Header({onLeftPressHandler, isShowLeft}){
  let menuColor = null;
  if (isShowLeft){
    menuColor = 'grey'
  }
  return (
   <View style={styles.header}>
    <View style={styles.header_undersystem}>
      <TouchableOpacity  style={styles.header_undersystem_left} onPress={onLeftPressHandler}>
        <FontAwesomeIcon icon={'bars'} size={ 32 } color={menuColor}/>
      </TouchableOpacity >
      
      <Text></Text>
      <View style={styles.header_undersystem_right}>
      <Text></Text>
      </View>
      
    </View>        
  </View>)
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header_undersystem:{    
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingTop: "4%",
    paddingRight: 5,
  },

  header_undersystem_left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    
  },

  header_undersystem_right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})
export default Header