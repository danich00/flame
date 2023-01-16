import ConnectWallet from "./connectWallet";
import logo from '../imagenes/round-logo.png';
import '../App.css';

export default function Head () {
    return (
        <nav className="ml-10 grid grid-cols-12 items-center mr-10 h-24">
            <div className="h-16 col-span-2 flex items-center">
                <img src={logo} alt="Logo" className="h-12"/>
                <span className="text-2xl font-bold ml-3 mt-3">Flame</span>
            </div>
            <div className="col-start-4 col-span-4 flex text-lg font-bold justify-around">
                <a href="#" className="hover:text-amber-500">Home</a>
                <a href="#" className="hover:text-amber-500">About Us</a>
                <a href="#" className="hover:text-amber-500">Why flame?</a>
                <a href="#" className="hover:text-amber-500">Careers</a>
            </div>
            <div className="flex justify-end col-start-9 col-span-4">
                <ConnectWallet />
            </div>
            
        </nav>
        );
    }


