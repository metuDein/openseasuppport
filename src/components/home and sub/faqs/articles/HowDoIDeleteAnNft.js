import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const HowDoIDeleteAnNft = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How do I delete an NFT?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I delete an NFT?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        An item minted on the blockchain can’t be “deleted” the same way you would delete a file or a folder from your personal computer, but you do have some options for handling NFTs you didn’t purchase or no longer want to show in your account.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        This article outlines 3 such options:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Hiding an item on OpenSea will move it from the Collected tab to the Hidden tab on your profile, though the item will still be publicly visible on OpenSea more broadly
                        </li>
                        <li className="list-disc" >
                            Hiding a collection page will hide the collection and its items from being visible on OpenSea
                        </li>
                        <li className="list-disc" >
                            Burning an item will remove it from your wallet entirely
                        </li>

                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold"> Hiding an item</h2>
                    <br />
                    <p className="text-[16px]">
                        When you hide an item, it will move to the Hidden tab and will no longer be visible on your profile. It will still be publicly visible on OpenSea, including as part of the collection to which it belongs.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        1. Navigate to the Collected tab in your OpenSea profile
                        <br />
                        2. Select the item you'd like to hide.
                        <br />
                        3. Click the Hide button at the bottom of the screen.
                        <br />
                        4. You’ll see a message at the bottom of the screen confirming how many items were hidden from your profile.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722501/35649080532f8c6ed13948e0/X1m2QBoignRr9UGkQjvqL7ZmY4VC5KEZcfI5anwDZdI3kj0KqHE-El06Xaxk2xpfJTyKtNDzXYWVp0ZVneCgbd6tysTntHCW7QUN9I0w-FbYyGIksF6zjBb2Qr8h9QMjaZSxjgFEcjWNXauRAEVq2Dc" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You can always Unhide the NFT to move it back to your Collected tab. You can also follow these steps to report an unsolicited NFT as spam.
                    </p>
                    <h2 className="text-2xl font-semibold">Hiding a collection</h2>
                    <br />
                    <br />
                    <p className="text-[16px]">
                        If you own all of the items in your collection, you can choose to hide the collection page on OpenSea by following the steps below. Keep in mind that you won’t be able to reverse this action manually. If you hide a collection by mistake, you’ll need to reach out to OpenSea Support.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Hover over your profile icon on the righthand side of your screen and click Studio.
                        <br />
                        2. Find the collection you’d like to hide on OpenSea. Hover over the “More” dropdown and select Hide from OpenSea.
                        <br />
                        3. You’ll see a confirmation message appear. Click Hide from OpenSea.
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722505/89383efe58e8d3235a4a0555/21459281031187" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. You’ll see a “Collection hidden” confirmation message.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Burning an item</h2>
                    <br />
                    <p className="text-[16px] p-6 rounded-md bg-[#c8d7e6] border border-solid">
                        ⚠️ Burning an NFT is irreversible and burned NFTs can’t be retrieved by anyone. You should be certain you no longer want to own this NFT before burning it.
                    </p><br />
                    <p className="text-[16px]">
                        If you’d like to remove an item from your wallet entirely, you can “burn” it by sending it to a wallet address no one can access (a null address), making the NFT unusable. Burning an item is considered a transaction on the blockchain and will require gas fees.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You can follow these steps to “burn” an item:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Navigate to the item page for the item you'd like to transfer.
                        <br />
                        2. In the upper right corner, click the Transfer button.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722506/adfa8ab349dc0ba24bf31f9b/13336063808147" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. Click the trash icon and then click Burn.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722507/4debcf38f76113e35a451bd9/21459305792275" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Confirm the signature request in your wallet. Since burning an item requires a blockchain transaction, you’ll need to pay a gas fee.
                        <br />
                        5. You’ll see a confirmation message once the item has been transferred. You can also view the confirmation on Etherscan, Polygonscan, or another blockchain explorer by searching for your wallet address and checking the Transactions tab.
                    </p>


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default HowDoIDeleteAnNft