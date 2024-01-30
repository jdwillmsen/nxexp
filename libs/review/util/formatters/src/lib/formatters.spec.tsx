import { render } from '@testing-library/react';

import Formatters from './formatters';

describe('Formatters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Formatters />);
    expect(baseElement).toBeTruthy();
  });
});
