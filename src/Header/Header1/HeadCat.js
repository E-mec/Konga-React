import list1 from './head1.webp'
import list2 from './head2.webp'
import list3 from './head3.webp'
import list4 from './head4.webp'
import list5 from './head5.webp'
import list6 from './head6.webp'
import list7 from './head7.webp'
import './Head.css'
import HeadLogDesk from '../Header2/Header2-Desk/HeadLogDesk'


export default function HeadCat() {
    return (
        <>
        <div className="headcat">
            <span className="cat-list">
                <img src={list1} alt="list-img" className="head-img" />
            </span>

            <span className="cat-list">
                <img src={list2} alt="list-img" className="head-img" />
            </span>

            <span className="cat-list">
                <img src={list3} alt="list-img" className="head-img" />
            </span>

            <span className="cat-list">
                <img src={list4} alt="list-img" className="head-img" />
            </span>

            <span className="cat-list">
                <img src={list5} alt="list-img" className="head-img" />
            </span>

            <span className="cat-list">
                <img src={list6} alt="list-img" className="head-img" />
            </span>

            <span className="cat-list">
                <img src={list7} alt="list-img" className="head-img" />
            </span>
        </div>
        <HeadLogDesk/>
        </>
    )
}