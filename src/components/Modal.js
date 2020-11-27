import React, { useEffect } from 'react';
import BSNModal from 'bootstrap.native/dist/components/modal-native.esm.js'

const Modal = (props) => {
  let modalInstance;

  useEffect(() => {
    const modalEl = document.getElementById('react-modal');
    modalInstance = new BSNModal(modalEl);
  });
  
  useEffect(() => {
    if (props.showModal) {
      modalInstance.show();
    } else {
      modalInstance.hide();
    }
  }, [props.showModal])

  return (
    <div>
      <div className="modal fade" id="react-modal" tabIndex="-1" aria-labelledby="ReactModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
              <button type="button" className="close" onClick={props.hideModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;