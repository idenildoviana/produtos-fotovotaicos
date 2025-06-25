
import Image from "next/image"
import  Logo  from '../../public/solarapp-logo-1563f44c.svg'
import IconSuport from '../../public/Vector.png'
import Link from "next/link"
export default function Header(){
    return( 
        
    <div className="text-black bg-white"> 
        <div className="mx-16 flex items-center text-center justify-between">
            <Image 
            src={Logo}
            alt="SolarApp Logo "
        />
        <h1 className="text-4xl text-[#0F3B5F] font-bold">Produtos Fotovotaicos</h1>

        <button className=" bg-[#EDEDED] p-2  rounded-2xl">
            <Link href="https://www.google.com/search?q=https://wa.me/5591985979736%3Ftext%3DOl%25C3%25A1%252C%2Bestou%2Bcom%2Bd%25C3%25BAvida%2Bde%2Bcomo%2Bcadastrar%2Bprodutos">
            <Image
            src={IconSuport}
            alt="Icon Suporte"
            />
            </Link>

        </button>
        </div>
    </div>
    )
}