import { fireEvent, render, screen, act } from '@testing-library/react/pure'
import DetailsFormView from './DetailsFormView'
import data from '../../store/data.json'

describe('DetailsFormView', () => {
    const mockChangeFormStatus = jest.fn(n => console.log(n));
    const mockOnSubmit = jest.fn(); 

    beforeAll(async () => {
        await act(async () => render(<DetailsFormView defaultValues={data[2]} changeFormStatus={mockChangeFormStatus} onSubmit={mockOnSubmit}/>))
    })

    test('name input', () => {
        const { getByDisplayValue } = screen
        const nameInput = getByDisplayValue('Bill')
        expect(nameInput).toBeTruthy();
    })

    test('status select', () => {
        const { getByDisplayValue } = screen
        const select = getByDisplayValue('NSW')
        expect(select).toBeTruthy();
    })

    test('date picker', () => {
        const { getByDisplayValue } = screen
        const datePicker = getByDisplayValue('2021-04-03')
        expect(datePicker).toBeTruthy();
    })

    test('press submit button', async () => {
        const { getByTestId } = screen
        const submitBtn = getByTestId('submit-btn')
        expect(submitBtn).toBeTruthy();
        await act( async () => fireEvent.click(submitBtn))
        expect(mockOnSubmit).toBeCalledTimes(0);
    })

    test('email input', async () => {
        const { getByTestId } = screen
        const emailInput = getByTestId('email-input')
        expect(emailInput).toBeTruthy();
        await act( async () => fireEvent.change(emailInput, { target: { value: "bill@example.com"}}))
    })

    test('submit form success', async () => {
        const { getByTestId } = screen
        const submitBtn = getByTestId('submit-btn')
        expect(submitBtn).toBeTruthy();
        await act( async () => fireEvent.click(submitBtn))
        expect(mockOnSubmit).toBeCalledTimes(1);
    })

})