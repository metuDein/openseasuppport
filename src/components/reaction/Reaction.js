import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSmile, faFaceMeh, faFaceFrown } from "@fortawesome/free-solid-svg-icons"


const Reaction = () => {
    return (
        <div className="bg-[#f2f2f2] w-full rounded-xl min-h-[100px] flex flex-col items-center justify-center">
            <p className="my-1 text-gray-500">Did this answer your question?</p>
            <div className="flex items-center justify-center space-x-4">
                <FontAwesomeIcon icon={faFaceFrown} className={`text-gray-500 text-[35px]`} />
                <FontAwesomeIcon icon={faFaceMeh} className={`text-gray-500 text-[35px]`} />
                <FontAwesomeIcon icon={faFaceSmile} className={`text-gray-500 text-[35px]`} />
            </div>
        </div>
    )
}
export default Reaction