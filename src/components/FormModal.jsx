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
            className="custom-modal"
        >
            <div className="flex items-center justify-center align-center h-dvh overscroll-none">
                <div className="place-items-center max-w-xl bg-rosy rounded-md shadow-lg p-10">
                    <h2 className="text-2xl font-bold mb-4 text-center text-dark-grey ">
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
                </div>
            </div>
        </ReactModal>
    );
};

export default FormModal;
