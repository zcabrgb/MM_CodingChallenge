import * as React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';

export interface IPopoverProps {
  id?: number;
  history: Array<Object>;
}

const list = (history: any) => {
  return history.map((d: any) => (
    <ListGroup.Item>
      {d.start.slice(11, 20) + '-' + d.end.slice(11, 20) + ' ' + d.state}
    </ListGroup.Item>
  ));
};

function isEmpty(obj: Object) {
  return Object.keys(obj).length === 0;
}

const popover = (history: any) => (
  <Popover id="popover-basic">
    <Popover.Title as="h3">History</Popover.Title>
    <Popover.Content>
      <ListGroup>{isEmpty(history) ? 'Problem' : list(history)}</ListGroup>
    </Popover.Content>
  </Popover>
);

export const PopoverC: React.FC<IPopoverProps> = ({id, history}) => (
  <OverlayTrigger
    trigger="click"
    placement="right"
    overlay={popover(history ? history : {})}
  >
    <Button variant="success">machine history</Button>
  </OverlayTrigger>
);
