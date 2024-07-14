import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"

const HowDoIUseOpenSeaStudios = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How to use opensea studio?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How to use to opensea studio?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">You can create NFTs using OpenSea Studio. This is a hub for all creators, from web3 beginners to experts, to create NFTs using tools that don’t require coding knowledge.

                    </p>
                    <br />
                    <p className="text-[16px]">
                        To get started, hover over your profile icon, and select Studio. Select one of your existing collections if you’re just looking to make some updates, or click Create to launch a new NFT.
                    </p>
                    <br />
                    <p className="text-[16px]">


                        You’ll see two options: Drop a Collection or Create an NFT. “Dropping” a collection means releasing a brand-new NFT collection your community can mint from. Creating an NFT means minting a new item into your wallet that you can list for sale later.
                    </p>
                    <br />

                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718560/355145d220648a053af621c5/21453035130515" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">  How do i know which option is right for me?</h2>
                    <br />
                    <p className="text-[16px]">
                        When you drop an NFT collection using OpenSea, your community and other buyers can mint NFTs directly into their wallet. Minting describes the process of “publishing” the NFT directly onto the blockchain; it doesn’t exist until a buyer mints it. This can be a good fit if you have an established community of buyers who would be eager to participate in the excitement of a Drop. We recommend reviewing the Drops section of our Help Center to learn more.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If this is your first time creating an NFT, or your community is smaller, you might prefer to start by minting (creating) an individual NFT or collection of NFTs using the “Mint an NFT” button in OpenSea Studio. This will enable you to mint an NFT directly into your own wallet. It’ll exist right away, without other buyers. Later, you can decide to list the NFT for sale. In this case, we’d recommend reviewing the Create an NFT section of our Help Center.


                    </p>
                    <br />

                    <p className="text-[16px]">
                        This chart compares both options side-by-side:
                    </p>
                    <br />
                    <table className="w-full mx-auto min-h-36 table border border-solid">
                        <thead className="w-full">
                            <tr key="" className="w-full flex items-center justify-between border-b border-solid ">
                                <th className="text-center self-center p-2 border-r basis-1/3">Feature</th>
                                <th className="text-center self-center p-2 border-r basis-1/3">Drop a collection</th>
                                <th className="text-center self-center p-2 border-r basis-1/3">Mint an NFT</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr key="" className="w-full flex items-center justify-between border-b border-solid ">
                                <td className="p-2 border-r basis-1/3">Display items immediately </td>
                                <td className="text-center self-center p-2 border-r basis-1/3"><FontAwesomeIcon icon={faXmark} className="text-[#c01616] mx-auto text-xl" /></td>
                                <td className="text-center p-2 border-r basis-1/3"><FontAwesomeIcon icon={faCheck} className="text-[#109d2d] mx-auto text-xl" /></td>
                            </tr>
                            <tr key="" className="w-full flex items-center justify-between border-b border-solid ">
                                <td className="p-2 border-r basis-1/3">Only display Items once they have been purchased </td>
                                <td className="text-center p-2 border-r basis-1/3"><FontAwesomeIcon icon={faCheck} className="text-[#109d2d] mx-auto text-xl" /></td>
                                <td className="text-center self-center p-2 border-r basis-1/3"><FontAwesomeIcon icon={faXmark} className="text-[#c01616] mx-auto text-xl" /></td>
                            </tr>
                            <tr key="" className="w-full flex items-center justify-between border-b border-solid ">
                                <td className="p-2 border-r basis-1/3">Only allow certain users to purchase in presale stages </td>
                                <td className="text-center p-2 border-r basis-1/3"><FontAwesomeIcon icon={faCheck} className="text-[#109d2d] mx-auto text-xl" /></td>
                                <td className="text-center self-center p-2 border-r basis-1/3"><FontAwesomeIcon icon={faXmark} className="text-[#c01616] mx-auto text-xl" /></td>
                            </tr>
                            <tr key="" className="w-full flex items-center justify-between border-b border-solid ">
                                <td className="p-2 border-r basis-1/3">Bulk-uploading NFT media </td>
                                <td className="text-center p-2 border-r basis-1/3"><FontAwesomeIcon icon={faCheck} className="text-[#109d2d] mx-auto text-xl" /></td>
                                <td className="text-center self-center p-2 border-r basis-1/3"><FontAwesomeIcon icon={faXmark} className="text-[#c01616] mx-auto text-xl" /></td>
                            </tr>
                            <tr key="" className="w-full flex items-center justify-between border-b border-solid ">
                                <td className="p-2 border-r basis-1/3">Token Standard </td>
                                <td className="p-2 border-r basis-1/3"> ERC-721</td>
                                <td className="self-center p-2 border-r basis-1/3">ERC-1155</td>
                            </tr>
                            <tr key="" className="w-full flex items-start justify-between border-b border-solid ">
                                <td className="p-2 border-r basis-1/3 ">Initial setup</td>
                                <td className="p-2 border-r basis-1/3">
                                    1. Deploy contract
                                    <br />
                                    <br />

                                    2. Prepare drop schedule
                                    <br />
                                    <br />

                                    3. Define allowlist
                                    <br />
                                    <br />

                                    4. Set pre-reveal
                                    <br />
                                    <br />

                                    5. Set drop earning
                                    <br />
                                    <br />

                                    6. Build drop page
                                    <br />
                                    <br />

                                    7. Publish drop
                                    <br />
                                    <br />

                                    8. Prepare metadata for drop
                                </td>
                                <td className="p-2 border-r basis-1/3">
                                    1. Deploy a contract

                                    <br />
                                    <br />

                                    2. Directly mint NFTs into your collection


                                </td>
                            </tr>
                            <tr key="" className="w-full flex items-start justify-between border-b border-solid ">
                                <td className="p-2 border-r basis-1/3 ">Minting process</td>
                                <td className="p-2 border-r basis-1/3">

                                    Community members mint NFTs from the drop page, and become the first owner(s) of the NFT
                                </td>
                                <td className="p-2 border-r basis-1/3">
                                    Collection creator directly mints NFTs into the collection and re-sells later if they choose

                                </td>
                            </tr>
                            <tr key="" className="w-full flex items-start justify-between border-b border-solid ">
                                <td className="p-2 border-r basis-1/3 ">Reveal conditions</td>
                                <td className="p-2 border-r basis-1/3">
                                    Either one of two are met:
                                    <br />
                                    <br />
                                    1. Mint stage ends and creator reveals the NFT media and metadata
                                    <br />
                                    <br />
                                    2. NFTs fully minted out (the collection is “sold out”) and creator reveals the NFT media and metadata
                                </td>
                                <td className="p-2 border-r basis-1/3">
                                    No reveal process. The NFT is visible as soon as it’s minted.
                                </td>
                            </tr>
                            <tr key="" className="w-full flex items-start justify-between border-b border-solid ">
                                <td className="p-2 border-r basis-1/3 ">Creator earnings enforcement</td>
                                <td className="p-2 border-r basis-1/3">
                                    Available
                                </td>
                                <td className="p-2 border-r basis-1/3">
                                    Available
                                </td>
                            </tr>
                            <tr key="" className="w-full flex items-start justify-between border-b border-solid ">
                                <td className="p-2 border-r basis-1/3 ">Type of creator</td>
                                <td className="p-2 border-r basis-1/3">
                                    Those who want their community or users to mint directly
                                </td>
                                <td className="p-2 border-r basis-1/3">
                                    Those who are getting started with NFTs and want the flexibility to sell their items later, or slowly create their collection.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default HowDoIUseOpenSeaStudios