import { Form , Button} from 'react-bootstrap';
 
export default function Register() {
    return (
        <Form>
            <h3>Register</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Enter Firstname" />
               
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="email" placeholder="Enter Firstname" />
              
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}