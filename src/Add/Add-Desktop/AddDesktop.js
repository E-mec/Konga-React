import main from './main-add.webp'
import add1 from './Groceries.jpg_S18w_zVmi.jpg.png'
import add2 from './Bar.jpg'
import './AddDesktop.css'


export default function AddDesktop() {
    return(
        <>
        <section>
            <div className="main-add">
                <img className="main-add-img" src={main} alt="" />
            </div>
        </section>

        <section>
            <div className='sub-add'>
                <div className='add-half'>
                    <img src={add1} alt='' className='add-half-img' />
                </div>
                <div className='add-half'>
                    <img src={add2} alt='' className='add-half-img' />
                </div>
            </div>
        </section>
        </>
    )
}