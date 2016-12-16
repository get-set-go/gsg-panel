import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Panel from '../src';

describe('<Panel /> component', function() {

  it('should panel exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<Panel />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
