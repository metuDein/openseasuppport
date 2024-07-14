import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"



const TransactionFailed = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'Why did my transaction fail?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Why did my transaction fail?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        There are four common errors you might encounter with failed transactions. You can view your transaction on Etherscan and check the Status row to see why the transaction failed.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Reverted: this is the most common error when purchasing an NFT. The failure refers to the loss of the transaction (gas) fee, not the value of the item you attempted to purchase. In this situation, it’s usually the person who paid the most gas who will get to buy the item. This can happen if multiple users are attempting to purchase the same item at the same time.
                            <br />
                            <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722568/ca1613e935555e646e2387a4/7622819069075" alt="purchase nft" className="mx-auto max-w-xl" />
                            <br />
                        </li>
                        <li className="list-disc" >
                            Dropped and Replaced: this means the transaction was dropped and replaced by a new one. For more information, you can refer to this Etherscan help article.
                            <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722566/2b096a37b4fbc61d2b468e64/7623771188243" alt="purchase nft" className="mx-auto max-w-xl" />
                            <br />
                        </li>
                        <li className="list-disc" >
                            Pending: sometimes Ethereum transactions can get stuck in a "pending" state when the transaction has been submitted with a low gas price. While fixing this error will vary by wallet provider, here's MetaMask's guide.
                            <br />
                            <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722565/68892ec2ffab169652315d16/7623474459795" alt="purchase nft" className="mx-auto max-w-xl" />
                            <br />
                        </li>
                    </p>
                    <p className="text-[16px]">
                        For bulk purchases, you can experience one of these errors on one or more of the NFTs you’re attempting to buy, resulting in a failed or partially successful purchase.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default TransactionFailed