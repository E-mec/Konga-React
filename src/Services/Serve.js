import serve1 from './serve1.webp'
import serve2 from './serve2.webp'
import serve3 from './serve3.webp'
import serve4 from './serve4.webp'
import serve5 from './serve5.webp'
import serve6 from './serve6.webp'
import './Serv.css';


export default function Serve(){
    return(
        <>
        <section>
            <div className="serve-grid">
                <div className="service">
                    <img src={serve1} alt='serve' className='serve'/>
                </div>
                <div className="service">
                <img src={serve2} alt='serve' className='serve'/>
                </div>
                <div className="service">
                <img src={serve3} alt='serve' className='serve'/>
                </div>
                <div className="service">
                <img src={serve4} alt='serve' className='serve'/>
                </div>
                <div className="service">
                <img src={serve5} alt='serve' className='serve'/>
                </div>
                <div className="service">
                <img src={serve6} alt='serve' className='serve'/>
                </div>
            </div>
        </section>
        </>
    )
}