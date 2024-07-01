import './index.css';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';

function App() {
    return (
        <div className="bg-off-white">
            <Navbar />
            <Summary />
            <Skills />
            <Projects />
            <ContactForm />
        </div>
    );
}

export default App;
