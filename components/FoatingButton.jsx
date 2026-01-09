import Image from 'next/image';
import call from '@/public/images/call.png';


export default function FloatingButton() {
  return (
    <div className="fixed bottom-10 right-6 z-50 flex gap-3">
      <a href="tel:9810082424" aria-label="Call 24x7 Support">
        <div className="bg-white p-2.5   rounded-full shadow-2xl border-2 border-[#910606] hover:shadow-xl transition-shadow duration-300 animate-bounce">
          <Image src={call} alt="Call Icon" width={40} height={40} className="rounded-full" />
        </div>
      </a>
      <a href="" aria-label="Call 24x7 Support">
        
          {/* <a href="https://wa.me/919810082424?text=Hello%20I%20want%20to%20connect">
            <img src="https://img.icons8.com/?size=60&id=QkXeKixybttw&format=png&color=000000" alt="" className='duration-300 animate-bounce'/>
          </a> */}
        
      </a>
    </div>
  );
}
