import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import Button from '../../components/Button'
import Map from '../../components/Map'

export default class HomePage extends Component {
  onClick = () => {
    console.log('whats up fam')
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Button 
          text='Next Page'
          onPress={this.onClick}
        />
        <Map />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});