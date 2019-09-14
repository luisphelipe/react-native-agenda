import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import SafeAreaView from 'react-native-safe-area-view';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

import {colors} from '../defaults';

const ScrollView = styled.ScrollView`
  background-color: ${colors.darkestBlue};
`;

const HeaderView = styled.View`
  background-color: ${colors.drawerBlue};
`;

const HeaderText = styled.Text`
  font-size: 24px;
  margin-left: 16px;
  margin-top: 32px;
  margin-bottom: 32px;
  color: ${colors.yellow};
`;

const contentOptions = {
  activeTintColor: colors.yellow,
  inactiveTintColor: colors.white,
  inactiveBackgroundColor: colors.darkestBlue,
  activeBackgroundColor: colors.darkestBlue,
  labelStyle: {
    fontWeight: '500',
    fontSize: 18,
  },
};

const DrawerHeader = () => {
  return (
    <HeaderView>
      <HeaderText>Agenda</HeaderText>
    </HeaderView>
  );
};

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <DrawerHeader />
      <DrawerNavigatorItems {...props} {...contentOptions} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerContentComponent;
