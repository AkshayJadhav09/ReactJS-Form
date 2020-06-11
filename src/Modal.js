import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleShow}>
                Demo modal
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body closeButton>
                    Form

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" color="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Example;
