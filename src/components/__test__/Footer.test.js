import renderer from 'react-test-renderer';
import 'react-native';
import React from 'react';
import Footer from '../Footer';

test('renders correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});