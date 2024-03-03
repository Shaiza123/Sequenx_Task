import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Textinput from '../src/components/Textinput/index';

describe('Textinput component', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText } = render(<Textinput />);
    const nameInput = getByPlaceholderText('Product Name');
    const priceInput = getByPlaceholderText('Price');
    const materialInput = getByPlaceholderText('Select Material');
    
    expect(nameInput).toBeDefined();
    expect(priceInput).toBeDefined();
    expect(materialInput).toBeDefined();
  });

  test('input validation', async () => {
    const { getByPlaceholderText, getByText } = render(<Textinput />);
    const nameInput = getByPlaceholderText('Product Name');
    const priceInput = getByPlaceholderText('Price');
    const addButton = getByText('Add Product');

    // Fill in invalid data
    fireEvent.changeText(nameInput, '');
    fireEvent.changeText(priceInput, 'abc'); // Invalid price

    fireEvent.press(addButton);

    await waitFor(() => {
      expect(getByText('Name is required')).toBeTruthy();
      expect(getByText('Price must be a number')).toBeTruthy();
      // Material validation can be added similarly
    });
  });

  test('submitting the form', async () => {
    const addProductMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <Textinput addProduct={addProductMock} />
    );

    const nameInput = getByPlaceholderText('Product Name');
    const priceInput = getByPlaceholderText('Price');
    const materialInput = getByPlaceholderText('Select Material');
    const addButton = getByText('Add Product');

    fireEvent.changeText(nameInput, 'Product 1');
    fireEvent.changeText(priceInput, '10');
    fireEvent.changeText(materialInput, 'Metal');

    fireEvent.press(addButton);

    await waitFor(() => {
      expect(addProductMock).toHaveBeenCalledWith('Product 1', '10', 'Metal', expect.any(Function));
    });
  });
});
