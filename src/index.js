import React, {useState, useEffect} from 'react';
import AppContainer from './navigation';
import dummyData from './dummyData';
import SchedulesContext from './SchedulesContext';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  console.disableYellowBox = true;
  const [schedules, setSchedules] = useState([]);

  // get data from local storage
  useEffect(() => {
    (async () => {
      try {
        const data = await AsyncStorage.getItem('@schedules');
        // const data = [];
        setSchedules(JSON.parse(data));
      } catch (e) {
        console.log(`error while fetching local storage schedules`);
      }
    })();
  }, []);

  const createSchedule = data => {
    schedulesCopy = schedules ? JSON.parse(JSON.stringify(schedules)) : [];
    data.id = `${Math.floor(Date.now() / 1000)}`;
    schedulesCopy.push(data);
    setSchedules(schedulesCopy);

    (async () => {
      try {
        await AsyncStorage.setItem('@schedules', JSON.stringify(schedulesCopy));
      } catch (e) {
        console.log(`error while setting local storage schedules`);
      }
    })();
  };

  return (
    <SchedulesContext.Provider value={{schedules, createSchedule}}>
      <AppContainer />
    </SchedulesContext.Provider>
  );
};

export default App;
