// TODO: Show flow / eslint support integration

/* eslint-disable */

import React from 'react';

// TODO: Fix data
import data from './data';

// TODO: Extract attr1 from `source` into this object
// TODO: Switch from double quotes to single quotes
// TODO: Copy attr1 10 times and increment the number
// TODO: Get rid of single quotes of all attributes
const target = {
};

const source = {
  'attr1': "test",
};

// TODO: Rename `sourceFile` to `targetFile` without renaming
//       other things out of this scope
function someFunctionScope(sourceFile) {
  if (sourceFile === '/home/ryyppy') {
    return `Hi ryyppy! This target is your home: ${sourceFile}`;
  }
  return `Hi! Target file: ${sourceFile}`;
}

type Props = {
  // TODO: Rename something to 'person'
  something: {
    firstName: string,
    email: string,
  },
};

class SomeComponent extends React.Component {
  props: Props;

  render() {
    const { something } = this.props;

    const {
      firstName = 'None',
      email = 'Nomail',
    } = something || {};

    // TODO: Append email as template string
    const str = firstName;

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

    return (<SomeComponent something={something} />);
  }
}

type User = { email: string };

// TODO: Coworker insisted that this function
//       needs at least one test :-(
export function filterByEmail(data: Array<User>, email: string): ?Object {
  if (data == null) {
    return null;
  }

  return data.find((ds) => ds.email === email);
}
