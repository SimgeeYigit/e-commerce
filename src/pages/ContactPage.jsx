import { Contact } from 'lucide-react';
import ContactHeader from '../components/contact/ContactHeader';
import ContactHero from '../components/contact/ContactHero';
import Visit from '../components/contact/Visit';
import Footer from '../layout/Footer';
import Header from "../layout/Header";

function ContactPage() {
    return (
        <div>
            <Header />
            <ContactHero />
            <Visit />
            <Footer padding='md:px-[180px] px-[42px]' />
        </div>
    )
}

export default ContactPage;