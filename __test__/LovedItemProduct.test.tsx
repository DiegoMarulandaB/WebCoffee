import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LovedItemProduct from '@/app/(routes)/loved-products/components/loved-item-product';

describe('LovedItemProduct component', () => {
  it('should render product image with correct slug and URL', () => {
  const product = {
    attributes: {
      slug: 'coffee-slug',
      images: {
        data: [
          {
            id: 1,
            attributes: {
              url: 'https://example.com/coffee-image.jpg',
            },
          },
        ],
      },
      productName: 'Delicious Coffee',
      price: 10.99,
      taste: 'Bold',
      origin: 'Brasil',
      description: 'A bold coffee from Brasil',
      active: true,
      isFeatured: false,
      category: {
        data: {
          attributes: {
            slug: 'coffee',
            categoryName: 'Coffee',
          },
        },
      },
    },
    id: 1,
  };


    const { getByAltText } = render(<LovedItemProduct product={product} />);
    const image = getByAltText('Product');

    expect(image).toHaveAttribute('src', 'https://example.com/coffee-image.jpg');
    expect(image.closest('div')).toHaveClass('cursor-pointer');
  });
});
