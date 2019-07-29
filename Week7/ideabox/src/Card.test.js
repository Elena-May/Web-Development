import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from "./IdeaCard";

describe('Card', () => {

    it('renders the title of the idea in <h1> tags', () => {
        const wrapper = shallow(<Card name="Bananas" />);
        const title = <h1>Bananas</h1>;

        expect(wrapper.contains(title)).toEqual(true);
    })

    it('should match the snapshot with all data passed in correctly', () => {
        const wrapper = shallow(<Card 
            title="Bananas"
            body="B A N A N A S"
            onDelete={jest.fn()}
        />);
        

        expect(wrapper).toMatchSnapshot();
    });

    it.skip('should have a className of "favorite if isFavorite', () => {
        const wrapper = shallow(<Card title="Bananas" isFavorite={true} />);
        
        expect(wrapper.is('.favorite')).toEqual(true);
    });

    it('should call the removeIdea prop when clicked', () => {
        const removeIdeaMock = jest.fn();

        const wrapper = mount(
            <Card
                title="Bananas"
                body="blah blah bloop"
                removeIdea={removeIdeaMock}
            />
        );

        wrapper.find('button').simulate('click');
        expect(removeIdeaMock).toBeCalled();
    });




})