import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Reaction from "../../../reaction/Reaction"

const PurchaseYourFirstNFT = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <div className="flex items-center space-x-2 mb-4">
                    <Link className="text-[14px]"> All Collections </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
                    <Link className="text-[14px]"> Getting started with OpenSea </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
                    <p className="text-[14px] text-[#737373]"> Purchase your first NFT</p>
                </div>

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Purchase your first NFT</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">
                    <p className="text-[16px]">The easiest way to purchase an item using OpenSea is with a credit card. During the transaction, a third-party payment tool, MoonPay, will convert your local currency into cryptocurrency so you can purchase the item. A credit card processing fee will apply to all credit card purchases, as well as a blockchain transaction fee called gas.</p>
                    <br />
                    <p className="text-[16px]">
                        Here’s how to purchase an item using a credit card:
                    </p>
                    <br />
                    <br />
                    <p className="text-[16px]">
                        If you’re looking to bring your existing crypto wallet to log in, learn more <Link className="underline text-blue-500">here</Link>.
                    </p>
                    <br />
                    <br />

                    <p className="text-[16px]">
                        1. Click the Buy now button to start the checkout process.
                    </p>
                    <p className="text-[16px]">
                        2. You’ll see a Checkout with MoonPay pop-up window. Open the “Purchasing NFT” dropdown to see the network fee (gas fee) and processing fee associated with the transaction.
                    </p>
                    <p className="text-[16px]">
                        3. Confirm your purchase details before clicking Continue.
                    </p>
                    <p className="text-[16px]">
                        4. Follow the steps to verify your email address with MoonPay.
                    </p>
                    <p className="text-[16px]">
                        5. Enter your payment information and click Continue.
                    </p>
                    <br />

                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719790/2e7e469d22e683f837ac7ca8/24972365770515" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        There may be a short delay while the transaction is processing, but you should soon see your new item in your account! You can see all the items you’ve purchased in the Collected tab on your OpenSea profile.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        If this purchase flow isn’t working for you, check to see if you live in a region that Moonpay doesn’t support. In this case, you can use your preferred cryptocurrency exchange to buy crypto, and then follow their instructions to transfer it to your wallet.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Before making a purchase, it’s important to do your due diligence on the seller and the collection. Make sure to follow our web3 safety tips, check out the history of the collection, and see if the seller has indicated any future plans or posted a roadmap.
                    </p>
                    <br />


                    <Link className="bg-blue-500 p-3 rounded text-white text-center font-bold mb-3 block max-w-xl"> Now that you own an item, let’s learn more about it. </Link>
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default PurchaseYourFirstNFT