
import Image from "next/image"
import  Logo  from '../../public/solarapp-logo-1563f44c.svg'
import IconSuport from '../../public/Vector.png'
import Link from "next/link"
export default function Header(){
    return( 
        
    <div className="text-black bg-white shadow-sm "> 
        <div className="mx-8 sm:mx-16 flex items-center text-center justify-between">
            <Image 
            className="w-20 h-20 sm:w-auto sm:h-auto"
            src={Logo}
            alt="SolarApp Logo "
        />
        <h1 className=" text-xl sm:text-4xl text-[#0F3B5F] font-bold">Produtos Fotovotaicos</h1>

        <button className=" hover:bg-gray-300 bg-[#EDEDED] p-1 sm:p-2  rounded-2xl">
            <Link href="https://www.google.com/search?q=https://wa.me/5591985979736%3Ftext%3DOl%25C3%25A1%252C%2Bestou%2Bcom%2Bd%25C3%25BAvida%2Bde%2Bcomo%2Bcadastrar%2Bprodutos">
            <Image className="w-6 h-6 sm:w-8 sm:h-8"
            src={IconSuport}
            alt="Icon Suporte"
            />
            </Link>

        </button>
        </div>
    </div>
    )
}