import flame3D from '../imagenes/3d.png';
import '../App.css';
import check from '../imagenes/check-icon.png';

export default function Main () {
    return (
        <div className="grid grid-cols-2 items-center">
            <div className="flex flex-col p-10">
                <div className="text-5xl leading-tight font-bold mb-6">
                    <h1>Free-speech platform where ideas <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400'>ignite!</span></h1>
                </div>
                <div className="text-xl font-medium mb-6">
                    <p>Ignite your content and let the audience fan your creations</p>
                </div>
                <div className='mb-6'>
                    <button className='text-white text-xl font-bold p-3 rounded-xl bg-gradient-to-r from-red-500 to-yellow-400 hover:scale-110'>Get Started</button> 
                </div>
                <div className='mb-6'>
                    <div className='flex'>
                        <img className="h-6 mr-2 mb-2" src={check} alt="check icon"/>
                        <p>Own your content</p>
                    </div>
                    <div className='flex'>
                        <img className="h-6 mr-2" src={check} alt="check icon"/>
                        <p>Monetize your audience</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img className="w-96" src={flame3D} alt="logo flame"/>
            </div>
        </div>
    );
  };
