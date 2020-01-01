import React ,  { useState } from "react";
import {  
  View,  
  FlatList,
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet
  } from "react-native"; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


function Footer({fclickHandler}){  
  const flatListData = [
    {id: 'id1', name: 'home', icon_name: "home"},
    {id: 'id2', name: 'user', icon_name: "user"}
  ]
  const [currentButton, setCurrentButton] = useState(flatListData[0].name);
  const eleWidth =  Dimensions.get("window").width/flatListData.length;  
  
  const userClick = function(clickInfo){
    console.log("=====>> 111", clickInfo)
    if (clickInfo != currentButton){
      fclickHandler(clickInfo)
      setCurrentButton(clickInfo)
    }
  }

  for (let flatItem of flatListData){
    if (flatItem.name == currentButton){
      flatItem.color = 'grey';
    } else {
      flatItem.color = 'black';
    }
  }

  return (
    <View style={styles.footer}>
      <FlatList  style={styles.flatlist_ele}
        data = {flatListData}
        renderItem = {({item}) => {         
          return <View style={styles.footer_ele} width={eleWidth}>
            <TouchableOpacity onPress={(evt)=>{userClick(item.name)}}>
              <FontAwesomeIcon icon={item.icon_name} size={ 32 } color={item.color}/>
            </TouchableOpacity>
          </View>
        }}
        keyExtractor = {(item) =>item.id}
        horizontal = {true}
      />
    </View>
)}
const styles = StyleSheet.create({ 
  footer: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer_ele: {    
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },

  flatlist_ele: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width
  }
});

export default Footer;