import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {colors} from '../defaults';

const ItemWrapper = styled.View`
  margin: 16px 16px 0px;
  padding: 0 8px;
`;

const ItemHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ItemSubHeader = styled.View`
  margin-bottom: 12px;
`;

const ItemDescription = styled.View``;

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

const ScheduleDescription = styled.Text`
  font-size: 15px;
  color: ${colors.lightBlue};
`;

const HomeItem = ({schedule}) => {
  const formattedDate = moment(schedule.dateTime).format('DD/MM HH:mm');
  return (
    <ItemWrapper>
      <ItemHeader>
        <ClientName>{schedule.clientName}</ClientName>
        <ServiceName>{schedule.service}</ServiceName>
      </ItemHeader>
      <ItemSubHeader>
        <ScheduleDate>{formattedDate}</ScheduleDate>
      </ItemSubHeader>
      <ItemDescription>
        <ScheduleDescription>{schedule.description}</ScheduleDescription>
      </ItemDescription>
    </ItemWrapper>
  );
};

export default HomeItem;
