import React, {Component, PureComponent} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FormItem from '../Components/FormItem';
import Header from '../Components/Header';
import DataActions from '../Redux/DataRedux';
import {connect} from 'react-redux';
import {Images} from '../Themes';

// Styles
import styles from './Styles/FormScreenStyles';

class FormScreen extends PureComponent {
  render() {
    const {selectedCandidate, navigation, selectedRestaurant} = this.props;
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView style={{backgroundColor: '#71ba84'}} />
          <Header title={'Applicants'} back={() => navigation.goBack()} />
          <Text style={styles.heading}>
            <Text style={styles.name}>{selectedRestaurant} </Text>- Application
            Form
          </Text>
          <FlatList
            data={selectedCandidate.form_response.definition.fields}
            renderItem={({item, index}) => (
              <FormItem
                item={item}
                index={index}
                selectedCandidate={selectedCandidate}
              />
            )}
          />
        <SafeAreaView />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCandidate: state.data.selectedCandidate,
    selectedRestaurant: state.data.selectedRestaurant,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch(DataActions.setData(data));
    },
    selectRestaurant: (data) => {
      dispatch(DataActions.selectRestaurant(data));
    },
    selectCandidate: (data) => {
      dispatch(DataActions.selectCandidate(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen);
