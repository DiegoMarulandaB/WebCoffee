import React from 'react';
import { render } from '@testing-library/react';
import FilterOrigin from '@/app/(routes)/category/[categorySlug]/components/filter-origin';


jest.mock('@/page/api/getProductField', () => ({
  useGetProductField: () => ({
    result: null,
    loading: true,
    error: '',
  }),
}));

describe('FilterOrigin Component', () => {
  it('should render loading state when data is being fetched', () => {
    const setFilterOrigin = jest.fn();

    const { getByText } = render(<FilterOrigin setFilterOrigin={setFilterOrigin} />);

    expect(getByText('Cargando origen...')).toBeInTheDocument();
  });
});
