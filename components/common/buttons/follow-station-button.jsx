import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { getOrCreate } from '../../../lib/services/ripple-api';

const FollowButton = styled(Button)`
  color: white;
  border-color: white;

  &:hover {
    color: #ef5350;
    border-color: #ef5350;
  }
`;

export default class FollowStationButton extends Component {
  state = { following: false, hover: false, loading: false };

  follow = async () => {
    if (this.props.canFollow) {
      this.setState({ loading: true });
      const ripple = await getOrCreate();
      await ripple.followStation(this.props.slug);
      this.setState({ loading: false, following: true });
    }
  };

  unfollow = async () => {
    if (this.props.canFollow) {
      this.setState({ loading: true });
      const ripple = await getOrCreate();
      await ripple.unfollowStation(this.props.slug);
      this.setState({ loading: false, following: false });
    }
  };

  async componentDidMount() {
    const { slug, canFollow } = this.props;
    if (canFollow) {
      this.setState({ loading: true });
      const ripple = await getOrCreate();
      const { following } = await ripple.isFollowingStation(slug);
      this.setState({ loading: false, following });
    }
  }

  render() {
    const { loading, following, hover } = this.state;
    const { canFollow, style, component, size } = this.props;
    if (component) {
      return React.cloneElement(component, {
        style,
        loading,
        size: size || 'default',
        disabled: !canFollow,
        ghost: true,
        type: 'default',
        icon: following
          ? hover
            ? 'minus-circle'
            : 'check-circle'
          : 'plus-circle',
        children: following
          ? hover
            ? 'Unfollow'
            : 'Following'
          : loading
          ? 'Loading'
          : 'Follow',
        onClick: following ? this.unfollow : this.follow,
        onMouseEnter: () => this.setState({ hover: true }),
        onMouseLeave: () => this.setState({ hover: false })
      });
    }
    return (
      <FollowButton
        type="default"
        ghost
        size={size || 'default'}
        disabled={!canFollow}
        icon={
          following ? (hover ? 'minus-circle' : 'check-circle') : 'plus-circle'
        }
        loading={loading}
        style={style}
        onClick={following ? this.unfollow : this.follow}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {following
          ? hover
            ? 'Unfollow'
            : 'Following'
          : loading
          ? 'Loading'
          : 'Follow'}
      </FollowButton>
    );
  }
}
