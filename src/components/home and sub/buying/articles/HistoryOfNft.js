import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"



const HistoryOfNft = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'Where can I check the history of an NFT?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Where can I check the history of an NFT?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        One of the unique benefits of NFTs is the ability to track every transaction on the blockchain. Every NFT has an owner, creator, and history, and this information or "provenance" is verifiable on-chain.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Each item page has a Details section where you can verify details about the contract used to create it.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722965/65087c6de6870f1421752c60/10764900557075?expires=1716554700&signature=d6676d1931ad30ce3e3d140a1da96d4cac770162ac5b1f8d44e02c0a75557cda" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Opening this section will show you important information about the NFT, such as:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            The contract address of the collection
                        </li>
                        <li className="list-disc" >
                            The token ID of this particular NFT
                        </li>
                        <li className="list-disc" >
                            The blockchain the NFT is on
                        </li>
                        <li className="list-disc" >
                            Whether the NFT metadata is centralized or "frozen"
                        </li>

                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722964/1a626952620b0ef299328bde/16320215933331?expires=1716554700&signature=a42ee87087f7275b86180ffa5868f15818b9d7ab6ff259f81f0b6634ef75fdba" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default HistoryOfNft