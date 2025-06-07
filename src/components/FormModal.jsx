import ReactModal from 'react-modal';
import { useEffect } from 'react';

const FormModal = (props) => {
    const { show, handleClose } = props;

    useEffect(() => {
        if (show) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [show]);

    return (
        <ReactModal
            isOpen={show}
            onRequestClose={handleClose}
            contentLabel="Form Modal"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 50,
                },
                content: {
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, 0)',
                    borderRadius: '8px',
                    padding: '2rem',
                    maxWidth: '400px',
                    background: '#fff',
                },
            }}
            className="custom-modal"
        >
            <h2 className="text-2xl font-bold mb-4 text-center text-dark-grey">
                Request Sent
            </h2>
            <p className="text-lg text-center mb-6 text-dark-grey">
                Your request was sent, and I'll get back to you as soon
                as possible. Thanks!
            </p>
            <div className="flex justify-center">
                <button
                    className="bg-purple-500 text-off-white py-2 px-4 rounded-full bg-lilac focus:outline-none"
                    onClick={handleClose}
                >
                    OK
                </button>
            </div>
        </ReactModal>
    );
};

export default FormModal;