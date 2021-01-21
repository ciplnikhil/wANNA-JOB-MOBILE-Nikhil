import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles/HeaderStyles';

export default class Header extends PureComponent {
  render() {
      return(
        <TouchableOpacity onPress={() => this.props.back()}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{`< ${this.props.title}`}</Text>
          </View>
        </TouchableOpacity>)
  }
}
