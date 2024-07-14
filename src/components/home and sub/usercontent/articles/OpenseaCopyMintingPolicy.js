import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"
import DropDown from "../../../cards/DropDown"
import { copyMintDropdown } from "../../faqs/DropDownData"


const OpenseaCopyMintingPolicy = () => {
    const renderTabs = () => (
        copyMintDropdown.map(item => <DropDown key={item.id} id={item.id} title={item.title} content={item.content} />)
    )

    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'What is OpenSea\'s copymint policy?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What is OpenSea's copymint policy?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        The web3 ecosystem thrives because of creators and their communities. For creators, NFTs provide an opportunity to meaningfully share and monetize their content in a new and exciting way. For their communities, NFTs are a way of showing support for creators while building a sense of community with fellow token holders.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        At OpenSea, we recognize the efforts that original creators put into their work and want to help make sure other works don’t cause confusion or detract from the original. We consider an NFT a 'copymint' if it was created with the intent to deceive users into thinking it’s the original. If we believe an NFT is a copymint, OpenSea users won’t be able to view it, and we’ll work to delist collections and disable accounts with repeated copymint violations (this procedure exists in addition to OpenSea’s existing DMCA procedure, which allows individuals to notify OpenSea if they believe an NFT infringes on their copyrighted work). This is done through a combination of image detection technology and human review. “Delisting” these items does not remove them from the blockchain, just from OpenSea.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Going forward, we may consider an item to be a copymint if it has one or more of the following characteristics:
                    </p>
                    <br />
                    <ol className="text-[16px]">
                        <li className="list-decimal" >
                            A pixel-for-pixel replica (exact match of an original collection)

                        </li>
                        <li className="list-decimal" >
                            A replica that is flipped, rotated, or facing the opposite direction
                        </li>
                        <li className="list-decimal" >
                            A replica that is resized, zoomed in or out, cropped, or repositioned
                        </li>
                        <li className="list-decimal" >
                            A replica with added or removed borders and edges
                        </li>
                        <li className="list-decimal" >
                            A replica with unintegrated texts, logos, or emojis, either typed or drawn
                        </li>

                        <li className="list-decimal" >
                            A replica that only swaps the background color
                        </li>
                        <li className="list-decimal" >
                            A replica with colors swapped, modified, or saturated (for example, colors have been brightened or darkened, including black and white versions of the original)
                        </li>
                        <li className="list-decimal" >
                            A pixelated version of the original artwork
                        </li>
                    </ol>
                    <br />


                    <p className="text-[16px]">
                        The goal of this policy is not to tamp down on inspiration. We recognize that popular collections are often a source of inspiration, and we want to provide space for creators to contribute “remixes” of the original work. In many cases, these remixes help create ecosystems around a given collection, and many creators aspire to build collections that take on a creative ecosystem of their own. There is an important—but nuanced—difference between a remix and a copymint.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To fall outside of the copymint definition, there must be multiple, substantial changes to an existing NFT. And even if OpenSea considers the newer work to be a remix, the copyright holder still may file a Digital Millennium Copyright Act (DMCA) legal request on the grounds that it violates their copyright. We cannot provide legal advice about whether a particular NFT or collection violates a copyright.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        We aren’t art critics and our copymint policy isn’t about labeling “good” or “bad” art. Instead, our copymint policy seeks to help reduce instances of the community seeing NFTs that aim to confuse and deceive collectors into purchasing these copymint NFTs. After reviewing thousands of examples, we’ve identified the eight characteristics above as common potential causes of confusion, and thus effective ways to identify a copymint. This list is not exhaustive and may evolve along as the NFT ecosystem evolves.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">FAQs</h2>
                    <br />
                    {renderTabs()}
                    <br />
                    <h2 className="text-2xl font-semibold">Copymint examples</h2>
                    <br />
                    <p className="text-[16px]">
                        1. A pixel-for-pixel replica (exact match)
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719150/6b8fe7ef5bd62c0e54376033/8381530449299?expires=1720861200&signature=305a57ace9c82e89b11b6d2f22fa95ad2a2380c4619fa03ad6adbc74f3b8afc8" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        2. A replica that is flipped, rotated, or facing the opposite direction
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719147/26d98136bb3ef15f093a4ad7/8386706331795?expires=1720861200&signature=0ba38c2eccfa057d85cab81ddeb8ab88e19b32c2e508f60b1f202858144bc131" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. A replica that is resized, zoomed in or out, cropped, or repositioned
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719149/f31c0a682ccf083dfcc1185a/8386971504531?expires=1720861200&signature=6aa71ae1ac8e3020eeb31c4d8d47043c39eb455c7aa197f8a81225470bb4a388" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. A replica with added or removed borders and edges
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719151/88b77a72ef4af9538d58fd95/8386988983571?expires=1720861200&signature=a740759c54a4b1895b5f0c5e7e9a689ea95877f4b4f6a9c6008f85b3d5055c50" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        5. A replica with unintegrated texts, logos, or emojis, either typed or drawn
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719170/129c7def4e08aa929f3b60d3/8387202727315?expires=1720861200&signature=00a2da89925b326e3d52f4d11b459754ab265b8d344a263e8f6e26d1a1e77c2f" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        6. A replica that only swaps the background color
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719168/11b3712c7925fadd2a9f2864/8387100382483?expires=1720861200&signature=a3234f5343a607d3e417ea02197f81c8485260be59411c89d94e7908442d3c72" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        7. A replica with colors swapped, modified, or saturated (for example, colors have been brightened or darkened, including black and white versions of the original)
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719172/22e7f163a4dac8c91e761067/8387101682963?expires=1720861200&signature=103c020c3a0604a9f2fd365b125f23120a45c64c41162e198c4d01a4e7a71121" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        8. A pixelated version of the original artwork
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719173/e6451157ebeb336ef0eb9946/8387103676435?expires=1720861200&signature=8b7f3112e4eec319774bbecb460cc4b714b795a7f2b95f2595f92cbf06ddb05d" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default OpenseaCopyMintingPolicy