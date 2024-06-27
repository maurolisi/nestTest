import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Example = ({ children, title }, handleCloseExt) => {
  const [show, setShow] = useState(true);
  if(children==false){() => setShow(false)};
  const handleClose = () => {
    setShow(false);
    history.back();
  };
  const handleShow = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        //centered
        //fullscreen={true}
      >
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default Example;