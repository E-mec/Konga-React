import './F-Desk.css';
import f1 from './f1.webp';
import f2 from './f2.jpg';
import f3 from './f3.webp'
import f4 from './f4.webp'


export default function FourDesktop() {
    return(
        <>
        <section>
            <div>
                <ul className='f-main'>
                    <li className='four'>
                        <div className='f-img'>
                            <img src={f1} alt='Four' />
                        </div>
                        <section className='txt'>
                            <h2>HOME FURNISHINGS</h2>
                            <p>Get Up To 70% Off</p>
                            <p className='p'>SHOP NOW <i class="fa-solid fa-angle-right"></i></p>
                        </section>
                    </li>

                    <li className='four'>
                        <div className='f-img'>
                            <img src={f2} alt='Four' />
                        </div>
                        <section className='txt'>
                            <h2>FITNESS TOOLS & EQUIPMENT</h2>
                            <p>Get Fitness Equipment At Amazing Discounts!</p>
                            <p className='p'>SHOP NOW <i class="fa-solid fa-angle-right"></i></p>
                        </section>
                    </li>

                    <li className='four'>
                        <div className='f-img'>
                            <img src={f3} alt='Four' />
                        </div>
                        <section className='txt'>
                            <h2>KID WEARS & ACCESSORIES</h2>
                            <p className='o'>Get All Kiddies Products At Huge Discount!</p>
                            <p className='p pp'>SHOP NOW <i class="fa-solid fa-angle-right"></i></p>
                        </section>
                    </li>

                    <li className='four'>
                        <div className='f-img'>
                            <img src={f4} alt='Four'/>
                        </div>
                        <section className='txt'>
                            <h2>TOP DEALS ON TELEVISIONS</h2>
                            <p>Get the TV You Want With Bargain Deals!</p>
                            <p className='p'>SHOP NOW <i class="fa-solid fa-angle-right"></i></p>
                        </section>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}