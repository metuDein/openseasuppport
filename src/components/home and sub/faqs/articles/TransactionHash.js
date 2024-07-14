import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"
const TransactionHash = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How do I find my transaction hash?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I find my transaction hash?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        In order to troubleshoot issues with buying or selling your NFT, the OpenSea support team may request your "transaction hash" from a blockchain explorer.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Transaction hashes are unique IDs recording each transaction on the blockchain; this includes NFT purchases, sales, and canceled orders. All gas fees paid will generate a transaction hash.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Depending on the cryptocurrency used to purchase the NFT, you'll need to use the relevant blockchain explorer, such as Etherscan for ETH or Polygonscan for Polygon.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        The example below is for Etherscan, but most other blockchain explorers work in a similar way.
                    </p>
                    <br />

                    <p className="text-[16px]">

                        One of the interesting properties of many blockchains is the ability for anyone to send and receive tokens to and from wallet addresses. That means you don’t have to buy or sell an NFT to have one transferred to your wallet. You don’t even need to accept a transfer to receive an NFT from someone else, similar to how you can receive an email from anyone.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">How do I find my transaction hash on Etherscan?</h2>
                    <br />
                    <p className="text-[16px]">
                        First, you'll need your wallet address. You can find this in your crypto wallet or underneath your account name on OpenSea. Make sure you're using the wallet that corresponds to the purchase.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722588/49f2550d6d725cace38cc7b4/22494804536339?expires=1711731901&signature=af89200db779c5f98da1fe4e2ad48dd7223c84c092eab5f749b3517b7b9e4b0f" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Once you have your OpenSea wallet address, navigate to Etherscan.io and copy it into the search bar.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722465/bb82fa7cc6410a864bde630d/4413213929619?expires=1711731901&signature=87ad4d234b787a002e293f4c4fcb68f73d1670ce628ea8df26a8d460e281db6b" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        This will take you to the address dashboard page. On the bottom left of the page, you'll be able to see transaction hashes under the Txn Hash column.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722467/79f77a0d9c9dae451eabe8c4/7362458592659?expires=1711731901&signature=88d7805a86c32a60c11d6f30fc0954f27464f13b78169c2b8fa4a3e8c1439490" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You can click into any transaction and copy the transaction hash to your clipboard. Make sure to include transaction hashes in text (rather than screenshots) when reaching out to OpenSea support.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722464/fc7a9b324461ffa5de5d73a1/4405999670931?expires=1711731901&signature=78d26d79d0021742c1843f7d23fa52f73b72ca3b9424265335285bd6d8771e42" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">How do I find my transaction using OpenSea?</h2>
                    <br />
                    <p className="text-[16px]">
                        You can also obtain your transaction hash using OpenSea, in one of two places:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Within your wallet sidebar. Click on your wallet balance, and then select the transactions tab. You’ll see a history of transactions associated with your wallet. Click on it to navigate to the relevant blockchain explorer.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/1006362856/76a8e7185ed2dbfa3635ffd1/Screenshot+2024-03-29+at+12_35_58%E2%80%AFPM.png" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        2. Within your profile activity tab. Hover over your profile icon, and click on your profile. Select the activity tab. Click on the redirect links with a time stamp to view the transaction on Etherscan directly.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722697/750f3757b3af4bd04c53ee89/24991545728147?expires=1711731901&signature=423ffa7777e8751cadd34b88ce58ccefb305688c3374ad408c0d22f8785e6478" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default TransactionHash