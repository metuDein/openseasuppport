import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const WhatIsANonFungibleToken = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'What is a Non-Fungible Token (NFT)?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What is a Non-Fungible Token (NFT)?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">In this article, we'll break down what an NFT is.
                    </p>
                    <br />

                    <p className="text-[16px]">Non-Fungible Tokens (NFTs) are unique digital items with blockchain-managed ownership. There are many kinds and applications of NFTs. Before we dive into the details, let's learn about a key term: fungibility.
                    </p>
                    <br />

                    <h2 className="text-2xl font-semibold"> What is fungibility?</h2>
                    <br />
                    <p className="text-[16px]">If something is fungible, it's easily exchanged with something of equal value. It's the ability of a good or an item to be interchanged with other individual goods or items of the same type.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        A simple comparison of fungible, semi-fungible, and non-fungible items is pictured below.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720036/aa6f8e68e80b4bf368f32d44/6641960972051" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">

                        Fungible items like a dollar bill, gold, or even cryptocurrencies like Bitcoin and Ethereum, can be substituted with one another without losing value. They are fungible.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold"> Non-fungibility and NFTs</h2>
                    <br />

                    <p className="text-[16px]">
                        If something is non-fungible, it means it cannot be replaced. It represents something unique in value - and that's what an NFT is!
                    </p>
                    <br />
                    <p className="text-[16px]">



                        The token part of Non-Fungible Token refers to a digital certificate stored on a publicly verifiable distributed database, also known as a blockchain.

                    </p>
                    <br />
                    <p className="text-[16px]">
                        The information on this digital certificate, also known as a smart contract, makes each NFT unique. No two NFTs can be swapped, and this makes them non-fungible. Examples of NFTs include digital art, collectibles, virtual reality items, crypto domain names, ownership records for physical items, and more!
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold"> Different types of NFTs</h2>
                    <br />
                    <p className="text-[16px]">
                        There are two types of NFTs currently supported on OpenSea.

                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >

                            1/1 NFTs - typically known as ERC-721 tokens
                        </li> <br />
                        <li className="list-disc" >
                            Semi-fungible NFTs - typically known as ERC-1155 tokens
                        </li> <br />
                    </p>
                    <p className="text-[16px]">
                        1/1 NFTs, known by their token standard as ERC-721 on Ethereum, are the classic definition of Non-Fungible Tokens that we've described above. Each NFT is unique and distinct from other NFTs.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Semi-fungible NFTs, known by their token standard ERC-1155 on Ethereum, are slightly different. Because they are semi-fungible, the items themselves are distinct from other NFTs. However, they might have a quantity greater than one. These NFTs are great for gaming items and creating membership passes for your community!
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To check whether an NFT is 1/1 or semi-fungible, all you have to do is check the Details tab on the bottom left of any item page.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720039/f321542bfb5103a169bfa8bb/16319776619923" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        There are a few things to know when interacting with ERC-721 and ERC-1155 NFTs.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            On OpenSea, ERC-1155 NFTs can't be listed on auction.
                        </li> <br />
                        <li className="list-disc" >
                            Some wallets, like MetaMask mobile, have issues sending ERC1155s in-app.
                        </li> <br />
                    </p>
                    <br />


                    <p className="text-[16px]">
                        Now that you've learned what an NFT is check out some other key terms in NFTs and Web3!
                    </p>


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatIsANonFungibleToken