import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faFaceSmile, faFaceMeh, faFaceFrown } from "@fortawesome/free-solid-svg-icons"

const WelcomeToOpenSea = () => {


    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <div className="flex items-center space-x-2 mb-4">
                    <Link className="text-[14px]"> All Collections </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
                    <Link className="text-[14px]"> Getting started with OpenSea </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
                    <p className="text-[14px] text-[#737373]"> Getting Started with OpenSea</p>
                </div>

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome to OpenSea</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">
                    <p className="text-[14px]">OpenSea is a marketplace for digital items called  <b> non-fungible </b> tokens, or NFTs for short. NFTs can take many forms, such as digital art, audio files, or event tickets. Some NFTs can be redeemed for physical items like sneakers, and others can be used within an online game. NFTs can take on so many unique forms that in these Getting Started articles, we’ll keep it simple and refer to NFTs as “items.”</p>
                    <br />
                    <p className="text-[14px]">
                        Whether you came here to buy an item, participate in a drop, or just see what it’s all about, we’re glad you’re here!
                    </p>
                    <br />
                    <p className="text-[14px]">
                        If you don’t have an OpenSea account, you can still browse popular NFT collections, trending collections, and the latest drops. To get the most out of OpenSea, the next step is to create an account, which is tied directly to your wallet. To create a new account and wallet to use on OpenSea with just an email, <Link className="underline text-blue-500"> continue to the next article.</Link> If you already have a crypto wallet, you can follow  <Link className="underline text-blue-500"> these instructions </Link> to use your wallet on OpenSea.
                    </p>
                </div>

                <div className="bg-[#f2f2f2] w-full rounded-xl min-h-[100px] flex items-center justify-center space-x-4">
                    <FontAwesomeIcon icon={faFaceFrown} className={`text-gray-500 text-[35px]`} />
                    <FontAwesomeIcon icon={faFaceMeh} className={`text-gray-500 text-[35px]`} />
                    <FontAwesomeIcon icon={faFaceSmile} className={`text-gray-500 text-[35px]`} />

                </div>
            </section>
        </main>
    )
}
export default WelcomeToOpenSea