import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Image} from 'react-native';
import Images from './Images';

class App extends Component {
  state = {
    headNumber: 1,
    bodyNumber: 2,
    legsNumber: 3,
  };


  onPressHead = () => {
    const newHeadNumber = 1+(this.state.headNumber + 1)%3;
    this.setState({
      headNumber: newHeadNumber,
    })
  }

  onPressBody = () => {
    const newBodyNumber = 1+(this.state.bodyNumber + 1)%3;
    this.setState({
      bodyNumber: newBodyNumber,
    })
  }

  onPressLegs = () => {
    const newLegsNumber = 1+(this.state.legsNumber + 1)%3;
    this.setState({
      legsNumber: newLegsNumber,
    })
  }


  render() {

    const head = Images.GetImage(
      `${this.state.headNumber}.png`,
    );
    
    const body = Images.GetImage(
      `${this.state.bodyNumber}.png`,
    );

    const legs = Images.GetImage(
      `${this.state.legsNumber}.png`,
    );

    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.img} onPress={this.onPressHead}>
          <Image  source={head} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.img} onPress={this.onPressBody}>
          <Image source={body} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.img} onPress={this.onPressLegs}>
          <Image  source={legs} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  img: {
    flex: 1,
  },
});

export default App;