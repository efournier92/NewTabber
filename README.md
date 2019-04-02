# ![NewTabber]()

## Table of Contents
- [Overview](#overview)
- [Demo](#demo)
- [Development Philosophy](#development-philosophy)
- [Stack](#stack)
- [Use As `New Tab` Page](#use-as-new-tab-page)
- [Configure](#configure)
- [Build](#build)
- [Contribute](#contribute)
- [License](#license)
- [Features](#features)
- [Features To Do](#features-to-do)

## Overview
This project is meant to serve as a personalized landing page for any browser. It renders a grid of icons, each of which can be configured with an image and a URL. A user can sign-in to define a custom grid of icons, and grid configurations can be backed-up via [JSON](https://www.json.org/) export, then imported later. The project is built using [AngularJS](https://angular-ui.github.io/bootstrap/), according to standard paradigms for that framework. It was build such that the controls are intuitive to the point where no documentation is required for regular use-cases. The back-end features a thin [NodeJS](https://nodejs.org/en/) API back-end, which persists data to a [MongoDB](https://www.mongodb.com/), then supplies it to the client-side as serialized [JSON](https://www.json.org/) objects. This application is still live, but is not being actively maintained at the moment.

## Demo
[]()

## Development Philosophy
I built this as a browser-agnostic new-tab page, for use on any device, in virtually any browser. I've seen similar landing-page projects in the past, but they're typically built as add-ons for specific browser software. I wanted to remedy this constraint, and to keep it simply to use and nice to look at. I went with a metro-style layout, leveraging [angular-gridster](https://github.com/ManifestWebDesign/angular-gridster) to maintain the grid structure. I refrained from bloating it with a ton of options and features: rather, it's meant to perform the simple function of linking-out to other websites. It's built such that utility widgets can be added easily; currently calculator and clock widgets are available. This was my first side-project built in [AngularJS](https://angularjs.org/) using [ES6](https://es6.io/), and it served as a playground for me to learn the framework. I learned a lot building this app in 2016, and hope it can be useful to others!

## Stack

### Server

### Client

## Use As `New Tab` Page

### Chrome
1. Download extension [Fast New Tab Redirect](https://chrome.google.com/webstore/detail/fast-new-tab-redirect/ohnfdmfkceojnmepofncbddpdicdjcoi?hl=en)
2. In extension settings, configure redirect-page URL as `http://nervecenter.herokuapp.com`

### Firefox
1. Download add-on [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)
2. In extension settings, configure redirect-page URL as `http://nervecenter.herokuapp.com`

### Safari
1. Open Safari
2. Select `Preferences` from the menu bar
3. General
4. Set homepage as `http://nervecenter.herokuapp.com`

### Edge
1. Open Edge
2. Input `about:flags` into URL bar
3. Check the box next to `Enable extension developer features`
4. Download extension [Breeze](https://drive.google.com/file/d/1YupLKhTwgGsbQC362mI3643f3og8nmih/view)
5. Install the downloaded extension
6. Configure new tab page as `http://nervecenter.herokuapp.com`

## Configure

## Build

## Contribute
If you have feature suggestions, please contact me here or at efournier92@gmail.com. If you'd like to submit a pull request, please feel free and I'll review and merge it at my earliest convenience!

## License
This project is provided under the [`MIT`](https://opensource.org/licenses/MIT) licence and I hereby grant rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software without limitation, provided the resulting software also carries the same open-source licensing statement.

## Features

### Authentication

### View dashboard with clickable link icons

### Delete icons from dashboard

### Unlock dashboard to drag icons

### Calculator Widget

### Add a new icon

### Export configuration data

### Import configuration data

### Extra settings

## Features To Do
* [ ] Change widgets to grids
* [ ] Amazon Fresh Icon
* [ ] Better Google News Icon
* [ ] Deletes both when same URL
* [ ] Small icons don't arrange correctly after sync (or add)
* [ ] Calc doesn't resize right after $location redirect
* [ ] Icon missing default grid
* [ ] Separate grids from user model
* [ ] Create FavIcon
* [ ] FavIcon in Heroku
* [ ] Add Widget Formatting
* [ ] editWidget Url/Ico
* [ ] rearrange size after grid sync
* [ ] add bower-components to lib
* [ ] convert CSS to SASS
* [ ] add ES6 support
  - [ ] convert es5 to es6
* [ ] add jspm support
* [ ] login modal can't be exited
* [ ] don't show main modal unless logged in
* [ ] update default grid
* [ ] ncCalc delete icon
* [ ] clock delete icon
* [ ] import modal choice of size dropdown
* [ ] Import error handling
* [ ] New Grid Modal (icon checkboxes)
* [ ] Background Color Picker
* [ ] Multiple custom grids for different devices
* [ ] Tabbed grid layouts
* [ ] Digital Clock Widget
* [ ] Analog/Digital Hybrid Clock Widget
* [ ] Weather Widget
* [ ] Word of the Day Widget
* [ ] Dictionary Widget
* [ ] Thesaurus Widget
* [ ] Baseball Scores Widget
* [ ] Measurement Converter Widget
* [ ] Currency Converter Widget

