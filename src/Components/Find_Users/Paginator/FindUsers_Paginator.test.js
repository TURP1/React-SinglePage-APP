import Paginator from "./FindUsers_Paginator";
import React from "react";
import TestRenderer from 'react-test-renderer'; 

it(`shouldn't show prev <btn> , if userPage = undefined`, ()=>{
    const testRenderer = TestRenderer.create(<Paginator usersTotalCount={50} usersInOnePage={10}/>);
    const testInstance = testRenderer.root;
    console.log(testInstance.children);
})
