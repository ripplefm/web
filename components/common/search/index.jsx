import React, { Component } from 'react';
import { Form, Icon, Input, Select } from 'antd';
import SearchContainer from './result-container';
import ResultsContainer from './results-container';
import SearchResult from './result';
import YouTube from '../../../lib/services/providers/youtube-service';

export default class Search extends Component {
  state = {
    query: '',
    searchTimeout: undefined,
    results: [],
    provider: 'YouTube',
    loading: false
  };

  search = async (provider, query) => {
    if (provider === 'YouTube') {
      this.setState({ loading: false, results: await YouTube.search(query) });
    }
  };

  onInputChange = e => {
    this.setState({ query: e.target.value, loading: true }, () => {
      if (this.state.searchTimeout) {
        clearTimeout(this.state.searchTimeout);
      }
      const timeout = setTimeout(
        () => this.search(this.state.provider, this.state.query),
        150
      );
      this.setState({ searchTimeout: timeout });
    });
  };

  onSelectChange = provider => this.setState({ provider });

  renderProviders = provider => (
    <Select
      value={provider}
      onChange={this.onSelectChange}
      style={{ width: '120px' }}
    >
      <Select.Option value="YouTube">YouTube</Select.Option>
      <Select.Option value="SoundCloud" disabled>
        SoundCloud
      </Select.Option>
    </Select>
  );

  render() {
    const { query, results, provider, loading } = this.state;
    const { onAddToQueue } = this.props;

    return (
      <SearchContainer>
        <Form style={{ width: '95%' }} onSubmit={e => e.preventDefault()}>
          <Form.Item style={{ marginBottom: '0px' }}>
            <Input
              id="search"
              autoComplete="off"
              value={query}
              allowClear
              addonAfter={this.renderProviders(provider)}
              onChange={this.onInputChange}
              placeholder={`Search ${provider}`}
            />
          </Form.Item>
        </Form>
        <ResultsContainer>
          {loading ? (
            <Icon
              style={{
                color: 'white',
                textAlign: 'center',
                width: '100%',
                marginTop: '32px',
                fontSize: '2em'
              }}
              type="loading"
            />
          ) : (
            results.map(track => (
              <SearchResult
                key={track.url}
                track={track}
                onAddToQueue={onAddToQueue}
              />
            ))
          )}
        </ResultsContainer>
      </SearchContainer>
    );
  }
}
