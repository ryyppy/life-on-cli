// TODO: Show flow / eslint support integration
/* eslint-disable */

import data from './data'
import React from 'react';

// TODO: Copy attr1 sometimes and increment number
// TODO: Remove the double-ticks for attribute names afterwards
const someRandomJSON = {
  attr1: "value",
}

class SomeComponent extends React.Component {
  render() {
    // TODO: Rename something to 'person' 
    const { something } = this.props;

    const {
      first_name = 'None',
      email = 'Nomail',
    } = something || {};

    // TODO: Append email as template string
    const str = first_name;

    // TODO: Fix attribute alignment
    // TODO: Surround with return (); 
    <div id="mydiv" className="foo" ref="mydiv-ref">
      { str }
    </div>
  }
}

class MyApp extends React.Component {
  render() {
    const something = null;

    return (<SomeComponent something={something}/>)
  }
}

// TODO: Coworker insisted that this function
//       needs at least one test :-(
export function filterByEmail(data: Array<Object>, email: string): ?Object {
  if (data == null) {
    return null; 
  }

  return data.find((ds) => ds.email === email);
}
