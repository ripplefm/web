import React from 'react';
import { Modal } from 'antd';
import { Global } from '@emotion/core';
import StationSnippet from '../../common/station-snippet';
import styles from '../../styles/modals/station-snippet-modal';

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
    <Global styles={styles} />
    <StationSnippet
      expanded="true"
      loading={station === undefined}
      station={station}
      onJoin={() => onJoin(station)}
    />
  </Modal>
);

export default StationSnippetModal;
