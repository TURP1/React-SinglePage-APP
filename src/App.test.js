import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import NetworkApp from './App';

test('renders without crashing', () => {
  const div = document.createElement(`div`);
  render(<NetworkApp />, div)
  unmountComponentAtNode(div);
});
