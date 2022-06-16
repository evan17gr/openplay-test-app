import '@testing-library/jest-dom';

import {orderArray} from './index';
import {
  orderArrayAlphabeticallyTestOutput,
  orderArrayAlphabeticallyTestInput,
  orderArrayByTimeTestInput,
  orderArrayByTimeTestOutput,
} from './test-data';

describe('Util functions', () => {
  test('orderArray returns an array in alphabetical order', () => {
    expect(orderArray(orderArrayAlphabeticallyTestInput, 'name', 'text')).toStrictEqual(
      orderArrayAlphabeticallyTestOutput,
    );
  });

  test('orderArray returns an array based on a property with time in ascending order', () => {
    expect(orderArray(orderArrayByTimeTestInput, 'start_time', 'time')).toStrictEqual(orderArrayByTimeTestOutput);
  });
});
