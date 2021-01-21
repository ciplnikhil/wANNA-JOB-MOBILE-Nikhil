import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import DataActions from '../Redux/DataRedux';
import {connect} from 'react-redux';
const data = require('../Constants/data.json');
import {Images} from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

class LaunchScreen extends Component {
  componentDidMount() {
    this.props.setData(data);
  }
  render() {
    const {restaurants, selectRestaurant, navigation} = this.props;
    console.log(this.props);
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView style={{backgroundColor: '#71ba84'}}/>
          <View style={{flex: 1}}>
            <Text style={styles.heading}>List of Restaurants</Text>
            <FlatList
              data={restaurants}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => [
                    selectRestaurant(item),
                    navigation.navigate('ApplicantsScreen'),
                  ]}>
                  <View style={styles.item}>
                    <Text style={styles.title}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            </View>
        <SafeAreaView />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.data.restaurants,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
