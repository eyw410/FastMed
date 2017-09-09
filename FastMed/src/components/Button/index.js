import React, { Component } from 'react'
import {
	TouchableOpacity,
	View,
	Text,
} from 'react-native'
import styles from './styles'

export default class Button extends Component  {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<View style={styles.container}>
					<Text>
						{this.props.text}
					</Text>
				</View>
			</TouchableOpacity>
		)
	}
}