import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const WhatIsWeth = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'What\'s WETH? How do I get it?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What's WETH? How do I get it?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">


                    <p className="text-[16px]">
                        Wrapped Ether (WETH) is used to make an offer to buy an NFT or bid on an auctioned NFT.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        WETH allows users to make pre-authorized bids that can be fulfilled at a later date without any further action from the bidder. WETH is minted when a user sends ETH to the WETH decentralized, open-source smart contract. The smart contract holds the ETH sent by users and mints an equivalent amount of WETH. OpenSea does not mint WETH or exchange ETH for WETH, and OpenSea does not operate or control the WETH smart contract.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        This guide explains:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            How to convert ETH for WETH
                        </li>
                        <li className="list-disc" >
                            How to add WETH as a token in your MetaMask wallet
                        </li>
                        <br />
                    </p>
                    <h2 className="text-2xl font-semibold">Converting ETH to WETH</h2>
                    <br />
                    <p className="text-[16px]">
                        You can follow these steps to convert ETH into WETH:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Navigate to the top-right corner of OpenSea and click your Wallet balance.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721134/7a26a7b88035fba04789f6a1/24993380044691" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        2. Click the arrows button, and then enter the amount of ETH you’d like to wrap in the Amount field.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721140/c0f878c7951babd56eddb609/24993380053779" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. You'll be prompted to confirm the transaction using a third-party smart contract. The transaction will involve a gas fee since you are interacting with the blockchain.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721138/c32a9c493fb528d046e06df7/24993376450067" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Once the wrap is complete, you'll see a confirmation message.
                        <br />
                        <br />
                        If the wrapping transaction succeeds, WETH (your offer balance) will appear under Tokens in your OpenSea wallet sidebar.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721150/b0a90a5489c179000a39dbde/24993376465427" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        When bidding or making an offer on an item, you'll also be able to add more WETH to your wallet by clicking Add WETH.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721154/56464d1449e9be9d54bc6f10/24993380074771" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">Adding WETH to your wallet (MetaMask)</h2>
                    <p className="text-[16px]">
                        WETH may not appear by default on your MetaMask. To add WETH, click on the MetaMask extension, select the Tokens tab, and click Import tokens.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721158/19c947f030f7c93a1017eef0/24993380097683" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Type WETH into the search box. You should see Wrapped Ether (WETH) show up as an option.
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721160/05c23c9e2a1e787fbb398849/18678181543187" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        After confirming, you should see WETH appear in your item list on the MetaMask extension.
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721173/9cb705bd811373d406fccb6a/24993376522515" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatIsWeth