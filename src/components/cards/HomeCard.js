import { Link } from "react-router-dom"

const HomeCard = ({ image, title, body, article, link }) => {
    const content = (
        <Link to={link} className="flex flex-col max-w-[304px] group shadow-xl max-h-[319px] min-h-[319px] rounded-xl overflow-hidden border border-solid hover:border-blue-500 transition-all duration-200 ease-linear">
            <div className="w-full  overflow-hidden">
                <img
                    src={`assets/images/${image}.png`}
                    alt="help cards"
                    className="h-[148px] w-full object-cover"
                />
            </div>
            <div className="py-[16px] px-[24px] flex flex-col items-center justify-between w-full flex-1">
                <div className="mx-auto">
                    <h2 className="text-black group-hover:text-blue-500 font-semibold text-center mb-1">{title}</h2>
                    <p className="mb-0 mt-0 line-clamp-3  text-center text-balance text-[16px] sm:line-clamp-3"
                    >
                        {body.length > 90 ? `${(body).substring(0, 120)}...` : body}
                    </p>
                </div>

                <p className="text-[#737373] text-[14px]">
                    {article} articles
                </p>

            </div>
        </Link>
    )
    return content
}
export default HomeCard