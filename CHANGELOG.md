# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.6.0] - 2019-03-30

### Added

- Progress bar when changing routes
- Landing page now has banner with error or success messages if needed
- Add higher order components for `withUser` and `withDashboardMenu`

### Changed

- Navbar now shows current username

## [0.5.0] - 2019-03-30

### Added

- Added Stations page

## [0.4.0] - 2019-03-28

### Added

- Added dashboard home after migrating to next.js

## [0.3.0] - 2019-03-28

### Changed

- Migrate to server side rendering using next.js from create-react-app

## [0.2.0] - 2019-03-20

### Added

- Dashboard homepage with featured stations

## [0.1.3] - 2019-03-16

### Fixed

- Landing page no longer has horizontal overflow
- Landing page sign up box circle position fixed

### Added

- Css for webkit scrollbars

## [0.1.2] - 2019-03-02

### Added

- Added Landing page to show when not logged in
- Added basic redirect to empty dashboard page when logged in

## [0.1.1] - 2019-02-27

### Added

- Added `docker-compose.yaml` to configure other ripple services to start locally for a better development experience
- Added `README.md` and `CHANGELOG.md`

## [0.1.0] - 2019-02-16

### Added

- Configuration for Travis CI to run and build production docker image on tagged commits
