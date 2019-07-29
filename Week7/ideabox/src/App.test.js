import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';


describe('App', () => { 
  it('should update state with an idea when addIdea is called', () => { 
    // Setup 
    const wrapper = shallow(<App />);
    const mockIdea = { name: 'sweaters for pugs', body: 'why not?', id: Date.now() }; 
    const expected = [mockIdea];

    // Execution 
    wrapper.instance().addIdea(mockIdea);

    // Expectation 
    expect(wrapper.state('ideas')).toEqual(expected);
  });
});
