import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';
import SchedulesContext from '../SchedulesContext';
import FloatingActionButton from '../navigation/FloatingActionButton';
import HomeItem from '../components/HomeItem';

const ScreenWrapper = styled.View`
  height: 100%;
`;

const HomeScreen = props => {
  return (
    <ScreenWrapper>
      <SchedulesContext.Consumer>
        {({schedules}) => (
          <FlatList
            data={schedules}
            contentContainerStyle={{paddingBottom: 24}}
            renderItem={({item}) => <HomeItem key={item.id} schedule={item} />}
            keyExtractor={item => item.id}
          />
        )}
      </SchedulesContext.Consumer>

      <FloatingActionButton navigation={props.navigation} />
    </ScreenWrapper>
  );
};

HomeScreen.navigationOptions = {title: 'Inicio'};

export default HomeScreen;
