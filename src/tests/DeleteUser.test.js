import React from "react";
import { render ,screen,fireEvent} from '@testing-library/react';
import DeleteUser from "../components/DeleteUser";

describe('DeleteUser component', ()=> {
    it('renders the form correctly',()=> {
       

        render(
            <DeleteUser   />
         );
         expect(screen.getByLabelText('Enter User ID')).toBeInTheDocument();
         
   
    });

    it('displays error message for non existent user id',()=>{
     
     
        
    })
});

