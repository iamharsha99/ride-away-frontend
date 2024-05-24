import { Navbar, Container, Nav } from "react-bootstrap";
import { AccountCircle } from "@material-ui/icons";
import { AppRegistration, NotificationsRounded } from "@mui/icons-material";

import "bootstrap/dist/css/bootstrap.css";
function Header() {
  return (
    <Navbar className="bg-warning">
      <Container>
        <Navbar.Brand className="fs-3 fw-bold" href="#home">
          Ride Away
        </Navbar.Brand>
        <div className="d-flex justify-content-end">
          <Nav className="me-auto ">
            <Nav.Link className="text-center " href="#home">
              <NotificationsRounded fontSize="medium" />
              <br />
              <span className="icon-text text-dark">Notifications</span>
            </Nav.Link>
            <Nav.Link className="text-center" href="#features">
              <AppRegistration fontSize="small" />
              <br />
              <span className="icon-text text-dark">Bookings</span>
            </Nav.Link>
            <Nav.Link className="text-center" href="#pricing">
              <AccountCircle fontSize="medium" />
              <br />
              <span className="icon-text text-dark">Profile</span>
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
