import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const WrongOwnerListed = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'Why is the wrong owner listed for my NFT?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Why is the wrong owner listed for my NFT?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        When you purchase an NFT using OpenSea the ownership may not immediately update.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        This delay is typically due to congestion on the Ethereum blockchain. We recommend waiting a few minutes and refreshing the item’s page on OpenSea. Your wallet address should show as the owner of the item!
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If, however, your transaction reads as successful on a blockchain explorer (such as Etherscan), and ownership still isn’t updated on OpenSea, we may need to re-sync our platform to the blockchain.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Please reach out to our support team at support.opensea.io for further assistance if this is the case.
                    </p>
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WrongOwnerListed