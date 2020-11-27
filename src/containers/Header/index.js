import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Modal from '../../components/Modal';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (e, show) => {
    e.preventDefault();
    setShowModal(show);
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={'/'} className="navbar-brand">Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to={'/posts'}>API Example</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/form'}>Formik Example</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={(e) => toggleModal(e, true)}>Open Modal</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Modal
        showModal={showModal}
        hideModal={(e) => toggleModal(e, false)}
        title="Modal header"
      >
        This is modal content
      </Modal>
    </React.Fragment>
  )
}
