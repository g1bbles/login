import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';
import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders and matches our snapshot', () => {
    const component = renderer.create(
        <HelloWorld  />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
