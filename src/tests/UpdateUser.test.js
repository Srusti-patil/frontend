import React from "react";
import { render ,screen} from "@testing-library/react";
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import UpdateUser from "../components/UpdateUser";

describe('UpdateUser component',()=>{
    it('renders the form correctly',()=>{
 
        render(
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
            
        );
    expect(screen.getByLabelText('User ID')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    });
});