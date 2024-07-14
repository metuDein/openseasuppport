import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { dropDownData } from "../home and sub/faqs/DropDownData";
import { useState } from "react";

const DropDown = ({ title, content, id }) => {

    const [data, setData] = useState(dropDownData)
    const currentTab = data.find(item => item.id === id)

    const onTabClicked = (id) => {
        setData(prev => (
            prev.map(item => (
                item?.id === id ? { ...item, active: !item.active } : item
            ))
        ))
    }

    return (
        <div
            className=" w-full p-3 flex items-center space-x-1 cursor-pointer"
            onClick={() => onTabClicked(id)}>
            <div className="mx-2 self-start">
                {
                    !currentTab.active && <FontAwesomeIcon icon={faCaretRight} className="text-xl" />
                }
                {
                    currentTab.active && <FontAwesomeIcon icon={faCaretDown} className="text-xl" />
                }
            </div>
            <div>
                <h2 className="font-bold text-xl">{title}</h2>
                {currentTab.active && <p>
                    {content}
                </p>}
            </div>
        </div>
    )
}
export default DropDown