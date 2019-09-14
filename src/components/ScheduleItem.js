import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {colors} from '../defaults';

const ItemWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 16px 16px 0px;
  padding: 0 8px;
`;

const ItemHeader = styled.View``;

const ClientName = styled.Text`
  font-size: 21px;
  color: ${colors.red};
`;

const ServiceName = styled.Text`
  font-size: 18px;
  color: ${colors.darkBlue};
`;

const ScheduleDate = styled.Text`
  font-size: 15px;
  color: ${colors.darkBlue};
`;

const ScheduleItem = ({schedule}) => {
  const formattedDate = moment(schedule.dateTime).format('DD/MM HH:mm');
  return (
    <ItemWrapper>
      <ItemHeader>
        <ClientName>{schedule.clientName}</ClientName>
        <ServiceName>{schedule.service}</ServiceName>
      </ItemHeader>
      <ScheduleDate>{formattedDate}</ScheduleDate>
    </ItemWrapper>
  );
};

export default ScheduleItem;
