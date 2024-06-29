import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuList from '@/components/MenuList/MenuList';

it('should render "Sobre nosotros" menu item correctly', () => {
  const { getByText } = render(<MenuList />);
  expect(getByText('Sobre nosotros')).toBeInTheDocument();
});
