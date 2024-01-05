import { useRef } from "react";

const ModalWindow = () => {

    const modalRef = useRef(null)

    const openModal = () => {
        modalRef.current.classList.add('active')
    }

    const closeModal = () => {
        modalRef.current.classList.remove('active')
    }

    return ( 
        <div>
            <h1>Modal Window</h1>
            <button onClick={openModal}> Open Modal</button>

            <div ref={modalRef} className="modal-overlay">
                <div className="modal">
                    <h2>It is The Modal Window</h2>
                    <p>some text...</p>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;