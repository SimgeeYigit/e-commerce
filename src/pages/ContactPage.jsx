import { Contact } from 'lucide-react';
import ContactHeader from '../components/contact/ContactHeader';
import ContactHero from '../components/contact/ContactHero';
import Visit from '../components/contact/Visit';
import Footer from '../layout/Footer';

function ContactPage() {
    return (
        <div>
            <ContactHeader />
            <ContactHero />
            <Visit />
            <Footer padding='px-[180px]' />
        </div>
    )
}

export default ContactPage;