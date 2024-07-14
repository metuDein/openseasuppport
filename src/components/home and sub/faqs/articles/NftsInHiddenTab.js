import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const NftsInHiddenTab = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'What NFTs are in the “hidden” tab in my profile?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What NFTs are in the “hidden” tab in my profile?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        Wondering why some NFTs end up in your “Hidden” tab on OpenSea? Let’s learn more.
                    </p>
                    <br />

                    <p className="text-[16px]">

                        One of the interesting properties of many blockchains is the ability for anyone to send and receive tokens to and from wallet addresses. That means you don’t have to buy or sell an NFT to have one transferred to your wallet. You don’t even need to accept a transfer to receive an NFT from someone else, similar to how you can receive an email from anyone.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Receiving an NFT you didn’t purchase doesn’t mean your wallet has been compromised. Sometimes, legitimate creators mint NFTs to people directly as part of a collection’s airdrop. But sometimes, similar to receiving a spam email, scammers will use transfers to send you NFTs that entice you to view NFT listings that contain links to malicious third-party websites.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To protect our users, OpenSea will generally move a transferred NFT to the Hidden tab if we think that it might be suspicious. In this case, the item won’t be in your Collected tab and the transfer won’t appear in your activity feed. Like an email spam folder, sometimes legitimate NFTs will appear in the Hidden tab, and at other times, malicious NFTs may appear in the Collected tab. Always exercise caution when clicking on a non-OpenSea URL associated with an NFT.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        OpenRarity is an open collaboration between OpenSea, icy.tools, Curio, and PROOF. The latest version includes Double Sort and Trait Count updates, improving rarity rankings for 1 out of 1 unique traits and giving more weight to trait counts that are less common.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold"> Viewing your hidden NFTs on OpenSea</h2>
                    <p className="text-[16px]">
                        If you were expecting a transfer but don’t see it, log in to your OpenSea profile and check More → Hidden.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722257/69537de2466ccd16f7a8faa0/18275719570195" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You can easily filter hidden items by selecting the Auto-hidden filter in the Hidden Status section.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722253/8ab833644a41183ee0ad6847/18275803745555" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">

                        If you’d like to unhide an item, in your OpenSea profile navigate to More → Hidden, click the three-dot menu on the bottom of the NFT you’d like to unhide, and select Unhide.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722269/95fd9e3ac72eb28ef51b6317/18275868383251" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">You'll see a confirmation message that the item was unhidden, and the item should now be visible in your Collected tab. Unhiding an item on OpenSea won't result in a direct interaction with the NFT or a third-party website.
                    </p>
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default NftsInHiddenTab