import {createContext} from 'react';
import dummyData from './dummyData.js';

const SchedulesContext = createContext({
  schedules: dummyData.schedules,
  createSchedule: () => {},
});

export default SchedulesContext;
