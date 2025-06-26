
import Image from 'next/image'
import Link from 'next/link'
import LogoInsta from '../../public/new-instagram-logo-glyph.png'
import LogoYou from '../../public/free-youtube-icon-123-thumb.png'
import LogoWaht from '../../public/whatsapp.png'

export default function Footer(){
    return(
        <div>
                  
      <footer className="bg-blue-900 items-center justify-center text-white text-center p-4 mt-8">
        <div>
          <p>Conheça nossas redes Sociais</p>
        <div className='flex p-4 gap-4 justify-center  text-white'>
          
          <Link href={'https://www.instagram.com/solarappoficial?utm_source=ig_web_button_share_sheet&igsh=MXFnZXNtYWxvMjQzag=='}>
          
        <Image 
        src={LogoInsta}
        alt='Logo Instagram'
        width={30}
        height={30}/>
        </Link>

        <Link href={'https://www.google.com/search?q=https://wa.me/556740427174%3Ftext%3DGostaria%2520de%2520Conhecer%2520mais%2520a%2520SolarApp.'}>
        <Image 
        src={LogoWaht}
        alt='Logo Whatsapp'
        width={30}
        height={30}/>
        </Link>

        <Link href={'https://www.youtube.com/@solarappoficial'}>
        <Image 
        src={LogoYou}
        alt='Logo Youtube'
        width={30}
        height={30}/>
        </Link>
        </div>
    
        </div>

        <p>&copy; 2025 SolarApp. Todos os direitos reservados.</p>
        </footer>
        </div>
    )
}