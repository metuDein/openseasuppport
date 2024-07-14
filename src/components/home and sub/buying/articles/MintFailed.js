import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"



const MintFailed = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'Why did my mint fail?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Why did my mint fail?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        If your mint failed, it’s possible that the drop has completed and no more NFTs are available. There are a limited number of items available for mint, and the mints may run out during your transaction. When this occurs, you’ll still pay the transaction gas fee. Because OpenSea doesn't control gas prices, profit from them, nor receive these fees, we’re unable to send these fees back to users.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To check if this is the issue, refresh the mint page to see whether the drop has finished. After the drop (and initial minting) has finished, you’ll be able to view the collection on OpenSea, list items for sale, or make offers to purchase items in that collection.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you missed the minting window, you may still be able to get an NFT from this collection by purchasing it from another user.
                    </p>
                    <br />

                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722813/00dc0a7a660024f22b5e3833/7931124356115?expires=1716554700&signature=c9991f4a8368b7e07d0c75d48533debd15aa6becb962dc5209ca5cb047bead93" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You can always click the transaction link to see if the action was completed on-chain.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default MintFailed