import './Cates.css'
import cate1 from './cate1.webp';
import cate2 from './cate2.webp';
import cate3 from './cate3.webp';
import cate4 from './cate4.jpg';
import cate5 from './cate5.webp';
import cate6 from './cate6.webp';


export default function Cate(){
    return(
        <>
        <section>
            <div className="cate-box-main">
                <div className='cate-box'>

                    <div className='cate-list'>
                        <img src={cate1} alt='cate1' className='cate-img' />
                    </div>

                    <div className='cate-list'>
                        <img src={cate2} alt='cate1' className='cate-img' />
                    </div>

                    <div className='cate-list'>
                        <img src={cate3} alt='cate1' className='cate-img' />
                    </div>

                    <div className='cate-list'>
                        <img src={cate4} alt='cate1' className='cate-img' />
                    </div>

                    <div className='cate-list'>
                        <img src={cate5} alt='cate1' className='cate-img' />
                    </div>

                    <div className='cate-list'>
                        <img src={cate6} alt='cate1' className='cate-img' />
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}