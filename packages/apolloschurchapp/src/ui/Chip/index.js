import React from 'react';
import { compose, mapProps } from 'recompose';
import PropTypes from 'prop-types';
/* touchable native feedback currently is having flex layout issues on react-native android, so we
 * fall back to TouchableOpacity
 */
import { TouchableOpacity } from 'react-native';

import { H6 } from 'apolloschurchapp/src/ui/typography';
import Button from 'apolloschurchapp/src/ui/Button';
import Icon from 'apolloschurchapp/src/ui/Icon';
import { withTheme } from 'apolloschurchapp/src/ui/theme';
import styled from 'apolloschurchapp/src/ui/styled';

export { default as ChipList } from './List';

const enhance = compose(
  withTheme(),
  mapProps(({ theme, selected, ...otherProps }) => ({
    type: selected ? 'primary' : 'default',
    iconSize: theme.sizing.baseUnit,
    ...otherProps,
  }))
);

const TitleText = styled(({ withIcon = false }) => ({
  ...(withIcon ? { flexGrow: 1 } : {}),
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 6,
}))(H6);

const StyledButton = styled(
  ({ theme, withIcon = false }) => ({
    justifyContent: withIcon ? 'flex-end' : 'center',
    paddingHorizontal: theme.sizing.baseUnit / 4,
    paddingVertical: theme.sizing.baseUnit / 4,
    height: theme.sizing.baseUnit * 2,
    /* these margins are only used when a chip is in a list.
     * TODO: consider removing or making conditional for use outside of lists
     */
    marginRight: theme.sizing.baseUnit / 2,
    marginBottom: theme.sizing.baseUnit / 2,
  }),
  'Chip'
)(Button);

const Chip = enhance(
  ({
    icon,
    iconStyles = {},
    iconSize,
    selected,
    title,
    pill = false,
    ...buttonProps
  }) => (
    <StyledButton
      withIcon={icon}
      TouchableComponent={TouchableOpacity}
      pill={pill}
      {...buttonProps}
    >
      {title ? <TitleText withIcon={icon}>{title}</TitleText> : null}
      {icon ? <Icon name={icon} style={iconStyles} size={iconSize} /> : null}
    </StyledButton>
  )
);

Chip.propTypes = {
  icon: PropTypes.string,
  iconStyles: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  iconSize: PropTypes.number,
  selected: PropTypes.bool,
  title: PropTypes.string,
  pill: PropTypes.bool,
};

export default Chip;
