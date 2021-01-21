import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  heading: {
    fontWeight: 'bold',
    color: '#71ba84',
    letterSpacing: 0.6,
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 15
  },
  name: {
      color: '#6992da'
  }
})