import { render } from '@testing-library/react';
import ScorePanel from "../componets/ScorePanel";

import { list } from './mocks/list';

test('ScorePanel: item selected', () => {
  const { container } = render(<ScorePanel list={list} currentItem={1} />);
  // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
  expect(container.getElementsByClassName('Item')[1].classList.contains('Item--selected')).toBe(true);
});
