import './FootD.css';




export default function FootDesk() {
    return(
        <>
        <footer>
            {/* First footer box */}
            <div className='foot1'>


                <div className='foot1-flex'>

                    {/* FOOT SUPPORT */}
                    <div className='foot1-sup'>

                        <div className='foot-sup-box'>
                            <div className='foot-sup-icon'>
                            <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div className='foot-sup-desc'>
                                <h3>EMAIL SUPPORT</h3>
                                <a href='top'>help@konga.com</a>
                            </div>
                        </div>

                        <div className='foot-sup-box'>
                            <div className='foot-sup-icon'>
                            <i class="fa-solid fa-phone"></i>
                            </div>
                            <div className='foot-sup-desc'>
                                <h3>PHONE SUPPORT</h3>

                                <a href='phone'>0708 063 5700, 0809 460 5555, 01 888 3435</a>
                            </div>
                        </div>

                        <div className='foot-sup-box'>
                            <div className='foot-sup-icon'>
                            <i class="fa-brands fa-whatsapp bd "></i>
                            </div>
                            <div className='foot-sup-desc'>
                                <h3>WHATSAPP</h3>

                                <a href='whatsapp'>0907 0038 400, 0809 4605555</a>
                            </div>
                        </div>

                    </div>

                    {/* FOOT OFFER DEALS */}
                    <div className='foot1-offer'>
                        <h3>GET LATEST DEALS</h3>
                        <p>Our best promotions sent to your inbox</p>
                    </div>


                    {/* FOOT EMAIL SUBSCRIBE */}
                    <form className='foot1-form'>
                        <input type='email' placeholder='Email Address' className='foot1-form-inp' />
                        <button className='foot1-btn'>Subscribe</button>
                    </form>
                </div>
            </div>



            {/* Second footer box */}

            <div className='foot2'>
                <div className='foot2-box'>

                    {/* FOOT2 MAIN BOX */}
                    <div className='foot2-main'>

                        {/* FOOT2 MAIN BOX 1 */}
                        <div className='foot2-main-1'>


                            <div className='foot2-main-box'>
                                <a href='about'>
                                    <h4>ABOUT KONGA</h4>
                                </a>

                                <ul>
                                    <li><a href='about'>Contact Us</a></li>
                                    <li><a href='about'>About Us</a></li>
                                    <li><a href='about'>Careers</a></li>
                                    <li><a href='about'>Our Blog</a></li>
                                    <li><a href='about'>Forum</a></li>
                                    <li><a href='about'>Terms & Conditions</a></li>
                                </ul>
                            </div>

                            <div className='foot2-main-box'>
                                <a href='about'>
                                    <h4>PAYMENT</h4>
                                </a>

                                <ul>
                                    <li><a href='about'>KongaPay</a></li>
                                    <li><a href='about'>Wallet</a></li>
                                    <li><a href='about'>Verve</a></li>
                                    <li><a href='about'>Mastercard</a></li>
                                    <li><a href='about'>Visa</a></li>
                                </ul>
                            </div>

                            <div className='foot2-main-box'>
                                <a href='about'>
                                    <h4>BUYING ON KONGA</h4>
                                </a>

                                <ul>
                                    <li><a href='about'>Buyer Safety Centre</a></li>
                                    <li><a href='about'>FAQs</a></li>
                                    <li><a href='about'>Delivery</a></li>
                                    <li><a href='about'>Konga Return Policy</a></li>
                                    <li><a href='about'>Digital Services</a></li>
                                    <li><a href='about'>Bulk Purchase</a></li>
                                </ul>
                            </div>

                            <div className='foot2-main-box'>
                                <a href='about'>
                                    <h4>MORE INFO</h4>
                                </a>

                                <ul>
                                    <li><a href='about'>Site Map</a></li>
                                    <li><a href='about'>Track My Order</a></li>
                                    <li><a href='about'>Privacy Policy</a></li>
                                    <li><a href='about'>Authentic Items Policy</a></li>
                                </ul>
                            </div>

                            <div className='foot2-main-box'>
                                <a href='about'>
                                    <h4>MAKE MONEY ON KONGA</h4>
                                </a>

                                <ul>
                                    <li><a href='about'>Become a Konga Affiliate</a></li>
                                </ul>
                            </div>


                        </div>

                        {/* FOOT2 MAIN BOX 2 */}
                        <div className='foot2-main-2'>

                            <div className='foot2-main-dwn'>
                                <h4>DOWNLOAD & CONNECT WITH US </h4>
                            </div>

                            <div className='foot2-download'>
                                <a href='down'>
                                    <div className='dwn-icon'>
                                    <svg fill="#FFFFFF" height="28" viewBox="0 0 24 28" width="24" aria-label="ios-download" class="" name="ios-download"><path d="M20.0449 14.8775C20.0077 11.3315 23.089 9.6309 23.2266 9.54641C21.4953 7.13961 18.7983 6.8099 17.8372 6.77178C15.542 6.55101 13.3586 8.05552 12.1937 8.05552C11.0318 8.05552 9.23429 6.80443 7.33072 6.8373C4.82897 6.87263 2.5222 8.2192 1.23402 10.3477C-1.36524 14.6324 0.568375 20.98 3.10179 24.455C4.33971 26.156 5.81584 28.0665 7.75395 27.9982C9.62033 27.9275 10.3261 26.8509 12.5826 26.8509C14.839 26.8509 15.4733 27.9982 17.4484 27.963C19.4568 27.9276 20.7292 26.2295 21.9586 24.5233C23.3801 22.5499 23.9655 20.6394 24 20.5414C23.9554 20.522 20.0837 19.113 20.0449 14.8775ZM16.3336 4.4713C17.3623 3.28573 18.0566 1.6409 17.8672 0C16.3855 0.0573124 14.5895 0.937616 13.5264 2.12051C12.5725 3.16985 11.7375 4.84465 11.9612 6.45274C13.6154 6.57535 15.3039 5.65419 16.3336 4.4713Z"></path></svg>
                                    </div>
                                    <div className='dwn-desc'>
                                        <p>Download on</p>
                                        <h3>App Store</h3>
                                    </div>
                                </a>

                                <a href='down'>
                                    <div className='dwn-icon'>
                                        <svg fill="#FFFFFF" height="28" viewBox="0 0 24 28" width="24" aria-label="android-download" class="" name="android-download"><path d="M1.74937 9.12988H1.6773C0.753343 9.12988 0 9.88196 0 10.7991V18.0664C0 18.9871 0.753343 19.7367 1.6773 19.7367H1.7506C2.67455 19.7367 3.42789 18.9846 3.42789 18.0664V10.799C3.42667 9.88196 2.67215 9.12988 1.74937 9.12988Z"></path><path d="M4.23047 20.8714C4.23047 21.7156 4.92371 22.4031 5.77197 22.4031H7.41924V26.3285C7.41924 27.2503 8.17498 28 9.09654 28H9.16861C10.0938 28 10.8483 27.2492 10.8483 26.3285V22.4031H13.1504V26.3285C13.1504 27.2503 13.9085 28 14.8301 28H14.901C15.8261 28 16.5794 27.2492 16.5794 26.3285V22.4031H18.2279C19.0749 22.4031 19.7682 21.7156 19.7682 20.8714V9.39648H4.23047V20.8714Z"></path><path d="M15.8693 2.43798L17.1777 0.428075C17.2618 0.301306 17.2246 0.127975 17.096 0.0454386C16.9687 -0.0382613 16.7944 -0.00356189 16.7115 0.126755L15.355 2.20606C14.3374 1.79116 13.2008 1.55802 12.0004 1.55802C10.7989 1.55802 9.66472 1.79116 8.64468 2.20606L7.29062 0.126755C7.20774 -0.00356189 7.03228 -0.0382613 6.90372 0.0454386C6.77517 0.127919 6.73791 0.301306 6.82201 0.428075L8.13163 2.43798C5.77067 3.58944 4.17871 5.7596 4.17871 8.24898C4.17871 8.40202 4.18835 8.55268 4.20155 8.70212H19.8005C19.8137 8.55268 19.8221 8.40202 19.8221 8.24898C19.8222 5.7596 18.229 3.58944 15.8693 2.43798ZM8.38395 6.03697C7.96943 6.03697 7.63301 5.70455 7.63301 5.29088C7.63301 4.8772 7.96943 4.54595 8.38395 4.54595C8.80087 4.54595 9.1349 4.87714 9.1349 5.29088C9.1349 5.70461 8.79847 6.03697 8.38395 6.03697ZM15.6158 6.03697C15.2012 6.03697 14.8648 5.70455 14.8648 5.29088C14.8648 4.8772 15.2012 4.54595 15.6158 4.54595C16.0315 4.54595 16.3655 4.87714 16.3655 5.29088C16.3655 5.70455 16.0315 6.03697 15.6158 6.03697Z"></path><path d="M22.3216 9.12988H22.252C21.328 9.12988 20.5723 9.88196 20.5723 10.7991V18.0664C20.5723 18.9871 21.3292 19.7367 22.252 19.7367H22.3229C23.248 19.7367 24.0002 18.9846 24.0002 18.0664V10.799C24.0002 9.88196 23.2456 9.12988 22.3216 9.12988Z"></path></svg>
                                    </div>
                                    <div className='dwn-desc'>
                                        <p>Download on</p>
                                        <h3>Google Play</h3>
                                    </div>
                                </a>
                            </div>

                            <div className='foot2-connect'>
                                <h4>CONNECT WITH US</h4>
                                <div className='foot2-socials'>
                                    <a href='social'><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href='social'><i class="fa-brands fa-twitter"></i></a>
                                    <a href='social'><i class="fa-brands fa-instagram"></i></a>
                                    <a href='social'><i class="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>




                        </div>
                    </div>



                    {/* FOOT2 FOOT */}
                    <div className='foot2-foot'>
                        <h4 className='foot2-foot-ba'>
                        Copyright © 2022 Konga.com. All rights reserved
                        </h4>
                    </div>
                </div>
            </div>

        </footer>
        </>
    )
}