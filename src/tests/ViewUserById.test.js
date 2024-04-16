import React from 'react';
import { render,screen ,getByText,getByLabelText} from '@testing-library/react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import ViewUserById from '../components/ViewUserById';

describe('ViewUserById component',()=>{
    it('renders form correctly',()=>{
        render(
           <ViewUserById />
        );

        expect(screen.getByLabelText('Enter User ID')).toBeInTheDocument();
    })
})