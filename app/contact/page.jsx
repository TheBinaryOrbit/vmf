import HeroBanner from "@/components/HeroBanner";
import backgroundimage from '@/public/images/backgound.png';
import Contact from "@/components/Contact";
export default function ContactPage() {
    return (
        <>

            <HeroBanner
                pretitle={'Get in Touch'}
                title={'Contact Us'}
                description={'Feel free to reach out to us with any questions or comments.'}
                backgroundImage={backgroundimage}
            />

            <Contact />


        </>
    );
}