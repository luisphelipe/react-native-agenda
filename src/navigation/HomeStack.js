import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import defaultNavigationOptions from './defaultNavigationOptions';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions,
  },
);

HomeStack.navigationOptions = {
  title: 'Inicio',
};

export default HomeStack;
