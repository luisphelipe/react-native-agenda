import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import {colors} from '../defaults';

const View = styled.View`
  margin-left: 16;
  margin-right: 16;
`;

export default props => {
  return {
    headerStyle: {
      backgroundColor: colors.darkBlue,
    },
    headerTintColor: colors.yellow,
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: 24,
    },
    headerLeft: (
      <View>
        <TouchableOpacity onPress={props.navigation.toggleDrawer}>
          <Icon name="grabber" color={colors.yellow} size={32} />
        </TouchableOpacity>
      </View>
    ),
    headerRight: <View />,
  };
};
