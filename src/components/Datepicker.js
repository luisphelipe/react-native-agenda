import React from 'react';
import DatePicker from 'react-native-datepicker';
import {colors} from '../defaults';

const Datepicker = ({datetime, setDatetime}) => {
  return (
    <DatePicker
      style={{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: colors.lightBlue,
      }}
      date={datetime}
      mode="datetime"
      placeholder="Selecione a Data"
      format="DD/MM/YY HH:mm"
      confirmBtnText="Confirmar"
      cancelBtnText="Cancelar"
      customStyles={{
        placeholderText: {
          width: '100%',
          fontSize: 21,
          color: colors.darkestBlue,
          paddingLeft: 4,
        },
        dateText: {
          width: '100%',
          fontSize: 21,
          color: colors.darkestBlue,
          paddingLeft: 4,
        },
        dateIcon: {
          position: 'absolute',
          right: 0,
          top: 4,
          marginRight: 0,
        },
        dateInput: {
          borderWidth: 0,
          marginRight: 36,
        },
      }}
      onDateChange={date => {
        setDatetime(date);
      }}
    />
  );
};

export default Datepicker;
