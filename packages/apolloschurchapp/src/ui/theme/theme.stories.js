/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';

import FlexedView from 'apolloschurchapp/src/ui/FlexedView';
import { H3, H6, BodyText } from 'apolloschurchapp/src/ui/typography';

import { ThemeProvider, ThemeMixin, withThemeMixin } from './';

const TypeExample = () => (
  <FlexedView>
    <H3>Hi there!</H3>
    <H6>Lorem ipsum dolor sit amet.</H6>
    <BodyText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales
      sit amet ante eu lobortis. In vitae faucibus lectus, at interdum nibh.
      Fusce suscipit tincidunt justo, vitae cursus mi fermentum eget.
    </BodyText>
  </FlexedView>
);

const DarkTypeExample = withThemeMixin({
  type: 'dark',
})(TypeExample);

const TypeExampleWithProps = withThemeMixin(({ color, isLight = true }) => ({
  type: isLight ? 'light' : 'dark',
  colors: {
    primary: color,
  },
}))(TypeExample);

storiesOf('Theming', module)
  .add('ThemeProvider - default', () => (
    <ThemeProvider>
      <TypeExample />
    </ThemeProvider>
  ))
  .add('ThemeProvider - dark theme', () => (
    <ThemeProvider
      themeInput={{
        type: 'dark',
      }}
    >
      <TypeExample />
    </ThemeProvider>
  ))
  .add('ThemeMixin', () => (
    <ThemeProvider>
      <FlexedView>
        <TypeExample />
        <ThemeMixin mixin={{ type: 'dark' }}>
          <TypeExample />
        </ThemeMixin>
      </FlexedView>
    </ThemeProvider>
  ))
  .add('withThemeMixin', () => (
    <ThemeProvider>
      <FlexedView>
        <TypeExample />
        <DarkTypeExample />
      </FlexedView>
    </ThemeProvider>
  ))
  .add('withThemeMixin using props', () => (
    <ThemeProvider>
      <FlexedView>
        <TypeExampleWithProps isLight color="red" />
        <TypeExampleWithProps isLight={false} color="blue" />
      </FlexedView>
    </ThemeProvider>
  ));
