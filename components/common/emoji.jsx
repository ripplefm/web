import React from 'react';
import { renderEmoji } from '../../lib/services/emoji-service';

export default ({ type, style = {}, className = '', onClick }) => (
  <div
    className={className}
    style={style}
    onClick={onClick}
    dangerouslySetInnerHTML={{ __html: renderEmoji(`${type}`) }}
  />
);
