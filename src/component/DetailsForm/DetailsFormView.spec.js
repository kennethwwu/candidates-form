import { fireEvent, render, screen, act } from '@testing-library/react/pure'
import DetailsFormView from './DetailsFormView'
import data from '../../store/data.json'

describe('DetailsFormView', () => {
    const mockChangeFormStatus = jest.fn(n => console.log(n));
    const mockOnSubmit = jest.fn(); 

    beforeAll(async () => {
        await act(async () => render(<DetailsFormView defaultValues={data[0]} changeFormStatus={mockChangeFormStatus} onSubmit={mockOnSubmit}/>))
    })

    test('name input', () => {
        const { getByDisplayValue } = screen
        const nameInput = getByDisplayValue('Ken')
        expect(nameInput).toBeTruthy();
    })

    test('email input', () => {
        const { getByDisplayValue } = screen
        const emailInput = getByDisplayValue('ken@example.com')
        expect(emailInput).toBeTruthy();
    })

    test('status select', () => {
        const { getByDisplayValue } = screen
        const select = getByDisplayValue('VIC')
        expect(select).toBeTruthy();
    })

    test('date picker', () => {
        const { getByDisplayValue } = screen
        const datePicker = getByDisplayValue('2021-03-26')
        expect(datePicker).toBeTruthy();
    })

    test('press submit button', async () => {
        const { getByTestId } = screen
        const submitBtn = getByTestId('submit-btn')
        expect(submitBtn).toBeTruthy();
        await act( async () => fireEvent.click(submitBtn))
        expect(mockOnSubmit).toBeCalledTimes(0);
    })

    test('add value in Desired Salary input', async () => {
        const { getByDisplayValue } = screen
        const desiredSalaryInput = getByDisplayValue('')
        expect(desiredSalaryInput).toBeTruthy();
        await act( async () => fireEvent.change(desiredSalaryInput, { target: { value: "123"}}))
        expect(desiredSalaryInput.value).toBe('123')
    })

    test('submit form success', async () => {
        const { getByTestId } = screen
        const submitBtn = getByTestId('submit-btn')
        expect(submitBtn).toBeTruthy();
        await act( async () => fireEvent.click(submitBtn))
        expect(mockOnSubmit).toBeCalledTimes(1);
    })

})