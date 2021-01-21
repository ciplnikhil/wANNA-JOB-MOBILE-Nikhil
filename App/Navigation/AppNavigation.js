import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen';
import ApplicantsScreen from '../Containers/ApplicantsScreen';
import FormScreen from '../Containers/FormScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: {screen: LaunchScreen},
    ApplicantsScreen: {screen: ApplicantsScreen},
    FormScreen: {screen: FormScreen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(PrimaryNav);
