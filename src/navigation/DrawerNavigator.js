import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeStack from './HomeStack';
import SchedulesStack from './SchedulesStack';

import CustomDrawerContentComponent from './CustomDrawerContentComponent';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeStack,
    Schedules: SchedulesStack,
  },
  {
    contentComponent: CustomDrawerContentComponent,
  },
);

export default DrawerNavigator;
