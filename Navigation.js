import { createStackNavigator } from 'react-navigation';
// import { LandingPage } from './components';
import LandingPage from './components/LandingPage';

const RootNavigator = createStackNavigator(
  {
    LandingPage: {
      screen: LandingPage,
      navigationOptions: {
        title: 'Score It'
      }
    }
  }, {
    initialRouteName: 'LandingPage'
  }
)

export default RootNavigator;