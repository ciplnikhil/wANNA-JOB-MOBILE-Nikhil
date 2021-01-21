import React, {PureComponent} from 'react';
import {Text, Image} from 'react-native';
import styles from './Styles/AnswerStyles';

export default class Answer extends PureComponent {
  render() {
    const {data} = this.props;
    switch (data.field.type) {
      default:
        return <Text style={styles.answer}>{data.text}</Text>;
      case 'multiple_choice':
        return (
          <Text style={styles.answer}>
            {data.choice ? data.choice.label : data.choices.labels[0]}
          </Text>
        );
      case 'email':
      case 'phone_number':
      case 'date':
        return <Text style={styles.answer}>{data[data.field.type]}</Text>;
      case 'file_upload':
        if (data.field.ref == 'application_profile_picture')
          return (
            <Image
              source={{uri: data.file_url}}
              resizeMode="contain"
              style={styles.image}
            />
          );
        else return <Text style={styles.answer}>{data.file_url}</Text>;
    }
  }
}
