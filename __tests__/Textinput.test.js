import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Textinput from '../src/components/Textinput';

// Mock dependencies
const mockProductFormSchema = {
  validate: jest.fn(() => Promise.resolve({})),
  validateSync: jest.fn(() => ({})),
};

const mockAddProduct = jest.fn();

const mockProductNameRef = {
  current: { focus: jest.fn() },
};

const mockProductPriceRef = {
  current: { focus: jest.fn() },
};
jest.useFakeTimers();

test('render correctly', () => {
  const { toJSON } = render(
    <Textinput
      productFormSchema={mockProductFormSchema}
      addProduct={mockAddProduct}
      productNameRef={mockProductNameRef}
      productPriceRef={mockProductPriceRef}
    />
  );

  expect(toJSON()).toMatchSnapshot();
});

test('renders correctly and triggers form submission', async () => {
  const { getByPlaceholderText, getByText, getByTestId } = render(
    <Textinput
      productFormSchema={mockProductFormSchema}
      addProduct={mockAddProduct}
      productNameRef={mockProductNameRef}
      productPriceRef={mockProductPriceRef}
    />
  );

  const nameInput = getByPlaceholderText('Product Name');
  const priceInput = getByPlaceholderText('Price');
  const materialPicker = getByTestId('materialPicker');
  const addButton = getByText('Add Product');

  fireEvent.changeText(nameInput, 'Product 1');
  fireEvent.changeText(priceInput, '10');
  fireEvent(materialPicker, 'valueChange', 'Metal');
  fireEvent.press(addButton);
  

  await waitFor(async() => {
    expect(mockAddProduct).toHaveBeenCalledWith('Product 1', '10', 'Metal', expect.any(Function));
  });

  jest.runOnlyPendingTimers();
});


afterAll(() => {
  jest.useRealTimers();
});