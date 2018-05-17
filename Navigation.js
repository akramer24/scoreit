import { createStackNavigator } from 'react-navigation';
// import { LandingPage } from './components';
import {LandingPage, UserPage} from './components';

const RootNavigator = createStackNavigator(
  {
    LandingPage: {
      screen: LandingPage,
      navigationOptions: {
        title: 'Score It'
      }
    },
    UserPage: {
      screen: UserPage
    }
  }, {
    initialRouteName: 'LandingPage'
  }
)

export default RootNavigator;