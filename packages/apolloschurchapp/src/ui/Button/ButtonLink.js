import { Text } from 'react-native';

import styled from 'apolloschurchapp/src/ui/styled';

const ButtonLink = styled(
  ({ theme }) => ({
    color: theme.colors.text.link,
  }),
  'Button.Link'
)(Text);

export default ButtonLink;
