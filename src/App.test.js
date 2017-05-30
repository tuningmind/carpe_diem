import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'

describe('App', () => {
  let props;
  const setup = () => shallow(<App {...props} />)

  beforeEach(() => {
    props = {

    }
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('initializes the deck of cards', () => {
    const app = setup()
    const unused = app.state('unused')
    expect(unused.length).toBe(52)
  }) 

  it('removes four cards from the deck onclick', () => {
    const app = setup()
    const unused = app.state('unused')
    const Hand = app.find('Hand')
    const hand = Hand.prop('makeHand')(unused)
    expect(hand.length).toBe(4)
  })

  it('correctly calculates energy', () => {
    const app = setup()
    const card = {
      energy: 1
    }
    const startingEnergy = app.state('energy')
    const hand = app.find('Hand')
    hand.prop('applyCard')(card)
    const endingEnergy = app.state('energy')
    expect(endingEnergy).toBe(startingEnergy + card.energy - 1)
  })

})
