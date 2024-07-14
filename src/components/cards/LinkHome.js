import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const LinkHome = ({ link, title }) => {
    return (
        <Link
            to={link}
            className="w-full flex justify-between items-center hover:bg-[#3b82f64d] hover:text-blue-500 p-2 rounded transition-all ease-in-out duration-200">
            <p className="text-[14px]">{title}</p>
            <FontAwesomeIcon icon={faAngleRight} className="inline text-blue-500 text-[12px]" />
        </Link>
    )
}
export default LinkHome