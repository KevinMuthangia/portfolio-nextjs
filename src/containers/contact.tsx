import ContactInfo from '@/components/contact-info';
import ContactForm from '@/components/contactForm';
import SectionTitle from '@/components/section-title';

const Contact = () => {
  return (
    <section data-section="contact" id='contact'>
        <SectionTitle title='Contact' subtitle='Get in touch' />
        <div className="py-6 sm:py-12 flex flex-col-reverse md:flex-row gap-12">
            <ContactForm />
            <div className='flex-1'>
                <h3 className='md:col-span-2 text-xl capitalize text-secondary mb-6'>Contact info</h3>
                <ContactInfo />
            </div>
        </div>
    </section>
  )
}

export default Contact