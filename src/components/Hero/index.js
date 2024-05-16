import Image from 'next/image'
import Poppies from '../../../public/images/poppies.jpg'

const Hero = () => {
    return (
        <Image src={Poppies} alt="Poppies" 
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover"
        }}/>      
    )
}

export default Hero