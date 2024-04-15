import React from "react";
import { render  } from '@testing-library/react';
import Home from "./Home";

test ('renders all buttons',()=>{
    const {getByText} = render(<Home />)

    const addbtn = getByText('add user',{exact:false});

    expect(addbtn).toBeInTheDocument();

}

);

/home/srustipn/demo/crud/frontend