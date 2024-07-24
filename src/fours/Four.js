import { useMediaQuery } from "react-responsive";
import FourDesktop from "./FourDesktop/FourDesktop";
import FourMobile from "./FourMobile/FourM0bile";



export default function Four(){
    const isDesktop = useMediaQuery({
        query: "(min-width: 1000px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width: 1000px)"
    });
    return(
        <>

    {
        isDesktop ? <FourDesktop /> : <FourMobile/>
    }

        </>
    )
}