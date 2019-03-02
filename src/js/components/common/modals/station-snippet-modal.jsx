import React from 'react';
import { Modal } from 'antd';
import StationSnippet from '../../common/station-snippet';
import '../../../../css/modals/station-snippet-modal.css';

const StationSnippetModal = ({ station, visible, onJoin, onCancel }) => (
  <Modal
    visible={visible}
    footer={null}
    closable={false}
    wrapClassName="station-snippet-modal"
    bodyStyle={{ padding: '0px' }}
    width="40%"
    onCancel={onCancel}
  >
    <StationSnippet
      expanded="true"
      loading={station === undefined}
      station={station}
      onJoin={() => onJoin(station)}
    />
  </Modal>
);

export default StationSnippetModal;
