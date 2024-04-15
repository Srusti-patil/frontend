import React from "react";
import { render ,screen} from '@testing-library/react';
import Home from "./Home";

//describe('Home component', () => {
    test('renders sidebar options correctly', () => {
      const { getByText } = render(<Home />);
      
      expect(screen.getByText('Add user')).toBeInTheDocument();
      expect(screen.getByText('Update user')).toBeInTheDocument();
      expect(screen.getByText('View all users')).toBeInTheDocument();
      expect(screen.getByText('View user by id')).toBeInTheDocument();
      expect(screen.getByText('Delete user')).toBeInTheDocument();
    });
 // });
