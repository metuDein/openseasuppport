import { Link } from "react-router-dom"

const SearchResult = ({ title, content, link }) => {
    return (
        <Link to={link} className="w-full flex flex-col hover:bg-black/20 transition-all duration-300 rounded p-2">
            <p className="text-[20px]"> {title?.length > 60 ? `${title.substring(0, 45)}...` : title}</p>
            <small>{content?.length > 150 ? `${content.substring(0, 150)}...` : content}</small>
        </Link>
    )
}
export default SearchResult