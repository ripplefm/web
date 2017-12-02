import React from 'react';
import { Modal } from 'antd';
import RoomSnippet from '../../home/room-snippet';
import '../../../../css/modals/room-snippet-modal.css';

const RoomSnippetModal = ({ room, visible, onJoin, onCancel }) => (
  <Modal
    visible={visible}
    footer={null}
    closable={false}
    wrapClassName="room-snippet-modal"
    bodyStyle={{ padding: '0px' }}
    width="40%"
    onCancel={onCancel}
  >
    <RoomSnippet
      expanded="true"
      loading={room === undefined}
      room={room}
      onJoin={() => onJoin(room)}
    />
  </Modal>
);

export default RoomSnippetModal;
