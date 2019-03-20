import React, { Component } from 'react';
import styled from 'react-emotion';
import { Alert, Icon, Input, Select, Steps } from 'antd';
import slugify from 'slugify';
import { PopIn } from '../../../common/animations/pop-in';
import genres from '../../../../../data/genres.json';
import ripple from '../../../../services/ripple-api';
import {
  RadioButtonGroup,
  RadioButton
} from '../../../common/forms/radio-button';
import FloatingButton from '../../../common/floating-button';
import StationSnippetGrid from '../../../common/station-snippet/station-snippet-grid';

const Container = styled.div`
  min-width: calc(100vw - 300px);
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: transform ease-in-out 750ms, opacity linear 500ms;
  transform: translateX(
    ${props => props.step * 100 - props.currentStep * 100}vw
  );
  opacity: ${props => (props.currentStep === props.step ? '1' : '0')};

  @media (max-width: 1200px) {
    transition: transform ease-in-out 750ms, opacity linear 500ms;
    min-width: 100vw;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  clear: both;

  & button {
    margin: 8px;
  }
`;

const GenreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 12px 16px;
  margin: 12px;
  font-weight: bolder;
  color: white;
  text-align: center;
  font-size: 1.25em;
  letter-spacing: 0.05em;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: border-color ease-in-out 100ms;
  color: #ef5350;
  background: #ef53501e;
  border: ${props =>
    props.active === true ? '2px solid #ef5350' : '2px solid #212121'};

  &:hover {
    border: 2px solid ${props => (props.active ? '#ef5350' : '#ef53502e')};
  }
`;

const GenreCheck = styled(Icon)`
  position: absolute;
  top: 0px;
  right: 0px;
  transform: translate(50%, -50%);
  text-shadow: none;
  padding: 4px;
  color: white;
  background: #ef5350;
  border-radius: 50%;
  border: 2px solid #212121;
  animation: ${PopIn} ease-in-out 150ms;
`;

const Genre = ({ active, background, children, onClick }) => (
  <GenreContainer background={background} active={active} onClick={onClick}>
    {children}
    {active === true ? <GenreCheck type="check" /> : null}
  </GenreContainer>
);

const Divider = styled.div`
  display: table;
  font-weight: bolder;
  white-space: nowrap;
  text-align: center;

  &:before,
  &:after {
    position: relative;
    top: 50%;
    width: 50%;
    display: table-cell;
    border-top: 1px solid #ef5350;
    transform: translateY(50%);
    content: '';
  }

  & i {
    color: white;
    font-size: 3em;
    background: #ef5350;
    border-radius: 50%;
    padding: 8px;
    margin: 8px;
  }
