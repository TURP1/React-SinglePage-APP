import TestRenderer from 'react-test-renderer'; 
import Status from './Profile__Status_WithHOOK';







describe("Profile Status Component", () => {
    it(`"gg ww " should be in props ` , ()=>{
        const testRenderer = TestRenderer.create(<Status status="gg ww"/>);
        const testInstance = testRenderer.root;
        expect(testInstance.props.status).toBe("gg ww")
    });
  })
  

