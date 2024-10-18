import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    return (
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Brand href="#home">Login</Navbar.Brand>
        <Navbar.Brand href="#home">Register</Navbar.Brand>
        <Navbar.Brand href="#home">Cars</Navbar.Brand>
        <Navbar.Brand href="#home">Add Car</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hello, <a>Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}