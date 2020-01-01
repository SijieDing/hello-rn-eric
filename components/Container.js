import React, { useState }  from "react";
import {  
  View,
  Text ,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
  } from "react-native"; 
function Container({hideLeftPressHandler, showLeft, showHeader}){
  var lwidth = "0%"
  var lflex = 0
  var mask = null
  if (showLeft){
    lwidth = "50%"
    lflex = 3
    mask = <TouchableOpacity style={styles.container_right_mask} onPress={()=>{hideLeftPressHandler(false)}}
    activeOpacity={0}>            
            </TouchableOpacity>
  }
  
  var containerFlex = 8;
  var containerRender = 
    <View>
      <Text>dsfdsfds</Text>
    </View>
  
  if (!showHeader){
    containerFlex = 10
    containerRender = <SafeAreaView>
      <View>
        <Text>dsfdsfds</Text>
      </View>
    </SafeAreaView>
  }
  return (
    <View style={styles.container} flex={containerFlex}>              
      <View style={styles.container_left} width={lwidth} flex={lflex}>
        <Text>dsfsdfsdfsdfsdfsdf ddfsdfsdf dsfdsfsdfsdf sdfsdfsdf</Text>
      </View>
      <View style={styles.container_right}>
        { containerRender }
        { mask }
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container_left: {
    backgroundColor: 'blue',         
    height: "100%"     ,
    flex: 1, 
  },


  container_right: {
    backgroundColor: 'orange',
    flex: 1,
    height: "100%",
  },

  container_right_mask: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    backgroundColor: 'white', 
  }
})
export default Container
