import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'
import CustomCaptions from '../src/components/CustomCaptions'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <CustomCaptions>
        <></>
      </CustomCaptions>,
    )
  })
})
