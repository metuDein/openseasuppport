import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Reaction from "../../../reaction/Reaction"

const ReviewYourItem = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <div className="flex items-center space-x-2 mb-4">
                    <Link className="text-[14px]"> All Collections </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
                    <Link className="text-[14px]"> Getting started with OpenSea </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
                    <p className="text-[14px] text-[#737373]"> Review your item page</p>
                </div>

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Review your item page</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">
                    <p className="text-[16px]">One of the unique benefits of NFTs, or any item on the blockchain, is that every transaction event for a given item is recorded. Each item has an owner, creator, and history that can be verified on-chain, similar to the “provenance” documented for physical artwork and antiques.</p>
                    <br />
                    <p className="text-[16px]">
                        On your item page, you can see the history of your item, including past owners, past sales, and who originally minted it.
                    </p>
                    <br />

                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719855/abb93d9b525dae22244bc9b2/24972993305619" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">
                        In the Details section, you can see which blockchain your item is on, and a link to the smart contract that was used to create it.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719856/6fd1a90e115ddb216aa15f2d/24972993329299" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        In the About section, you can see information about the collection, including the links to their website and social media accounts. Many NFT communities are active on social media, so check out their latest postings to see what’s new!
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719857/e1a474385b597d64a37ba91f/24973037733395" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">
                        If you decide to sell your item, you’ll see any active offers for the item listed on the item page, and a button to accept the current highest offer. You can learn more about selling NFTs in our help guide.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’d like to learn more about NFT technology or web3 in general, check out our Learn Center. Otherwise, keep exploring to find your next favorite collection! Our support team is always here to help if you have any questions.
                    </p>


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default ReviewYourItem