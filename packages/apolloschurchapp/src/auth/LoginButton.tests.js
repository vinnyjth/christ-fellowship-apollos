import React from 'react';
import renderer from 'react-test-renderer';
import wait from 'waait';

import Providers from 'apolloschurchapp/src/Providers';

import LoginButton from './LoginButton';
import getLoginState from './getLoginState';

describe('LoginButton component', () => {
  it('renders a LoginButton when logged out', async () => {
    const mock = {
      request: {
        query: getLoginState,
      },
      result: {
        data: { isLoggedIn: null },
      },
    };

    const navigation = { navigate: jest.fn() };
    const tree = renderer.create(
      <Providers mocks={[mock]}>
        <LoginButton navigation={navigation} />
      </Providers>
    );
    await wait(0); // wait for response from graphql
    expect(tree).toMatchSnapshot();
  });

  it('renders a LogoutButton when logged in', async () => {
    const mock = {
      request: {
        query: getLoginState,
      },
      result: {
        data: { isLoggedIn: 'some-auth-token' },
      },
    };
    const navigation = { navigate: jest.fn() };
    const tree = renderer.create(
      <Providers mocks={[mock]}>
        <LoginButton navigation={navigation} />
      </Providers>
    );
    await wait(0); // wait for response from graphql
    expect(tree).toMatchSnapshot();
  });
});
