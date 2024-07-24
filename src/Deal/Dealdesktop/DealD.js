import './Dealdesk.css'
import deal1 from './deal1.webp'
import deal2 from './deal2.webp'
import deal3 from './deal3.webp'
import deal4 from './deal4.webp'
import deal5 from './deal5.webp'
import deal6 from './deal6.webp'


export default function DealD(){
    return(
        <>
        <section>
            <div className="deal-d-head">
                <h2> Today's Deals</h2>
                <a href='#H' className='link'>See all items</a>
            </div>

            <div className='deals'>
                <div className='deal-list'>
                    {/* First deal */}
                    <div className='deal'>
                        <div className='deal-in-1'>
                            <img src={deal1} alt='deal1' className='deal-img' />
                        </div>
                        <div className='deal-in-2'>
                            <h3>MTN 4G LTE MiFi - M30S</h3>
                            <div className='price'>
                                <span className='price1'>₦7,500</span>
                                <span className='price2'>₦12,000</span>
                            </div>
                            <div className='saves'>
                                <span className='save'> You save ₦4,500</span>
                            </div>
                        </div>
                    </div>

                    {/* Second deal */}
                    <div className='deal'>
                        <div className='deal-in-1'>
                        <img src={deal2} alt='deal1' className='deal-img' />
                        </div>
                        <div className='deal-in-2'>
                        <h3>Zinox Ultrabook - 14" Intel Core...</h3>
                            <div className='price'>
                                <span className='price1'>₦178,500</span>
                                <span className='price2'>₦196,350</span>
                            </div>
                            <div className='saves'>
                                <span className='save'> You save ₦17,850</span>
                            </div>
                        </div>
                    </div>

                    {/* Third deal */}
                    <div className='deal'>
                        <div className='deal-in-1'>
                        <img src={deal3} alt='deal1' className='deal-img' />
                        </div>
                        <div className='deal-in-2'>
                        <h3>iTEC Itec 16" Rechargeable Stand...</h3>
                            <div className='price'>
                                <span className='price1'>₦29,160</span>
                                <span className='price2'>₦31,520</span>
                            </div>
                            <div className='saves'>
                                <span className='save'> You save  ₦2,360</span>
                            </div>
                        </div>
                    </div>

                   {/* Fourth deal */}
                    <div className='deal'>
                        <div className='deal-in-1'>
                        <img src={deal4} alt='deal1' className='deal-img' />
                        </div>
                        <div className='deal-in-2'>
                        <h3>Dixon 43-inch Full Hd Led Tv + F...</h3>
                            <div className='price'>
                                <span className='price1'>₦85,000</span>
                                <span className='price2'>₦120,000</span>
                            </div>
                            <div className='saves'>
                                <span className='save'> You save  ₦35,000</span>
                            </div>
                        </div>
                    </div>

                    {/* Fifth deal */}
                    <div className='deal'>
                        <div className='deal-in-1'>
                        <img src={deal5} alt='deal1' className='deal-img' />
                        </div>
                        <div className='deal-in-2'>
                        <h3>Philips Daily Blender Collection...</h3>
                            <div className='price'>
                                <span className='price1'>₦28,870</span>
                                <span className='price2'>₦25,128.21</span>
                            </div>
                            {/* <div className='saves'>
                                <span className='save'> You save  ₦35,000</span>
                            </div> */}
                        </div>
                    </div>

                    {/* Sixth deal */}
                    <div className='deal'>
                        <div className='deal-in-1'>
                        <img src={deal6} alt='deal1' className='deal-img' />
                        </div>
                        <div className='deal-in-2'>
                        <h3>Samsung Galaxy A12 - 6.5'' - 128...</h3>
                            <div className='price'>
                                <span className='price1'>₦109,999</span>
                                {/* <span className='price2'>₦25,128.21</span> */}
                            </div>
                        </div>
                    </div>






                </div>
            </div>
        </section>
        </>
    )
}