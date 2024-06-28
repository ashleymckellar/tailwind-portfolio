import './index.css';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
    return (
        <div className='bg-rosy'>
            <Navbar />
            <Summary />
            <Projects />
            <ContactForm />
        </div>
    );
}

export default App;
