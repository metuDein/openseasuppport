import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"


const GettingStartedFaq = () => {
    const content = (
        <main className="w-full min-h-screen">
            <section className="max-w-4xl mx-auto my-4">
                <div className="flex items-center space-x-2 mb-4">
                    <Link className="text-[14px]"> All Collections </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[12px]" />
                    <p className="text-[14px] text-[#737373]"> Getting Started with OpenSea</p>
                </div>

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-1">Getting Started With OpenSea</h1>
                    <p className="font-normal mb-4 text-[15px]">If this is your first time visiting OpenSea, get started here.</p>

                    <p className="text-[#737373] text-[12px]">5 articles</p>
                </div>

                <div className="w-full  min-h-[120px] border border-solid rounded-[8px] p-3 flex flex-col">
                    <Link to={'/getting-started/welcome-to-opensea'} className="w-full flex justify-between items-center hover:bg-[#3b82f64d] p-2 rounded transition-all ease-in-out duration-200">
                        <p className="text-[14px]">Welcome to opensea</p>
                        <FontAwesomeIcon icon={faAngleRight} className="inline text-blue-500 text-[12px]" />
                    </Link>
                    <Link
                        to={'/getting-started/create-account-with-email'}
                        className="w-full flex justify-between items-center hover:bg-[#3b82f64d] p-2 rounded transition-all ease-in-out duration-200">
                        <p className="text-[14px]">Create your account with an email</p>
                        <FontAwesomeIcon icon={faAngleRight} className="inline text-blue-500 text-[12px]" />
                    </Link>
                    <Link
                        to={'/getting-started/get-to-know-your-wallet'}
                        className="w-full flex justify-between items-center hover:bg-[#3b82f64d] p-2 rounded transition-all ease-in-out duration-200">
                        <p className="text-[14px]">Get to know your wallet</p>
                        <FontAwesomeIcon icon={faAngleRight} className="inline text-blue-500 text-[12px]" />
                    </Link>
                    <Link
                        to={'/getting-started/purchase-your-first-nft'}
                        className="w-full flex justify-between items-center hover:bg-[#3b82f64d] p-2 rounded transition-all ease-in-out duration-200">
                        <p className="text-[14px]">Purchase your first NFT</p>
                        <FontAwesomeIcon icon={faAngleRight} className="inline text-blue-500 text-[12px]" />
                    </Link>
                    <Link
                        to={'/getting-started/review-your-item-page'}
                        className="w-full flex justify-between items-center hover:bg-[#3b82f64d] p-2 rounded transition-all ease-in-out duration-200">
                        <p className="text-[14px] font-normal">Review your item page</p>
                        <FontAwesomeIcon icon={faAngleRight} className="inline text-blue-500 text-[12px]" />
                    </Link>
                </div>
            </section>
        </main>
    )
    return content
}
export default GettingStartedFaq