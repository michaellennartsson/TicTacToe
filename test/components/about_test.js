import { renderComponent , expect } from '../test_helper';
import About from '../../src/components/about';

describe('About' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(About);
  });

  it('renders About', () => {
    expect(component).to.exist;
  });
});