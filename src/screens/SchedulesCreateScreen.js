import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import SchedulesContext from '../SchedulesContext';
import Datepicker from '../components/Datepicker';
import {colors} from '../defaults';

const ScreenWrapper = styled.View`
  padding: 21px;
  height: 100%;
`;

const TextInput = styled.TextInput`
  font-size: 21px;
  color: ${colors.darkestBlue};
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.lightBlue};
  width: 100%;
  color: ${colors.darkestBlue};
`;

const Form = styled.View`
  margin: 16px 0px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.Text`
  padding-left: 4px;
  font-size: 21px;
  color: ${colors.darkestBlue};
  width: 100%;
  color: ${colors.darkestBlue};
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: ${colors.yellow};
`;

const ButtonText = styled.Text`
  align-self: center;
  font-size: 15px;
  color: ${colors.white};
`;

const CreateButton = ({onPress}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>CRIAR</ButtonText>
    </Button>
  );
};

const SchedulesCreateScreen = ({navigation}) => {
  const [clientName, setClientName] = useState('');
  const [datetime, setDatetime] = useState(null);
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');

  return (
    <ScreenWrapper>
      <SchedulesContext.Consumer>
        {({createSchedule}) => (
          <Form>
            <TextInput
              value={clientName}
              placeholderTextColor={colors.darkestBlue}
              onChangeText={text => setClientName(text)}
              placeholder="Nome da Cliente"
            />
            <Datepicker datetime={datetime} setDatetime={setDatetime} />
            <TextInput
              value={service}
              placeholderTextColor={colors.darkestBlue}
              onChangeText={setService}
              placeholder="Procedimento"
            />
            <Text>Descrição:</Text>
            <TextInput
              value={description}
              placeholderTextColor={colors.darkestBlue}
              multiline={true}
              onChangeText={setDescription}
            />

            <CreateButton
              onPress={() => {
                createSchedule({
                  clientName,
                  service,
                  datetime,
                  description,
                });

                navigation.navigate('Schedules');
              }}
            />
          </Form>
        )}
      </SchedulesContext.Consumer>
    </ScreenWrapper>
  );
};

SchedulesCreateScreen.navigationOptions = {title: 'Novo Agendamento'};

export default SchedulesCreateScreen;
