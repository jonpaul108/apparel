import * as React from 'react'
import {mount, shallow} from 'enzyme'
import IndexPage from '../pages/index'

describe('Pages', () => {
  describe('Index', () => {
    it('renders one <Index /> component', () => {
      const wrapper = shallow(<IndexPage />);
      expect(wrapper.find(IndexPage)).to.have.lengthOf(1);
    })

    it('should render without throwing an error', function () {
      const wrap = mount(<IndexPage/>)
      expect(wrap.find('p').text()).toBe('Hello Next.js')
    })
  })
});
