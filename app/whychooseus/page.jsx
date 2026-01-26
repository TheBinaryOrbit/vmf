import { createMetadata } from "@/config/seo";
import backgroundimage from '@/public/images/backgound.png';
import HeroBanner from '../../components/HeroBanner';
import WhyChooseUs from '@/components/WhyChooseUs';

export const metadata = createMetadata("whyChooseUs");

export default function page() {
    return (
        <div>

            <HeroBanner
                pretitle="Why Choose Us"
                title="Why Choose Us"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, possimus."
                backgroundImage={backgroundimage}
            />

            <WhyChooseUs />
        </div>
    )
}