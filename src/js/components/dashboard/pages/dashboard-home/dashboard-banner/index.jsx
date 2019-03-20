import React, { Component } from 'react';
import { Button, Icon, Tag } from 'antd';
import featuredStations from '../../../../../../data/featured-stations.json';
import ripple from '../../../../../services/ripple-api';
import RoundButton from '../../../../common/round-button';
import BannerContainer from './banner-container';
import BannerImage from './banner-image';
import BannerCover from './banner-cover';
import FeaturedStationInfoContainer from './featured-station-container';

export default class DashboardBanner extends Component {
  state = { following: false, loading: true, hover: false, station: null };

  async componentDidMount() {
    const station =
      featuredStations[parseInt(Math.random() * featuredStations.length, 10)];
    this.setState({ station });
    const { following } = await ripple.isFollowingStation(station.slug);
    this.setState({ following, loading: false });
  }

  follow = async () => {
    this.setState({ loading: true });
    await ripple.followStation(this.state.station.slug);
    this.setState({ loading: false, following: true });
  };

  unfollow = async () => {
    this.setState({ loading: true });
    await ripple.unfollowStation(this.state.station.slug);
    this.setState({ loading: false, following: false });
  };

  render() {
    const { following, loading, hover, station } = this.state;
    if (station === null) {
      return <h1>loading</h1>;
    }
    return (
      <BannerContainer>
        <BannerImage src={station.imagePath} />
        <BannerCover gradientAmount={station.gradientAmount} />
        <FeaturedStationInfoContainer>
          <Tag color="#333">FEATURED</Tag>
          <h1>{station.name}</h1>
          {station.description ? <h2>{station.description}</h2> : null}
          <RoundButton
            type="primary"
            size="large"
            onClick={() => (window.location.href = `/stations/${station.slug}`)}
          >
            Listen <Icon type="arrow-right" />
          </RoundButton>
          <Button
            type="default"
            ghost
            size="large"
            icon={
              following
                ? hover
                  ? 'minus-circle'
                  : 'check-circle'
                : 'plus-circle'
            }
            loading={loading}
            style={{ textShadow: '1px 1px black' }}
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
          </Button>
        </FeaturedStationInfoContainer>
      </BannerContainer>
    );
  }
}
