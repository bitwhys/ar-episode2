import styled, { css } from 'styled-components'
import PropTypes, { string } from 'prop-types'

/**
 *
 * @param {('between'| 'end' | 'even' | 'around' | 'start' | 'center')} justification
 */
const parseJustifyProp = justification => {
  switch (justification) {
    case 'end':
      return 'flex-end'
    case 'even':
      return 'space-evenly'
    case 'around':
      return 'space-around'
    case 'start':
      return 'flex-start'
    case 'between':
      return 'space-between'
    case 'center':
      return 'center'
    default:
      return null
  }
}
const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => parseJustifyProp(justify)};
  ${({ flat }) =>
    flat &&
    css`
      height: 0;
    `}
  ${({ alignTop }) =>
    alignTop &&
    css`
      align-items: flex-start;
    `}
`

Flex.propTypes = {
  /* Specify the justification mode */
  justify: PropTypes.oneOf([
    'between',
    'end',
    'even',
    'around',
    'start',
    'center',
  ]),
  /* Create a box with no height */
  flat: PropTypes.bool,
}

export default Flex
