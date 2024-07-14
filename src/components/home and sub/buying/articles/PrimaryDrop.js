import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const PrimaryDrop = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I participate in a Primary Drop?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I participate in a Primary Drop?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        To participate in a Primary Drop on OpenSea, you'll need a crypto wallet to store your NFT, digital currency to purchase an NFT, and an OpenSea account.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        We recommend completing these steps well in advance of the start time so you’re ready to go when the drop starts and the NFTs are available to mint. Let’s dive in!
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        1. Create an OpenSea account</h2>
                    <br />
                    <p className="text-[16px]">
                        Before you can mint an item, you’ll need to log into OpenSea with a crypto wallet. A crypto wallet reflects the NFTs and digital currency that you own on the blockchain. You’ll use your wallet to approve transactions.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        There are two ways to get started:
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718651/88c0d95470fc32261f9ab0e7/16314829812243" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        If you’re buying ERC-1155s (semi-fungible items), you can add multiple copies to your cart from the item page.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Log in with email to create a wallet
                        </li>
                        <li className="list-disc" >
                            Log in with an existing crypto wallet
                        </li>

                    </p>
                    <p className="text-[16px]">
                        You can see the available types of crypto wallets in our help center guide, What crypto wallets can I use with OpenSea?
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        2. Purchase digital currency</h2>
                    <br />
                    <p className="text-[16px]">
                        Once you have a crypto wallet installed, you can buy cryptocurrency, which fuels transactions on the respective blockchain. You can purchase cryptocurrency from a digital currency exchange like Coinbase. You'll need cryptocurrency to mint and purchase an NFT and for the gas fees needed to complete your transaction. Depending on where you live, you may also be able to mint with a credit card.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        About Primary Drops</h2>
                    <br />
                    <p className="text-[16px]">
                        Now that your account is set up and you have ETH to purchase an NFT, you’ll be able to participate in a Primary Drop. Primary Drops on OpenSea allow you to be the first in line to buy an item the moment it’s minted. OpenSea supports artists and creators by providing a platform for drops to happen directly on OpenSea.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Each drop has a unique landing page where you can see the following information:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Drop name
                        </li>
                        <li className="list-disc" >
                            Creator name
                        </li>
                        <li className="list-disc" >
                            Links to the creator’s social media
                        </li>
                        <li className="list-disc" >
                            The mint schedule
                        </li>
                        <li className="list-disc" >
                            A sample gallery of the NFTs that will be minted
                        </li>
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720401/338910af845c9504ed6c734c/11136537015827" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Each creator who holds a Primary Drop on OpenSea determines the unique eligibility for presale, and the project page will contain the most up-to-date information on how to participate in any presale.


                    </p>
                    <br />
                    <p className="text-[16px]">
                        You can also sign up to receive an email reminder about the mint event or add the mint event to your calendar, including the presale.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720397/e23200a2da497f2df49bd5b8/14382294962323" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Minting with Ethereum</h2>
                    <br />
                    <p className="text-[16px]">
                        1. From opensea.io, navigate to the drop landing page.
                        <br />
                        2. Click Mint.
                        <br />
                        3. Select Crypto as the payment method and click Complete purchase.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720409/9eee15b48ee551a2a96ea25f/11139643862163" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. You’ll be asked to sign and approve the purchase in your wallet.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720410/d3cc020ef6de75b785730582/11140284796435" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Minting with a credit or debit card</h2>
                    <br />
                    <p className="text-[16px]">
                        If you live in a supported region and if a Primary Drop accepts fiat currency, you can use MoonPay to mint one NFT with a credit or debit card. MoonPay helps convert your fiat currency to cryptocurrency, which is used to purchase NFTs. A credit card processing fee will apply to all credit card purchases, and gas fees will apply as well.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. From opensea.io, navigate to the drop landing page.
                        <br />
                        2. Click Mint.
                        <br />

                        3. Select Card as the payment method and click Complete purchase.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720412/6bf56560b468913d009c7579/11139808531603" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Confirm your purchase details before clicking Continue. MoonPay may charge fees for their services. You can see network and processing fees by opening the "Purchasing NFT" dropdown.
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720417/8d640a50e629d1809ea634b3/11139921329299" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        5. If this is your first time using MoonPay, you'll need to set up your account by adding a debit/credit card and providing your first and last name, date of birth, nationality, and billing address. This process is not controlled by OpenSea and OpenSea doesn't store this data.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        6. After finishing MoonPay account setup, you’ll be taken back to a window confirming your mint is complete. As always, there may be slight delays in your transaction processing time due to network congestion.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720446/6224d86d53ec237b16774f5f/11139747840403" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">Once you’ve minted an item, it may take a moment for the image to be revealed. When this happens, this is usually an indication that the metadata needs to be refreshed.
                    </p>
                    <br />
                    <p className="text-[16px]">To refresh your metadata on OpenSea, navigate to your item page and click the Refresh metadata button in the upper right corner.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720459/dce19958c639cacc49fa8ea3/11139230798739" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You’ll then see the message “We’ve queued this item for an update!” on the bottom of the page.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Some collections also delay the reveal of items until a specific date. In this situation, you’ll need to check with the NFT collection for information on when the image will be revealed.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Viewing your NFT</h2>
                    <br />
                    <p className="text-[16px]">When an NFT has been minted, it will be in your wallet and can be viewed in your OpenSea account. You can think of your OpenSea account as a window into your crypto wallet, showing all the NFTs inside. OpenSea does not take custody of your items; your account provides access to view the transactions in your wallet.
                    </p>
                    <br />
                    <p className="text-[16px]">When the wallet used to purchase your NFT is connected to OpenSea, you will be able to view your NFTs in the Collected tab in your Profile.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Failed mints</h2>
                    <br />

                    <p className="text-[16px]">
                        If your mint failed, it’s possible that the drop has completed and no more NFTs are available. There are a limited number of items available for mint, and the mints may run out during your transaction. When this occurs, you’ll still pay the transaction gas fee.
                    </p>

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default PrimaryDrop