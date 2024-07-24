import './Sproducts.css';
import sprod1 from './sprod1.webp'
import sprod2 from './sprod2.webp'
import sprod3 from './sprod3.webp'
import sprod4 from './sprod4.webp'
import sprod5 from './sprod5.webp'
import sprod6 from './sprod6.webp'
import sprod7 from './sprod7.webp'
import sprod8 from './sprod8.webp'
import sprod9 from './sprod9.webp'
import sprod10 from './sprod10.webp'



export default function Sprod(){
    return(
        <>
        <section>
            <div className="sprod-head-box">
                <h2 className="sprod-head">
                    Sponsored Products
                </h2>
            </div>
            <div className="sprod-prods-box">
                <ul className="sprod-prods">
                    <li className="sprod-product">
                        <div className='sprod-link'>
                            <div className="sprod-img-box">
                                <img src={sprod1} alt="sprod1" className="sprod-img" />
                            </div>
                            <div className="sprod-text-box">
                                <h3 className="sprod-name">Superlife Stc30</h3>
                                <div className="sprod-amount">
                                    <span className="sprod-amount-new">₦10,500</span>
                                    <span className="sprod-amount-old">₦26,000</span>
                                </div>
                                <div className="sprod-amount-save">
                                    <span className="sprod-save">You save ₦15,500</span>
                                    <span className="sprod-num"></span>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li className="sprod-product">
                        <div className='sprod-link'>
                            <div className="sprod-img-box">
                                <img src={sprod2} alt="sprod1" className="sprod-img" />
                            </div>
                            <div className="sprod-text-box">
                                <h3 className="sprod-name">Faforon Herbal - 540ml</h3>
                                <div className="sprod-amount">
                                    <span className="sprod-amount-new">₦8,000</span>
                                    <span className="sprod-amount-old">₦11,000</span>
                                </div>
                                <div className="sprod-amount-save">
                                    <span className="sprod-save">You save ₦3,000</span>
                                    <span className="sprod-num"></span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="sprod-product">
                        <div className='sprod-link'>
                            <div className="sprod-img-box">
                                <img src={sprod3} alt="sprod1" className="sprod-img" />
                            </div>
                            <div className="sprod-text-box">
                                <h3 className="sprod-name">Herbal Stem Cell - 540ml</h3>
                                <div className="sprod-amount">
                                    <span className="sprod-amount-new">₦8,000</span>
                                    <span className="sprod-amount-old">₦20,000</span>
                                </div>
                                <div className="sprod-amount-save">
                                    <span className="sprod-save">You save ₦12,000</span>
                                    <span className="sprod-num"></span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="sprod-product">
                        <div className='sprod-link'>
                            <div className="sprod-img-box">
                                <img src={sprod4} alt="sprod1" className="sprod-img" />
                            </div>
                            <div className="sprod-text-box">
                                <h3 className="sprod-name">Superlife STC 30 Therapy - ...</h3>
                                <div className="sprod-amount">
                                    <span className="sprod-amount-new">₦42,000</span>
                                    <span className="sprod-amount-old">₦100,000</span>
                                </div>
                                <div className="sprod-amount-save">
                                    <span className="sprod-save">You save ₦58,000</span>
                                    <span className="sprod-num"></span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="sprod-product">
                        <div className='sprod-link'>
                            <div className="sprod-img-box">
                                <img src={sprod5} alt="sprod1" className="sprod-img" />
                            </div>
                            <div className="sprod-text-box">
                                <h3 className="sprod-name">Double Stem Cell - 14 Sache...</h3>
                                <div className="sprod-amount">
                                    <span className="sprod-amount-new">₦13,500</span>
                                    <span className="sprod-amount-old"></span>
                                </div>
                                <div className="sprod-amount-save">
                                    <span className="sprod-save"></span>
                                    <span className="sprod-num"></span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="sprod-product">
                        <div className='sprod-link'>
                            <div className="sprod-img-box">
                                <img src={sprod6} alt="sprod1" className="sprod-img" />
                            </div>
                            <div className="sprod-text-box">
                                <h3 className="sprod-name">Stc30 Stem Cell Therapy - 1...</h3>
                                <div className="sprod-amount">
                                    <span className="sprod-amount-new">₦10,500</span>
                                    <span className="sprod-amount-old"></span>
                                </div>
                                <div className="sprod-amount-save">
                                    <span className="sprod-save"></span>
                                    <span className="sprod-num"></span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="sprod-product">
                        <div className='sprod-link'>
                            <div className="sprod-img-box">
                                <img src={sprod7} alt="sprod1" className="sprod-img" />
                            </div>
                            <div className="sprod-text-box">
                                <h3 className="sprod-name">Ginkgo Biloba - 90 Tablets</h3>
                                <div className="sprod-amount">
                                    <span className="sprod-amount-new">₦9,000</span>
                                    <span className="sprod-amount-old"></span>
                                </div>
                                <div className="sprod-amount-save">
                                    <span className="sprod-save"></span>
                                    <span className="sprod-num"></span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="sprod-product">
                        <div className='sprod-link'>
                            <div className="sprod-img-box">
                                <img src={sprod8} alt="sprod1" className="sprod-img" />
                            </div>
                            <div className="sprod-text-box">
                                <h3 className="sprod-name">Double Root Coffee</h3>
                                <div className="sprod-amount">
                                    <span className="sprod-amount-new">₦9,000</span>
                                    <span className="sprod-amount-old">₦12,000</span>
                                </div>
                                <div className="sprod-amount-save">
                                    <span className="sprod-save">You save ₦3,000</span>
                                    <span className="sprod-num"></span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="sprod-product">
                        <div className='sprod-link'>
                            <div className="sprod-img-box">
                                <img src={sprod9} alt="sprod1" className="sprod-img" />
                            </div>
                            <div className="sprod-text-box">
                                <h3 className="sprod-name">Vitamin B1 100 Mg</h3>
                                <div className="sprod-amount">
                                    <span className="sprod-amount-new">₦9,500</span>
                                    <span className="sprod-amount-old"></span>
                                </div>
                                <div className="sprod-amount-save">
                                    <span className="sprod-save"></span>
                                    <span className="sprod-num"></span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="sprod-product">
                        <div className='sprod-link'>
                            <div className="sprod-img-box">
                                <img src={sprod10} alt="sprod1" className="sprod-img" />
                            </div>
                            <div className="sprod-text-box">
                                <h3 className="sprod-name">Dosevital Royal Honey - 15g...</h3>
                                <div className="sprod-amount">
                                    <span className="sprod-amount-new">₦4,900</span>
                                    <span className="sprod-amount-old">₦7,500</span>
                                </div>
                                <div className="sprod-amount-save">
                                    <span className="sprod-save">You save ₦2,600</span>
                                    <span className="sprod-num"></span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}