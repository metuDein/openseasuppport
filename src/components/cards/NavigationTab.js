import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
const NavigationTab = ({ link, title1, title2 }) => {
    return (
        <div className="flex items-center space-x-2 mb-4">
            <Link to={'/'} className="text-[14px]"> All Collections </Link>
            <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
            <Link to={link} className="text-[14px]"> {title1} </Link>
            <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
            <p className="text-[14px] text-[#737373]">{title2}</p>
        </div>
    )
}
export default NavigationTab