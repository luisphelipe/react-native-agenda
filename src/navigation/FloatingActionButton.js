import React from 'react';
import {View, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Octicons';
import {NavigationActions} from 'react-navigation';
import {colors} from '../defaults';

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 32,
    color: 'white',
  },
  itemText: {
    fontSize: 24,
  },
  itemTextContainer: {
    top: 5,
    height: 40,
    backgroundColor: 'white',
  },
});

const ButtonIcon = props => {
  return <Icon name="plus" style={styles.actionButtonIcon} />;
};

const FloatingActionButton = ({navigation}) => {
  return (
    <ActionButton
      buttonColor={colors.darkBlue}
      bgColor={colors.transparentBlue}
      renderIcon={ButtonIcon}>
      <ActionButton.Item
        buttonColor={colors.darkBlue}
        title="Criar agendamento"
        textStyle={styles.itemText}
        textContainerStyle={styles.itemTextContainer}
        onPress={() => {
          if (navigation.state.routeName == 'Schedules') {
            navigation.navigate('SchedulesCreate');
          } else {
            navigation.navigate(
              'Schedules',
              {},
              NavigationActions.navigate({routeName: 'SchedulesCreate'}),
            );
          }
        }}>
        <Icon name="book" style={styles.actionButtonIcon} />
      </ActionButton.Item>
    </ActionButton>
  );
};

export default FloatingActionButton;
