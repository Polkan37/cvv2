import Image from 'next/image';
import BasicUserInfo from './BasicUserInfo';

export default function Hero() {
    return(
      <div className="content-container hero-2">
        <div className="small-corners"><div></div><div></div><div></div><div></div></div>
        <BasicUserInfo />
        <Image 
            src="/warrior.webp" 
            alt="warrior character"
            width={500}
            height={700}
            className="person"
            priority
          />
          <div className="box">Chamfered Box</div>
      </div>
    );
}


        {/* <div className="hero">
          <Image 
            src="/warrior.webp" 
            alt="warrior character"
            width={500}
            height={700}
            className="person"
            priority
          />
        </div> */}