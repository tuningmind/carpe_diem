import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import { shallow } from 'enzyme'

describe('Card', () => {
  let props;
  const setup = () => shallow(<Card {...props} />)

  beforeEach(() => {
    props = {
      gamestate: { 
        unused: []
      },
      applyCard: jest.fn(),
      card: {
        classnames: []
      },
      makeHand: jest.fn(),
      showMessage: jest.fn(),
      isPlayableCard: jest.fn()
    }
  })

  it('removes four cards from deck \
      and creates new hand of four cards', () => {
    const card = setup()
    // const hand = card.prop('onClick')()
    const hand = card.simulate('click')
    expect(props.makeHand)
      .toHaveBeenCalledWith(props.gamestate.unused)
  })

  it('does not apply unplayable card', () => {
    const card = setup()
    const hand = card.simulate('click')
    expect(props.isPlayableCard(props.card))
      .toHaveBeenCalledWith(props.card)
  })
})
