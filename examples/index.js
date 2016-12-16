import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Panel from '../dist/index.min';

class Page extends React.Component {
  render() {
    return (
      <div className="panel-eg-container">
        <h1>Get-Set-Go Panel Component</h1>

        <p className="panel-eg-group">
          <h4>Panel Styles</h4>

          <Panel header="Header" footer="Footer">
            Default Panel
          </Panel>

          <Panel header="Header" footer="Footer" bStyle="primary">
            Primary Panel
          </Panel>

          <Panel header="Header" footer="Footer" bStyle="success">
            Success Panel
          </Panel>

          <Panel header="Header" footer="Footer" bStyle="info">
            Info Panel
          </Panel>

          <Panel header="Header" footer="Footer" bStyle="warning">
            Warning Panel
          </Panel>

          <Panel header="Header" footer="Footer" bStyle="danger">
            Danger Panel
          </Panel>
        </p>

        <p className="panel-eg-group">
          <h4>Panel Types</h4>

          <Panel header="Header">
            Panel with only header
          </Panel>

          <Panel footer="Footer">
            Panel with only footer
          </Panel>
        </p>

      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
