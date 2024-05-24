import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";

function BookingForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-warning" closeButton>
          <Modal.Title>Booking Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="bg-light-subtle">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Pickup Address</Form.Label>
              <Form.Control type="text" placeholder="Hastinapuram" autoFocus required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" required>
              <Form.Label>Drop Address</Form.Label>
              <Form.Control type="text" placeholder="Siddipet"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Duration in Hours</Form.Label>
              <Form.Control type="number" placeholder="20"   required/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookingForm;
