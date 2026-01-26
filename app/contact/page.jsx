import { createMetadata } from "@/config/seo";
import HeroBanner from "@/components/HeroBanner";
import backgroundimage from '@/public/images/backgound.png';
import Contact from "@/components/Contact";

export const metadata = createMetadata("contact");

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