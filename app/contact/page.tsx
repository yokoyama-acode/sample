import ContactForm from './components/contactForm';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function ContactPage() {
  return (
    <div id="container">
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}