import '../node_modules/gsg-common-style/less/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class GSGPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let _bStyle = 'default';
    _bStyle = classNames({
      'panel': true,
      [`panel-${this.props.bStyle}`]: true
    });

    let _header = (
      <div className="panel-heading">{this.props.header}</div>
    );

    let _footer = (
      <div className="panel-footer">{this.props.footer}</div>
    );

    return(
      <div className={_bStyle}>
        {this.props.header && _header}
        <div className="panel-body">
          {this.props.children}
        </div>
        {this.props.footer && _footer}
      </div>
    );
  }
};

GSGPanel.propTypes = {
  bStyle: PropTypes.string,
  header: PropTypes.object,
  footer: PropTypes.object
};

GSGPanel.defaultProps = {
  bStyle: 'default'
};
