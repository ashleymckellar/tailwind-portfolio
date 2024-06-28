// import { useState, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
// import FormModal from './FormModal';

// const ContactForm = () => {
//     const [inputs, setInputs] = useState({
//         name: '',
//         subject: '',
//         email: '',
//         message: '',
//     });

//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [requiredFieldError, setRequiredFieldError] = useState('');

//     const isDisabled = !(inputs.name && inputs.email && inputs.message);

//     const hasError = !(inputs.name && inputs.email && inputs.message);

//     const [showModal, setShowModal] = useState(false);

//     useEffect(() => {
//         console.log('showModal updated:', showModal);
//     }, [showModal]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
//     };

//     const sendEmail = (e) => {
//         e.preventDefault();
//         emailjs
//             .sendForm(
//                 'service_4yu24wb',
//                 'contact_form',
//                 e.target,
//                 'arI1lbCnWE-Tlm6HA',
//             )
//             .then(
//                 (result) => {
//                     console.log(result.text);
//                 },
//                 (error) => {
//                     console.log(error.text);
//                 },
//             );
//         setIsSubmitted(true);
//         console.log(inputs);
//         handleOpenModal();
//         console.log(showModal);

//         console.log('submitted form!');

//         setInputs({ name: '', email: '', subject: '', message: '' });
//     };

//     const onRequiredBlur = (e) => {
//         const { name, value } = e.target;
//         console.log(name, value);
//         if (!isSubmitted) {
//             if (value === '') {
//                 setRequiredFieldError(
//                     'Please enter a value in required fields.',
//                 );
//             } else {
//                 setRequiredFieldError('');
//             }
//         }
//     };

//     const handleBlur = (e) => {
//         const { name, value } = e.target;
//         if (name === 'name' && value === '') {
//             setRequiredFieldError('Name is a required field.');
//         } else if (name === 'email' && value === '') {
//             setRequiredFieldError('Email address is a required field');
//         } else if (name === 'message' && value === '') {
//             setRequiredFieldError('Message is a required field.');
//         } else {
//             setRequiredFieldError('');
//         }
//     };

//     const handleOpenModal = () => {
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     return (
//         <div className="p-20 my-20 flex-col justify-center ">
//             <div className="'flex flex-col items-center w-full-div" id="Contact">
//                 <h3>Contact me</h3>
//                 <p>Interested in working with me? Let's get in touch.</p>
//                 <div className="'flex flex-col items-center w-full ">
//                     <form onSubmit={sendEmail}>
//                         <div className="py-10">
//                             <p className="required-field">* Required field</p>
//                         </div>
//                         <div >
//                             <div className="py-5">
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={inputs.name}
//                                     onChange={handleChange}
//                                     placeholder="Name *"
//                                     onBlur={handleBlur}
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     value={inputs.email}
//                                     onChange={handleChange}
//                                     placeholder="Email *"
//                                     onBlur={handleBlur}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="py-5">
//                             <input
//                                 type="text"
//                                 id="subject"
//                                 name="subject"
//                                 value={inputs.subject}
//                                 onChange={handleChange}
//                                 placeholder="Subject"
//                                 onBlur={handleBlur}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <textarea
//                                 id="message"
//                                 name="message"
//                                 value={inputs.message}
//                                 onChange={handleChange}
//                                 placeholder="Message *"
//                                 onBlur={handleBlur}
//                                 rows="4"
//                                 required
//                             />
                          
//                         </div>
//                         {hasError && (
//                                 <div className="validation-error">
//                                     <h3>{requiredFieldError}</h3>
//                                 </div>
//                             )}
//                         <div className="inline-flex items-center bg-purple-500 border-0 py-2 px-4 text-white rounded-full

// ">
//                             <button
//                                 type="submit"
//                                 className="bg-rose text-white rounded-md p-2 border-none"
//                                 disabled={isDisabled}
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                     <FormModal
//                         show={showModal}
//                         handleClose={handleCloseModal}
//                         setShowModal={setShowModal}
//                     ></FormModal>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import FormModal from './FormModal';

const ContactForm = () => {
    const [inputs, setInputs] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [requiredFieldError, setRequiredFieldError] = useState('');

    const isDisabled = !(inputs.name && inputs.email && inputs.message);

    const hasError = !(inputs.name && inputs.email && inputs.message);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log('showModal updated:', showModal);
    }, [showModal]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_4yu24wb',
                'contact_form',
                e.target,
                'arI1lbCnWE-Tlm6HA',
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
        setIsSubmitted(true);
        console.log(inputs);
        handleOpenModal();
        console.log(showModal);

        console.log('submitted form!');

        setInputs({ name: '', email: '', subject: '', message: '' });
    };

    const onRequiredBlur = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        if (!isSubmitted) {
            if (value === '') {
                setRequiredFieldError(
                    'Please enter a value in required fields.',
                );
            } else {
                setRequiredFieldError('');
            }
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (name === 'name' && value === '') {
            setRequiredFieldError('Name is a required field.');
        } else if (name === 'email' && value === '') {
            setRequiredFieldError('Email address is a required field');
        } else if (name === 'message' && value === '') {
            setRequiredFieldError('Message is a required field.');
        } else {
            setRequiredFieldError('');
        }
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="p-20 my-20 flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-2xl bg-white p-10 rounded-md shadow-lg" id="Contact">
                <h3 className="text-2xl mb-4 text-center">Contact me</h3>
                <p className="mb-10 text-center">Interested in working with me? Let's get in touch.</p>
                <form onSubmit={sendEmail}>
                    <div className="mb-4">
                        <p className="required-field text-red-500">* Required field</p>
                    </div>
                    <div className="mb-6">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={inputs.name}
                            onChange={handleChange}
                            placeholder="Name *"
                            onBlur={handleBlur}
                            required
                            className="w-full px-3 py-2 border-none focus:border-none focus:outline-none"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={inputs.email}
                            onChange={handleChange}
                            placeholder="Email *"
                            onBlur={handleBlur}
                            required
                            className="w-full px-3 py-2 border-none focus:border-none focus:outline-none"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={inputs.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            onBlur={handleBlur}
                            className="w-full px-3 py-2 border-none focus:border-none focus:outline-none"
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            id="message"
                            name="message"
                            value={inputs.message}
                            onChange={handleChange}
                            placeholder="Message *"
                            onBlur={handleBlur}
                            rows="4"
                            required
                            className="w-full px-3 py-2 border-none focus:border-none focus:outline-none"
                        />
                    </div>
                    {hasError && (
                        <div className="validation-error mb-4 text-red-500">
                            <h3>{requiredFieldError}</h3>
                        </div>
                    )}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-lilac text-white py-2 px-6 rounded-full border-none focus:border-none focus:outline-none"
                            disabled={isDisabled}
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <FormModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    setShowModal={setShowModal}
                ></FormModal>
            </div>
        </div>
    );
};

export default ContactForm;

