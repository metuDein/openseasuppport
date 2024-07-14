import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const PurchasePolyGonNfts = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I purchase NFTs on Polygon?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I purchase NFTs on Polygon?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        Polygon is a blockchain that provides scalable, secure, and quick transactions with Ethereum currencies like ETH, USDC, MATIC, and DAI.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Buying an NFT on Polygon requires using Polygon ETH or MATIC. In order to spend your Ethereum currencies on Polygon, you must first "bridge" them across to the Polygon blockchain.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">How to buy NFTs on Polygon </h2>
                    <br />
                    <p className="text-[16px]">
                        To find items on Polygon, check Polygon under the Chains section on the left panel when browsing NFT items.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720012/9866ec2c26336eac594e9fad/10333657862419" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Polygon items can be identified by hovering over the item to see the Polygon logo in the upper left corner.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720009/6f2ce4e5e8b2934f3900c539/16315229739027" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Buying NFTs on Polygon is just like buying NFTs on the Ethereum mainnet. Once you've found your item, click Buy now.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720010/7fd89e603bdf6740ff1d0e3d/16315325044499" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        OpenSea supports typed signatures on Polygon, the same as we do on Ethereum, making it easier for users to understand what they are signing. In order to complete the signature request, you'll be prompted to switch your wallet network to Polygon.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default PurchasePolyGonNfts