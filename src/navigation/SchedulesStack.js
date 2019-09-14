import {createStackNavigator} from 'react-navigation-stack';
import SchedulesScreen from '../screens/SchedulesScreen';
import SchedulesCreateScreen from '../screens/SchedulesCreateScreen';
import defaultNavigationOptions from './defaultNavigationOptions';

const SchedulesStack = createStackNavigator(
  {
    Schedules: SchedulesScreen,
    SchedulesCreate: SchedulesCreateScreen,
  },
  {defaultNavigationOptions},
);

SchedulesStack.navigationOptions = {
  title: 'Agendamentos',
};

export default SchedulesStack;
