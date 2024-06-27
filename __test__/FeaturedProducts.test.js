import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { useGetFeaturedProducts } from '@/page/api/useGetFeaturedProducts';

// Mocking the useGetFeaturedProducts hook
jest.mock('@/page/api/useGetFeaturedProducts');

describe('FeaturedProducts component', () => {
  it('should render loading skeleton when data is being fetched', () => {
    // Mock implementation for the useGetFeaturedProducts hook
    useGetFeaturedProducts.mockReturnValue({
      result: null,
      loading: true,
      error: '',
    });

    // Render the component
    const { getByText } = render(<FeaturedProducts />);

    // Assert that the loading skeleton and relevant texts are displayed
    expect(getByText('¡Granos de café con sabor latino para el mundo!')).toBeInTheDocument();
    expect(getByText('Productos destacados')).toBeInTheDocument();
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
