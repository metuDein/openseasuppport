import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const SwapFunctionality = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How do I use the Swap functionality?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I use the Swap functionality?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        You can bridge or swap select cryptocurrencies quickly using the Swap tab of your wallet, without leaving OpenSea.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        When you “bridge” your cryptocurrency from one chain to another, you can use the same funds across multiple blockchain networks. For example, you can bridge your ETH from Ethereum to Polygon, or vice-versa. You can also use the Swap tab to swap tokens. For example, you can swap your USDC for ETH.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        The Swap functionality is powered by third-party aggregators Socket.tech and Li.Fi. In the Swap tab, you will see a fast and competitively priced swap with minimal slippage. “Slippage” describes the difference between the expected price of your transaction and how much that pricing may change by the time the transaction completes. When you're looking to complete a swap, it's a good idea to educate yourself about the token you're swapping to and market conditions.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Bridging or swapping cryptocurrency costs gas. At this time, there is no OpenSea fee to swap or bridge your funds, though if the underlying bridge charges a fee, you will see that charge reflected on the confirmation screen.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Bridging or swapping your funds</h2>
                    <br />
                    <p className="text-[16px]">
                        You can transfer your funds to another chain by bridging them, or you can swap one cryptocurrency token for another within your wallet. Not all cryptocurrency tokens are available at this time. The supported blockchains for this feature are: Arbitrum, Avalanche, Base, Ethereum, Optimism, Polygon, and Zora.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Here’s how you can use the swap tab:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Navigate to the Swap tab in your wallet that you created with an email. To switch cryptocurrencies, click on the blockchain dropdown.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/998650228/173833ae25050128038b5930/HC+swap+image+1.png?expires=1711719042&signature=2435586e87a5040b4cb833f3e9cf5c1f4e8fb216a1e5bba611706046ea28ab6b" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">
                        2.  Next, enter the amount of cryptocurrency you’d like to swap.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/998650993/f3e1dcdfe5e00132bb5cc8f7/HC+swap+image+2.png?expires=1711719042&signature=547ca8ccb7373d8fc24308365afd0b594ca9d011efd6ac1827aa5c8000146c22" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">
                        3. Click on the output token dropdown to choose the blockchain and cryptocurrency you’d like to receive.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/998656741/b7e9bf18f86c0e8fcc3f2c76/swap+feature.gif?expires=1711719042&signature=141146ebd79552c4597a1c846491af17268c04cc87c45307d282c01dcb14c948" alt="article" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You’ll be able to choose any blockchain OpenSea is compatible with. Not all cryptocurrency tokens are available using this feature.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/998657268/47bbfec02181e2533b9ae41f/HC+swap+image+3.png?expires=1711719042&signature=c31f49172493ed3f9f783ae337b83b14a1c2ec6e946cfcd22875b67c43952841" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4.  You’ll see the amount of crypto you’re swapping, as well as the funds you’ll receive both in your selected token and USD.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/998657585/99a0cd4b9014696aa047cb06/HC+swap+image+4.png?expires=1711719042&signature=1748a52df8edf3fa25110dbb90a264df17f08bdf0ecd2a294618aae6b2bb3cea" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You will be matched with the best pricing for the swap.
                    </p>
                    <p className="text-[16px]">
                        5.  Click Review where you’ll be able to see the details of your swap, including the aggregator used (Socket or Li.Fi), gas fee, and underlying bridge fee, if applicable. Select More details to see the conversation rate between the two currencies for your swap, and the max slippage – the estimated percent change between the expected cost of your swap and how much it might change by the time it’s finalized. Once you’re ready, click Confirm.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/998658328/57a831d33cbb1d57899d61d1/HC+swap+image+5.png?expires=1711719042&signature=2bbce8cd612fc7db2c5d41c36996ecc30e156829f164bbc0a90582257c6b3424" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You can view the progress of your transaction in your wallet.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’ve swapped your funds to another chain, you may not see them in your Crypto tab if your wallet is still connected to the original chain. Switch chains in your wallet to view your newly swapped funds:
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/998659950/6c57034d75ba40fc0f868473/3f7o635vAJvJBXydd7pRBLp3HDz-129IgrWFZF6whFEAAIZQCZxQazacF2KJ9IRZoelbjiQ5_1I8IF8tSCNJNt8CzH15TvHc22OHuoa7Q6VL-oAvKJnEXxzDsHBfCisr12tu-u7uqema4lbXG-O0y9U?expires=1711719042&signature=bf80199025d338c02d6362c7973670824958ad42198fbf8859e92666a4636d6f" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default SwapFunctionality