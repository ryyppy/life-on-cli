/* @flow */

import test from 'tape';
import { filterByEmail } from '../src/example1';

test('example1', (t) => {
  t.test('filterByEmail', (q) => {
    const data = [
      { email: 'franz@gmail.com' },
    ];

    const r = filterByEmail(data, 'franz@gmail.com');

    q.deepEqual(r, { email: 'franz@gmail.com' }, 'could not find franz');
    q.end();
  });
  t.end();
});
