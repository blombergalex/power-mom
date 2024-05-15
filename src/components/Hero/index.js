import Image from 'next/image'
import Poppies from '../../../public/images/poppies.jpg'

const Hero = () => {
    return (
        <Image src={Poppies} alt="Poppies"
        style={{
            width: "100%",
            height: "auto"
        }}/>
    )
}

export default Hero