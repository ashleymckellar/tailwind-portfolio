import ReactModal from 'react-modal';

const FormModal = (props) => {
    const { show, handleClose } = props;

    return (
        <ReactModal
            isOpen={show}
            onRequestClose={handleClose}
            contentLabel="Form Modal"
            className="custom-modal"
            overlayClassName="custom-overlay"
            center
        >
            <div className="bg-white p-6 rounded-md shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Request Sent</h2>
                <p className="text-lg mb-6">
                    Your request was sent, and I'll get back to you as soon as possible. Thanks!
                </p>
                <div className="flex justify-center">
                    <button
                        className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 focus:outline-none"
                        onClick={handleClose}
                    >
                        OK
                    </button>
                </div>
            </div>
        </ReactModal>
    );
};

export default FormModal;
