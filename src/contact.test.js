import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';
import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('HelloWorld', () => {
    const mockRemoveGreeting = jest.fn();
    const mockFrenchify = jest.fn(() =>'Bonjour');

    const component = shallow(
        <button className="frenchify" onClick={mockFrenchify}/>
    );

    const removeComponent = shallow(
        <button className="remove" onClick={mockRemoveGreeting}/>
    );

    const greeting = shallow(<h1 className="greeting"/>);

    // Add the rest of our tests here later!
    it('renders contact without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Contact />, div);
    });

    it('modifies the greeting when frenchify button is clicked', () => {
        component.find('button.frenchify').simulate('click');
        expect(component.text()).toContain('');
    });

    it('calls the passed in removeGreeting function when remove button is clicked', () => {
        removeComponent.find('button.remove').simulate('click');
        expect(mockRemoveGreeting).toBeCalled();
    });

    it('changes the text when frenchify is clicked', () => {
        component.find('button.frenchify').simulate('click');
        console.log();
        expect(greeting.text()).toContain('Bonjour');
    })
});





