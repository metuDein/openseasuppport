import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const WhatAreGasFees = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'What are gas fees?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What are gas fees?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">Gas fees are transaction fees paid to validators on Ethereum. OpenSea does not receive these fees and is not able to refund them. OpenSea also doesn't control gas prices nor does it profit from them.

                    </p>
                    <br />
                    <p className="text-[16px]">In this article, we'll explain what validators are and explore why gas fees are needed. We'll also go over the two categories of gas fees you'll encounter while using OpenSea (one-time fees and recurring fees), as well as failed transactions.

                    </p>
                    <br />

                    <p className="text-[16px]">
                        Let's dive in!
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">  What are validators on Ethereum?</h2>
                    <br />
                    <p className="text-[16px]">

                        Ethereum uses a proof-of-stake (PoS) consensus mechanism. In proof-of-stake, a validator receives blocks from peers on the Ethereum network and re-executes transactions to make sure the block is valid.
                    </p>
                    <br />
                    <p className="text-[16px]">

                        Validators have dedicated significant funds to the network in the form of staked ETH. This “stake” amount replaces the work miners did in proof-of-work, securing the network because a participant must buy and hold cryptocurrency in order to be chosen to validate blocks and receive gas fees.


                    </p>
                    <br />
                    <p className="text-[16px]">

                        When you pay gas fees, the payment only guarantees your transaction to be processed. It does not guarantee that the transaction will succeed.

                    </p>
                    <br />
                    <p className="text-[16px]">
                        This is because gas prices on Ethereum fluctuate. If there is a high level of activity on Ethereum—for example, a popular NFT collection is being released—gas prices will rise due to network congestion. In this case, the original gas fee you paid may no longer be high enough for validators to process and confirm the transaction.

                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">  When are gas fees needed on OpenSea?</h2>
                    <br />
                    <p className="text-[16px] p-6 rounded-md bg-[#c8d7e6] border border-solid">
                        ⚠️ Be aware of common phishing attempts. "Buyers" may claim they're experiencing an error when trying to purchase an item by messaging the seller with screenshots. OpenSea will never DM you first on social media or ask you to send funds to OpenSea in order to sell an item or resolve a transaction failure.
                        <br />
                        <br />
                        You can learn more about staying safe in web3 in our help guide. If you're experiencing a phishing attempt, here's how to report it.


                    </p><br />
                    <p className="text-[16px]">


                        Whenever you’re submitting a transaction to be processed on the blockchain, you will need enough cryptocurrency in your wallet to cover the associated gas fees.
                    </p>
                    <p className="text-[16px]">

                        When using OpenSea, there are two main categories of gas fees you’ll come across:

                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            <b>One-time fees</b>
                        </li> <br />
                        <li className="list-disc" >
                            <b>Recurring fees
                            </b>
                        </li> <br />
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">  One-time fees</h2>
                    <br />



                    <p className="text-[16px]">
                        As we mentioned above, there are a few actions you can take when using OpenSea after which you’ll be prompted by your wallet to pay a required one-time gas fee These often involve you approving certain interactions with a smart contract for the first time.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        First time listing an NFT in a collection: The first time you list an NFT in a specific collection (related to a single NFT smart contract) for sale, you’ll need to pay a one-time gas fee. You won’t have to pay a gas fee for later listings of NFTs in that collection. This lets the NFT smart contract understand you have authorized transfers of NFTs in that collection (for example, if your listed NFT is later purchased).
                    </p>
                    <br />
                    <p className="text-[16px]">
                        First time using a cryptocurrency in a transaction: The first time you list an NFT for sale or make an offer to purchase an NFT using a specific cryptocurrency (related to a specific token smart contract), you’ll need to pay a one-time gas fee. For example, if this is your first time listing an NFT in an auction or making an offer to purchase an NFT, you will also need to approve WETH, a type of ETH used for auctions and offers. This lets the token smart contract understand you have authorized transfers of that cryptocurrency (for example, if your offer is accepted).
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Deploying a smart contract: Finally, you’ll need to pay gas to deploy a smart contract when creating a new NFT collection or creating a Drop.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719817/cd84e7e5792cbdd7f30377bf/10787350530707?expires=1711462859&signature=fa74d42fcf1883da61a3417d8dc630750071401b33d5f0793b211e93a961db69" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">  Recurring fees</h2>
                    <br />
                    <p className="text-[16px]">
                        These recurring gas fees will occur whenever you take one of the below actions. This is because they require a blockchain transaction.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Buying an NFT
                        </li> <br />
                        <li className="list-disc" >
                            Transferring an NFT
                        </li> <br />
                        <li className="list-disc" >
                            Minting an NFT
                        </li> <br />

                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Gas-free actions</h2>
                    <br />

                    <p className="text-[16px]">
                        These actions don't require gas fees:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Connecting your wallet to OpenSea
                        </li> <br />
                        <li className="list-disc" >
                            Listing an NFT for sale at a fixed price (after the first time you have done so for an NFT in a specific collection)
                        </li> <br />
                        <li className="list-disc" >
                            Listing an NFT in an auction or making an offer (after the first time you have done so)
                        </li> <br />
                        <li className="list-disc" >
                            Reducing the price of an NFT you've listed
                        </li> <br />
                        <li className="list-disc" >
                            Canceling an offer
                        </li> <br />

                    </p>
                    <br />

                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatAreGasFees