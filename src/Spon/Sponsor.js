import sp1 from './sp1.webp'
import sp2 from './sp2.webp'
import sp3 from './sp3.webp'
import sp4 from './sp4.webp'
import sp5 from './sp5.webp'
import sp6 from './sp6.webp'
import sp7 from './sp7.webp'
import sp8 from './sp8.webp'
import sp9 from './sp9.webp'
import sp10 from './sp10.webp'
import sp11 from './sp11.webp'
import sp12 from './sp12.webp'
import './Spon.css'

export default function Sponsor(){
    return(
        <>
        <section>
        <div className='spon-wrap'>
            <div className='spon1'>
                <div className='sp'>
                    <img src={sp1} alt='sp1' className='sp-img'/>
                </div>
                <div className='sp'>
                    <img src={sp2} alt='sp2' className='sp-img'/>
                </div>
                <div className='sp'>
                    <img src={sp3} alt='sp3' className='sp-img'/>
                </div>
                <div className='sp'>
                    <img src={sp4} alt='sp4' className='sp-img'/>
                </div>
                <div className='sp'>
                    <img src={sp5} alt='sp5' className='sp-img'/>
                </div>
                <div className='sp spx'>
                    <img src={sp6} alt='sp6' className='sp-img'/>
                </div>
                </div>

                <div className='spon2'>
                <div className='sp'>
                    <img src={sp7} alt='sp7' className='sp-img'/>
                </div>
                <div className='sp'>
                    <img src={sp8} alt='sp8' className='sp-img'/>
                </div>
                <div className='sp'>
                    <img src={sp9} alt='sp9' className='sp-img'/>
                </div>
                <div className='sp'>
                    <img src={sp10} alt='sp10' className='sp-img'/>
                </div>
                <div className='sp'>
                    <img src={sp11} alt='sp11' className='sp-img'/>
                </div>
                <div className='sp spx'>
                    <img src={sp12} alt='sp12' className='sp-img'/>
            </div>
            </div>


            </div>
            </section>
        </>
    )
}