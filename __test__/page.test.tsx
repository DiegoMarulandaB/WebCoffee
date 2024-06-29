import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Page from '@/app/(routes)/cart/page';


describe('Page Component', () => {
 
  it('should render empty cart message when no items are in the cart', () => {
  
    const { getByText } = render(<Page />);
    expect(getByText('No hay café en el carrito')).toBeInTheDocument();
  });
});
