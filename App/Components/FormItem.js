import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import styles from './Styles/FormItemStyles';
import Answer from './Answer';

export default class FormItem extends PureComponent {
  render() {
    const {selectedCandidate, item, index} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.question}>
          {item.title.replace(
            '{{field:application_firstname}}',
            selectedCandidate.form_response.answers[0].text,
          )}
        </Text>
        <Answer data={selectedCandidate.form_response.answers[index]} />
      </View>
    );
  }
}
