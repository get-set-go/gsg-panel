import '../node_modules/gsg-common-style/less/panel/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class GSGPanel extends React.Component {
  render() {
    let _bClass = {
      'panel': true,
      [`panel-${this.props.bStyle}`]: true
    };

    _bClass = classNames(_bClass);

    let _header = (
      <div className="panel-heading">{this.props.header}</div>
    );

    let _footer = (
      <div className="panel-footer">{this.props.footer}</div>
    );

    return(
      <div className={_bClass}>
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
