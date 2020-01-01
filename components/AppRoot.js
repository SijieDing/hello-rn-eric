import React, {Component} from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import {  
  Dimensions,
  StyleSheet,
  View,
  Text ,
  TouchableOpacity,
  TouchableWithoutFeedback
  } from "react-native"; 
  
export default class AppRoot extends Component {  
  constructor(props) {
    super(props);    
    this.state = {
      showLeft: false,
      showHeader: false
    }
    this.contanerElement = React.createRef;
  }

  onLeftPress(evt){
    console.log("Click the Menu button")
    this.setState({ showLeft: (!this.state.showLeft)});
  }

  hideLeftPress(evt){
    console.log("Cancel Menu click")
    this.setState({ showLeft: false});
  }
  
  footerClickHandler(clickInfo){
    let nextState = {
      showLeft: false
    }
    if (clickInfo=='home'){
      nextState.showHeader = false;
    } else if (clickInfo=='user'){
      nextState.showHeader = true;
    }
    else {}
    this.setState(nextState);
  }

  render() {
    const {showLeft, showHeader} = this.state;    
    var lwidth = "0%"
    var lflex = 0
    var mask = null
    if (showLeft){
      lwidth = "50%"
      lflex = 1
      mask = <TouchableWithoutFeedback style={styles.container_right_mask} onPress={this.onLeftPress.bind(this)}>
             <View style={{flex:1, width:"100%", height:"100%"}}></View>
             </TouchableWithoutFeedback>
    }
    
    var header =  null
    if (showHeader){
      header = <Header onLeftPressHandler={this.onLeftPress.bind(this)} isShowLeft={showLeft}/>
    }
    return (
      <View style={styles.root}>         
          {header}          
          <Container hideLeftPressHandler={this.hideLeftPress.bind(this)} showLeft={showLeft} showHeader={showHeader}/>  
          <Footer fclickHandler={this.footerClickHandler.bind(this)} />
      </View>
    )
  }
}
  
  const styles = StyleSheet.create({
    root: {
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width
    }
  });
  