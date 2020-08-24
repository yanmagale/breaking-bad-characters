import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Character from '../components/character/Character';

configure({ adapter: new Adapter() });

describe('<Character> Component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      character: {
        char_id: 1,
        name: 'Walter White',
        birthday: '09-07-1958',
        occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
        img:
          'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
        status: 'Presumed dead',
        nickname: 'Heisenberg',
        appearance: [1, 2, 3, 4, 5],
        portrayed: 'Bryan Cranston',
        category: 'Breaking Bad',
        better_call_saul_appearance: [],
      },
    };
    wrapper = shallow(<Character {...props} />);
  });

  it('Render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Render Character Inforation', () => {
    expect(wrapper.find('.character__informations').text()).toContain(
      props.character.name
    );
    expect(wrapper.find('.character__informations').text()).toContain(
      props.character.birthday
    );
  });
});
