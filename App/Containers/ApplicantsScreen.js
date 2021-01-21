import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../Components/Header';
import DataActions from '../Redux/DataRedux';
import {connect} from 'react-redux';
import {Images} from '../Themes';

// Styles
import styles from './Styles/ApplicantsScreenStyles';

class ApplicantsScreen extends Component {
  render() {
    const {
      data,
      selectedRestaurant,
      selectCandidate,
      navigation,
      viewed,
    } = this.props;
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView style={{backgroundColor: '#71ba84'}} />
          <Header title={'Restaurants'} back={() => navigation.goBack()} />
          <Text style={styles.heading}>
            <Text style={styles.name}>{selectedRestaurant} </Text>- List of
            Applicants
          </Text>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => [
                  selectCandidate(item),
                  navigation.navigate('FormScreen'),
                ]}>
                <View style={styles.item}>
                  <Text style={styles.title}>
                    {item.form_response.answers[0].text}{' '}
                    {item.form_response.answers[1].text}
                    <Text style={{color: '#606060'}}>
                      {viewed.includes(item.id) ? ' - viewed' : null}
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        <SafeAreaView />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data.data.filter(
      (item) => item.restaurant.label == state.data.selectedRestaurant,
    ),
    selectedRestaurant: state.data.selectedRestaurant,
    viewed: state.data.viewed,
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantsScreen);