`;

export default class MyStations extends Component {
  state = {
    currentStep: 0,
    loading: true,
    validating: false,
    stations: [],
    selectedGenres: [],
    visibility: 'public',
    name: '',
    error: null,
    created: null
  };

  async componentDidMount() {
    const { stations } = await ripple.getCreatedStations();
    this.setState({ loading: false, stations });
  }

  toggleGenre = genre => {
    const { selectedGenres } = this.state;
    const index = selectedGenres.indexOf(genre);
    if (index > -1) {
      selectedGenres.splice(index, 1);
    } else {
      selectedGenres.push(genre);
    }
    this.setState({ selectedGenres });
  };
  isGenreActive = genre => this.state.selectedGenres.indexOf(genre) > -1;

  decrementStep = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep - 1, error: null });
  };

  incrementStep = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep + 1, error: null });
  };

  validateName = async () => {
    const { name, visibility } = this.state;
    if (name.length < 4) {
      this.setState({
        error: 'Name must be 4 or more characters'
      });
      return;
    }
    if (visibility === 'public') {
      this.setState({ validating: true, error: null });
      try {
        console.log(await ripple.getStation(slugify(name.toLowerCase())));
        this.setState({
          validating: false,
          error: 'A station with that name already exists'
        });
      } catch (err) {
        this.setState({ validating: false });
        this.incrementStep();
      }
    } else {
      this.incrementStep();
    }
  };

  onVisibilityChange = visibility => this.setState({ visibility });
  onNameChange = e => this.setState({ name: e.target.value });

  create = async () => {
    const { name, visibility, selectedGenres } = this.state;
    const created = await ripple.createStation(
      name,
      selectedGenres,
      visibility
    );
    this.setState({ created });
    this.incrementStep();
  };

  render() {
    const { loading, stations, currentStep, validating, error } = this.state;
    return (
      <div style={{ position: 'relative' }}>
        <Steps
          size={window.innerWidth <= 768 ? 'small' : 'default'}
          current={currentStep - 1}
          style={{
            width: '100%',
            padding: '24px',
            background: '#19191b',
            transition: 'transform ease-in-out 500ms',
            transform: `translateY(${
              currentStep > 0 && currentStep < 4 ? '0%' : '-100%'
            })`
          }}
        >
          <Steps.Step title="Visibility" />
          <Steps.Step title="Name" />
          <Steps.Step title="Tags" />
        </Steps>

        <Container
          currentStep={currentStep}
          step={0}
          style={{
            justifyContent: 'flex-start',
            paddingTop: '64px'
          }}
        >
          <StationSnippetGrid
            title="My Stations"
            loading={loading}
            stations={stations}
            titleAddon={
              <FloatingButton type="primary" onClick={this.incrementStep}>
                Create Station <Icon type="plus" />
              </FloatingButton>
            }
          />
        </Container>
        <Container currentStep={currentStep} step={1}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h1>Choose your stations visibility:</h1>
            <RadioButtonGroup value="public" onChange={this.onVisibilityChange}>
              <RadioButton
                icon="unlock"
                title="Public"
                desc="Anyone can join your station"
                value="public"
              />
              <RadioButton
                icon="lock"
                title="Private"
                desc="Only people with a link can join your station"
                value="private"
              />
            </RadioButtonGroup>
          </div>
          <ButtonContainer>
            <FloatingButton
              type="default"
              ghost
              onClick={this.decrementStep}
              size="large"
            >
              Cancel
            </FloatingButton>
            <FloatingButton
              type="primary"
              onClick={this.incrementStep}
              size="large"
            >
              Next <Icon type="arrow-right" />
            </FloatingButton>
          </ButtonContainer>
        </Container>
        <Container currentStep={currentStep} step={2}>
          <div style={{ width: '350px ' }}>
            <h1>Choose your stations name:</h1>
            <Input
              size="large"
              style={{ fontSize: '1.8em', height: '40px' }}
              onChange={this.onNameChange}
            />
            {error !== null ? (
              <Alert
                showIcon
                type="error"
                message={error}
                style={{
                  color: '#ef5350',
                  background: '#ef53501e',
                  border: '1px solid #ef5350',
                  marginTop: '16px'
                }}
              />
            ) : null}
          </div>
          <ButtonContainer>
            <FloatingButton
              type="default"
              ghost
              size="large"
              onClick={this.decrementStep}
            >
              Previous
            </FloatingButton>
            <FloatingButton
              type="primary"
              size="large"
              loading={validating}
              onClick={this.validateName}
            >
              Next <Icon type="arrow-right" />
            </FloatingButton>
          </ButtonContainer>
        </Container>
        <Container currentStep={currentStep} step={3}>
          <h1>Select your stations genres and moods:</h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              width: '500px'
            }}
          >
            {genres
              .sort((g1, g2) => (g1.name < g2.name ? -1 : 1))
              .map(genre => (
                <Genre
                  key={genre.value}
                  active={this.isGenreActive(genre.value)}
                  onClick={() => this.toggleGenre(genre.value)}
                >
                  {genre.name}
                </Genre>
              ))}
          </div>
          <h1>Additional tags to help people find your station:</h1>
          <Select
            mode="tags"
            placeholder="tags"
            style={{ width: '100%' }}
            dropdownMenuStyle={{ display: 'none' }}
          />
          <ButtonContainer>
            <FloatingButton
              type="default"
              ghost
              size="large"
              onClick={this.decrementStep}
            >
              Previous
            </FloatingButton>
            <FloatingButton type="primary" size="large" onClick={this.create}>
              Create <Icon type="arrow-right" />
            </FloatingButton>
          </ButtonContainer>
        </Container>
        {this.state.created !== null ? (
          <Container currentStep={currentStep} step={4}>
            <div
              style={{
                background: '#19191b',
                borderRadius: '8px',
                padding: '32px',
                boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)',
                textAlign: 'center'
              }}
            >
              <Divider>
                <Icon type="check" />
              </Divider>
              <h1
                style={{
                  fontWeight: 'bolder',
                  marginBottom: '16px',
                  letterSpacing: '0.025em',
                  color: 'white',
                  marginTop: '24px'
                }}
              >
                Your station has been created!
              </h1>
              <h3
                style={{
                  color: 'white',
                  fontWeight: 'lighter',
                  marginBottom: '16px',
                  padding: '4px 8px'
                }}
              >
                Share the link below for others to join your station and begin
                playing tracks.
              </h3>
              <Input
                id="stationLink"
                size="large"
                readOnly
                addonBefore={<Icon type="link" />}
                value={`${window.location.origin}/stations/${
                  this.state.created.slug
                }`}
              />
              <FloatingButton
                icon="link"
                type="primary"
                ghost
                style={{ marginTop: '8px', marginRight: '4px', float: 'right' }}
                onClick={() => {
                  const sel = window.getSelection();
                  const range = document.createRange();
                  range.selectNodeContents(
                    document.querySelector('#stationLink')
                  );
                  sel.removeAllRanges();
                  sel.addRange(range);
                  document.execCommand('copy');
                  sel.removeAllRanges();
                }}
              >
                Copy Link
              </FloatingButton>
              <ButtonContainer style={{ justifyContent: 'space-between' }}>
                <FloatingButton
                  type="default"
                  ghost
                  onClick={() =>
                    this.setState({
                      currentStep: 0,
                      created: null,
                      visibility: 'public',
                      name: '',
                      selectedGenres: [],
                      tags: []
                    })
                  }
                >
                  Back to my stations
                </FloatingButton>
                <FloatingButton
                  type="primary"
                  onClick={() =>
                    (window.location.href = `/stations/${
                      this.state.created.slug
                    }`)
                  }
                >
                  Go to station <Icon type="arrow-right" />
                </FloatingButton>
              </ButtonContainer>
            </div>
          </Container>
        ) : null}
      </div>
    );
  }
}
