import React from 'react'
import { shallow } from 'enzyme'
import { NavLink as RouterNavLink, BrowserRouter } from 'react-router-dom'
import { Button } from 'reactstrap'
import MainMenu from '../index'
import Sidebar from '../Sidebar'
import Logo from '../Logo'
import i18n from '/imports/both/i18n/en'

describe('<MainMenu />', () => {
  const shallowRenferer = (props) => shallow(
    <BrowserRouter>
      <MainMenu>
        <Logo />
        <Sidebar 
         isOpen={false}
         i18nFile={i18n.MainMenu}
         toggle={() => {return undefined}}
        //  user={{}}
        />
      </MainMenu>
    </BrowserRouter>
  )

  const wrapper = shallowRenferer()

  it('a menu wrapper should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render a logo component', () => {
    expect(wrapper.find(Logo).exists()).toBe(true)
  })

  // it('should render an add-event button from i18n file', () => {
  //   const addEventButton = wrapper.find('#add-event')
  //   console.log('addEventButton', addEventButton./);
  //   expect(addEventButton).toHaveLength(1)
  //   expect(addEventButton.find(RouterNavLink).props().to).toEqual('?new=1')
  //   expect(addEventButton.find(Button).children().text()).toEqual(i18n.MainMenu.addEvent)
  // })

  // it('should initialize with "sidebarOpen" set to false', () => {
  //   expect(wrapper.state().sidebarOpen).toEqual(false)
  // })

  // it('should render a burger icon that toggles the sidebar', () => {
  //   const wrapper_ = shallowRenferer()

  //   wrapper_.find('#sidebar-toggle').simulate('click')
  //   expect(wrapper_.find(Sidebar).props().isOpen).toEqual(true)
  // })
})
