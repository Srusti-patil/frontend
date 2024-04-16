import React from 'react';
import { render,screen ,fireEvent,waitFor,getByText,getByLabelText} from '@testing-library/react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import CreateUser from '../components/CreateUser.js';

describe('CreateUser component',()=> {
    it('renders the form correctly',()=> {
     
    render(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    } );

    it('displays success message after successfully submitting the form',  () => {

        const alertMock = jest.spyOn(window, 'alert').mockImplementation();

         render(
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<CreateUser />} />
            </Routes>
          </BrowserRouter>
    );
        const firstNameInput = screen.getByLabelText('First Name');
        const lastNameInput = screen.getByLabelText('Last Name');
        const emailInput = screen.getByLabelText('E-mail');
        const submitButton = screen.getByText('Submit');
    
        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        fireEvent.click(submitButton);
    
        
        
        expect(alertMock).toHaveBeenCalledWith('User created successfully!');
        
    
        // Restore the original alert function
       
      });


});












//   test('renders the form correctly', () => {
//     const { getByLabelText, getByText } = render(
   
//       <CreateUser />
   
//     );
//     expect(screen.getByLabelText('First Name')).toBeInTheDocument();
//     expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
//     expect(screen.getByLabelText('Email')).toBeInTheDocument();
//     expect(screen.getByText('Submit')).toBeInTheDocument();
//   });
















//   it('displays error message if form is submitted with empty fields', async () => {
//     const { getByText } = render(<CreateUser />);
//     const submitButton = screen.getByText('Submit');

//     fireEvent.click(submitButton);

//     await waitFor(() => {
//       expect(screen.getByText('Please fill in all the fields.')).toBeInTheDocument();
//     });
//   });

//   it('displays success message after successfully submitting the form', async () => {
//     const { getByLabelText, getByText } = render(<CreateUser />);
//     const firstNameInput = screen.getByLabelText('First Name');
//     const lastNameInput = screen.getByLabelText('Last Name');
//     const emailInput = screen.getByLabelText('Email');
//     const submitButton = screen.getByText('Submit');

//     fireEvent.change(firstNameInput, { target: { value: 'John' } });
//     fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
//     fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
//     fireEvent.click(submitButton);

//     await waitFor(() => {
//       expect(screen.getByText('User created successfully!')).toBeInTheDocument();
//     });
//   });
//});