import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';
import SchedulesContext from '../SchedulesContext';
import FloatingActionButton from '../navigation/FloatingActionButton';
import ScheduleItem from '../components/ScheduleItem';

const ScreenWrapper = styled.View`
  height: 100%;
`;

const Schedules = props => {
  return (
    <ScreenWrapper>
      <SchedulesContext.Consumer>
        {({schedules}) => (
          <FlatList
            data={schedules}
            contentContainerStyle={{paddingBottom: 24}}
            renderItem={({item}) => (
              <ScheduleItem key={item.id} schedule={item} />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </SchedulesContext.Consumer>

      <FloatingActionButton navigation={props.navigation} />
    </ScreenWrapper>
  );
};

Schedules.navigationOptions = {title: 'Agendamentos'};

export default Schedules;
