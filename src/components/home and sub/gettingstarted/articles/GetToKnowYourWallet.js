import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Reaction from "../../../reaction/Reaction"

const GetToKnowYourWallet = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <div className="flex items-center space-x-2 mb-4">
                    <Link className="text-[14px]"> All Collections </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
                    <Link className="text-[14px]"> Getting started with OpenSea </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
                    <p className="text-[14px] text-[#737373]"> Get to know your wallet</p>
                </div>

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Get to know your wallet</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">
                    <p className="text-[16px]">
                        While any NFTs or cryptocurrency you own are stored directly on the blockchain, you can access and control them through your self-custodial crypto wallet. Your wallet address is a public unique identifier and can be thought of as synonymous with your OpenSea account name. For example, if you wanted to open a new “account” on OpenSea, you’d use another crypto wallet or log in with a different email.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you got started on OpenSea with your email, your wallet is gated by your email address and your two-factor authentication. The email login you use on OpenSea can’t be used on other websites at this time; read below about exporting your private key if you’d like to use your self-custodial wallet on other websites.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        At the top of your wallet on the left side, you’ll see your public wallet address. Hover and click to copy it. On the right side, you’ll see a dropdown where you can switch blockchains. Ethereum will be selected by default.
                    </p>
                    <p className="text-[16px]">
                        The wallet sidebar consists of four tabs: the Crypto tab, the Swap tab (if you log in with an email), the Transactions tab, and the Settings tab. Learn about each one below.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Crypto tab</h2>
                    <br />

                    <p className="text-[16px]">
                        You can click the + sign to add funds with a credit card. Upon clicking, a third-party pop-up will appear, guiding you on how to purchase funds with a credit card.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To send yourself cryptocurrency from another wallet, copy your wallet address on the left side of the wallet sidebar and follow your provider’s instructions on transferring funds to your wallet address.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You can also click the arrows to wrap or unwrap Ethereum using a third-party decentralized smart contract. If you have Wrapped Ethereum, or WETH, it’s shown as your “Offer balance” and can be used when making an offer on an item or participating in an auction.
                    </p>
                    <p className="text-[16px]">
                        For the most part, you’ll use the Crypto tab to see the funds you have available. Click the "Refresh" symbol next to Tokens if your wallet balance isn’t accurate. If you’ve transferred in funds from a different chain, you’ll need to switch the blockchain using the dropdown.
                    </p>
                    <br />
                    <img src="assets/images/gettoknowwallet/gettoknowwallet1.png" alt="get to know wallet" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">Swap tab</h2>
                    <br />


                    <p className="text-[16px]">

                        The Swap tab enables you to bridge your funds to another blockchain, or convert your tokens (for example, from ETH to MATIC). Learn more in our Help Center article about this feature.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Transaction tab</h2>
                    <br />
                    <p className="text-[16px]">
                        Similar to an order history on a traditional e-commerce website, your transactions tab allows you to see transactions you’ve made, including items you’ve purchased and funds you’ve added with a credit card.
                    </p>
                    <br />
                    <img src="assets/images/gettoknowwallet/gettoknowwallet2.png" alt="get to know wallet" className="mx-auto max-w-xl" />

                    <p className="text-[16px]">
                        If you’re connected to Avalanche, BNB Chain, or Klaytn, you may not see all received token or NFT transactions in your transactions tab at this time. You can find your wallet’s full transaction history on the relevant blockchain explorer.


                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Wallet setting tab</h2>
                    <br />
                    <p className="text-[16px]">

                        In your wallet settings, you can take several actions related to your self-custodial wallet. However, if you’re looking to make edits to your OpenSea profile or account, you’ll need to hover over the profile icon on the right corner of your screen and select Settings.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">  Switch wallet</h2>
                    <br />
                    <p className="text-[16px]">
                        Within your wallet settings, you can switch to another wallet, such as MetaMask. Keep in mind that you’ll be logged into a different account if you switch wallets.
                    </p>
                    <br />
                    <img src={`assets/images/gettoknowwallet/gettoknowwallet2.png`} alt="get to know wallet" className="mx-auto max-w-xl" />

                    <br />
                    <h2 className="text-2xl font-semibold">  Two-factor verification</h2>
                    <br />
                    <p className="text-[16px]">
                        You can update your preferred two-factor verification method, or enroll in an additional method. Learn more about this in detail in our Help Center guide.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">  Export your private key</h2>
                    <br />
                    <p className="text-[16px]">Because the email login you use on OpenSea can’t be used on other websites, you may want to export your private key and import it into another wallet, such as MetaMask, if you’d like to access your items elsewhere. Learn more in our Help Center guide about exporting your private key.</p>
                    <br />


                    <Link className="bg-blue-500 text-center p-3 rounded text-white font-[900] mb-3 block max-w-xl"> Read on when you’re ready to purchase your first NFT. </Link>
                    <br />
                    <p className="text-[16px] p-6 rounded-md bg-[#c8d7e6] border border-solid">
                        When you log into OpenSea with an email, OpenSea doesn’t have control over your items or funds. Instead, you control your wallet!
                        <br />
                        <br />
                        For your security, OpenSea will have access to your private key.
                    </p><br />

                    <p className="text-[16px]"></p><br />

                </div>
                <Reaction />
            </section>
        </main>
    )
}
export default GetToKnowYourWallet