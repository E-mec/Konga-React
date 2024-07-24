import Logo from './Logo.webp'
import './Headdesk.css'


export default function HeadLogDesk(){
    return(
        <>
        <div className='head-log'>
            <div className='head-log-list'>
                {/* Logo start */}
                <div className='logo'>
                    <a href='home' className='logo-link'>
                        <img src={Logo} alt='Konga' className='Logo-img'/>
                    </a>
                </div>
                {/* Logo end */}



                {/* Store start */}
                <div className='store'>
                    <div className='store-box'>
                        <a href='store' className='store-link'>
                            Store Locator
                        </a>
                    </div>
                </div>
                {/* Store end */}



                {/* Sell start */}
                <div className='store'>
                    <div className='sell-box'>
                        <a href='sell' className='sell-link'>
                            Sell on Konga
                        </a>
                    </div>
                </div>
                {/* Sell stop */}


                {/* Input start */}
                <div className='input'>
                    <div className='input-container'>
                    <form className='form-action'>
                        <div className='input-box'>
                        <input type='search' className='input-search' placeholder='Search for products, brands and categories...' />
                        </div>
                        <button className='search-btn'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                        
                    </form>
                </div>
                </div>
                {/* Input end */}



                {/* Help start */}
                <div className='help-box store'>
                    
                        <a href='#help' className='help-link'>
                        <span class="material-symbols-outlined help-icon">help</span>
                        <span className='help-text'> Help </span>
                        <i class="fa-solid fa-angle-down"></i>
                        </a>
                        <ul className='help-hide'>
                            <li className='help-list'><a href='faq'>FAQs</a></li>
                            <li className='help-list'><a href='faq'>Contact Us</a></li>
                            <li className='help-list'><a href='faq'>Track My Order</a></li>
                        </ul>
                    </div>
                
                {/* Help end */}



                {/* Login start  */}
                <div className='login store'>
                    <div className='login-box'>
                        <a href='#login' className='login-link'>Login / SignUp</a>
                    </div>
                </div>
                {/* Login end */}



                {/* Cart start */}
                <div className='cart'>
                    <a href='#cart' className='cart-link'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>My Cart</span>
                    <span className='cart-fig'> 0</span>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}