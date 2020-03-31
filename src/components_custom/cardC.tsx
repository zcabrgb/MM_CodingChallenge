import * as React from 'react';
import Card from 'react-bootstrap/Card';
import {PopoverC} from './popoverC';

export interface ICardProps {
  id?: number;
  name: string;
  type: string;
  sensorID: string;
  imageUrl?: string;
  thumbURL: string;
  activeHours?: number;
  idleHours?: number;
  group: string;
  history: Array<Object>;
}

export const CardC: React.FC<ICardProps> = ({
  id,
  name,
  type,
  sensorID,
  imageUrl,
  thumbURL,
  activeHours,
  idleHours,
  group,
  history
}) => (
  <Card style={{width: '11rem'}}>
    <Card.Img variant="top" src={thumbURL} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <p>{'Type: ' + type}</p>
        <p>{'SensorID: ' + sensorID}</p>
        <p>{'Group: ' + group}</p>
        <p>{'Active hours: ' + activeHours}</p>
        <p>{'Idle hours: ' + idleHours}</p>
      </Card.Text>
    </Card.Body>
    <PopoverC history={history}></PopoverC>
  </Card>
);
