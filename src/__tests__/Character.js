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

  it('Should Render without crashing', () => {
    expect(wrapper).not.toBeNull();
  });

  describe('Checking Character Information', () => {
    it('Should render name of the Character', () => {
      const characterName = wrapper
        .find('.character__informations')
        .children()
        .at(0)
        .text();
      expect(characterName.trim()).toEqual(props.character.name);
    });

    it('Should render birthday of the Character', () => {
      const characterBirthday = wrapper
        .find('.character__informations')
        .children()
        .at(1)
        .text();
      expect(characterBirthday.trim()).toEqual(props.character.birthday);
    });

    it('Should render image of the Character', () => {
      expect(wrapper.find('img').props().src).toEqual(props.character.img);
    });

    it('Should render ocupations of the Character', () => {
      const characterOcupations = wrapper
        .find('.character__informations')
        .children()
        .last()
        .text();
      expect(characterOcupations).toContain(props.character.occupation);
    });

    it('Should render status of the Character', () => {
      expect(wrapper.find('.status').text()).toEqual(props.character.status);
    });
  });

  it('Show Render correctly UI indicator based on Characters Status', () => {
    expect(wrapper.find('.status').hasClass('status__dead')).toBe(true);

    wrapper.setProps({ character: { ...props.character, status: 'Alive' } });
    expect(wrapper.find('.status').hasClass('status__alive')).toBe(true);
  });
});
