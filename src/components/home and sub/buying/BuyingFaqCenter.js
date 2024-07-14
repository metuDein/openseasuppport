import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import LinkHome from "../../cards/LinkHome"
import { buyingHomeLinks } from "../faqs/linksData"

const BuyingFaqCenter = () => {
    const renderLinks = () => (
        buyingHomeLinks.map(item => <LinkHome key={item.id} title={item.title} link={item.link} />)
    )

    return (
        <main className="w-full min-h-screen">
            <section className="max-w-4xl mx-auto my-4">
                <div className="flex items-center space-x-2 mb-4">
                    <Link to={'/'} className="text-[14px]"> All Collections </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[12px]" />
                    <p className="text-[14px] text-[#737373]"> Getting Started with OpenSea</p>
                </div>

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-1">Getting Started With OpenSea</h1>
                    <p className="font-normal mb-4 text-[15px]">If this is your first time visiting OpenSea, get started here.</p>

                    <p className="text-[#737373] text-[12px]">{buyingHomeLinks.length} articles</p>
                </div>

                <div className="w-full  min-h-[120px] border border-solid rounded-[8px] p-3 flex flex-col">
                    {renderLinks()}
                </div>
            </section>
        </main>
    )
}
export default BuyingFaqCenter