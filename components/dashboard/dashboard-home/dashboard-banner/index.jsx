import React from 'react';
import { Icon, Tag } from 'antd';
import Link from 'next/link';
import RoundButton from '../../../common/buttons/round-button';
import FollowStationButton from '../../../common/buttons/follow-station-button';
import BannerContainer from './banner-container';
import BannerImage from './banner-image';
import BannerCover from './banner-cover';
import FeaturedStationInfoContainer from './featured-station-info-container';

export default ({ station }) => (
  <BannerContainer>
    <BannerImage src={station.imagePath} />
    <BannerCover gradientAmount={station.gradientAmount} />
    <FeaturedStationInfoContainer>
      <Tag color="#333">FEATURED</Tag>
      <h1>{station.name}</h1>
      {station.description ? <h2>{station.description}</h2> : null}
      <Link
        prefetch
        as={`/stations/${station.slug}`}
        href={`/stations?slug=${station.slug}`}
      >
        <RoundButton type="primary">
          Listen <Icon type="arrow-right" />
        </RoundButton>
      </Link>
      <FollowStationButton slug={station.slug} canFollow={true} />
    </FeaturedStationInfoContainer>
  </BannerContainer>
);
