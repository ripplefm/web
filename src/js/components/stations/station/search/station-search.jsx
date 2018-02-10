import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Select } from 'antd';
import SearchContainer from './station-search-container';
import SearchResultsContainer from './station-search-results-container';
import SearchResult from './search-result';
import { setProvider, search } from '../../../../actions/search-actions';
import { addTrackToQueue } from '../../../../actions/station-queue-actions';

const mapStateToProps = state => {
  return {
    results: state.search.results,
    provider: state.search.provider,
    loading: state.search.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setProvider: p => dispatch(setProvider(p)),
    search: (p, q) => dispatch(search(p, q)),
    addTrackToQueue: t => dispatch(addTrackToQueue(t))
  };
};

class Search extends Component {
  state = { query: '', searchTimeout: undefined };

  onInputChange = e => {
    this.setState({ query: e.target.value }, () => {
      if (this.state.searchTimeout) {
        clearTimeout(this.state.searchTimeout);
      }
      const timeout = setTimeout(
        () => this.props.search(this.props.provider, this.state.query),
        150
      );
      this.setState({ searchTimeout: timeout });
    });
  };

  onSelectChange = provider => this.props.setProvider(provider);

  renderProviders = provider => (
    <Select
      value={provider}
      onChange={this.onSelectChange}
      style={{ width: '120px' }}
    >
      <Select.Option value="YouTube">YouTube</Select.Option>
      <Select.Option value="SoundCloud">SoundCloud</Select.Option>
    </Select>
  );

  render() {
    const { query } = this.state;
    const { results, provider, loading, addTrackToQueue } = this.props;

    return (
      <SearchContainer>
        <Form style={{ width: '95%' }} onSubmit={e => e.preventDefault()}>
          <Form.Item style={{ marginBottom: '0px' }}>
            <Input
              id="search"
              value={query}
              addonAfter={this.renderProviders(provider)}
              onChange={this.onInputChange}
              placeholder={`Search ${provider}`}
            />
          </Form.Item>
        </Form>
        <SearchResultsContainer>
          {loading ? (
            <h3>Loading</h3>
          ) : (
            results.map(track => (
              <SearchResult
                key={track.url}
                track={track}
                onAddToQueue={addTrackToQueue}
              />
            ))
          )}
        </SearchResultsContainer>
      </SearchContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
