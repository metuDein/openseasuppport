import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const OpenSeaBurnMechanism = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'usercontent'} title2={'How does OpenSea handle NFTs with a burn mechanism?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How does OpenSea handle NFTs with a burn mechanism?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        One of the most exciting things about web3 is the transparency of the blockchain. All the information about an NFT—from the token ID and metadata, to the type of hat a PFP is wearing—is available to view through the smart contract.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Something you might see in a smart contract is a “burn mechanism.” When an NFT is burned, it’s sent to a wallet address that can’t be accessed by anyone. A smart contract with a burn mechanism might be authorized to burn your NFT, or even authorize others to burn your NFT.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You might be wondering, “Why would I authorize someone to take away something I paid for?” But some smart contracts use burn mechanisms in innovative ways. For example, token holders could compete in a high-stakes game—losers would have their NFTs burned and the winner would get to keep their NFT. Or a game developer could burn old avatars and airdrop new avatars to those token holders.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If an NFT contains a burn mechanism, OpenSea has guidelines for how it must be applied for user trust and protection:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            The collection description must include the existence of the burn mechanism and how the burn mechanism will be applied to NFTs in the collection
                        </li>
                        <li className="list-disc" >
                            We don’t allow burn mechanisms that burn NFTs for listing below the floor price
                        </li>
                        <li className="list-disc" >
                            We don’t allow NFTs that are guaranteed to be burned or burned at the full discretion of the creator. There must be an element of randomization, chance, or an event that triggers the burn
                        </li>
                        <br />
                    </p>
                    <p className="text-[16px]">
                        Finally, this guidance only applies to actual burn mechanisms, not smart contracts that can transfer NFTs to private wallets. This is different from burning, and we will delist collections with smart contracts that can transfer NFTs to a private wallet.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        When purchasing an NFT, it’s important to do your own research and review the smart contract. Every smart contract is different, but you can generally follow the below steps to see whether an Ethereum NFT contains a burn mechanism.
                    </p>
                    <br />
                    <ol className="text-[16px]">
                        <li className="list-disc" >
                            Visit the item’s page on OpenSea, and click on the contract address under Item Details. This will open the smart contract’s page on Etherscan in a new tab.
                            You can also obtain the contract address from the OpenSea item URL: https://opensea.io/assets/ chain-contract address-token id
                        </li>
                        <li className="list-disc" >
                            Click on the Contract tab, and scroll down to Contract Source Code (Solidity).
                            If the contract isn’t written in a human-readable format, you can use https://ethervm.io/decompile to decompile the contract, which makes it more readable. This is a third-party tool, so we’re unable to make any guarantees about their services.
                        </li>
                        <li className="list-disc" >
                            Search “batchburn” on the right-hand side of the page in Etherscan. If there’s a burn mechanism, you’ll likely see a result for BatchBurn:
                        </li>
                        <br />
                    </ol>
                    <p className="text-[16px]">
                        A blue checkmark badge on a collection means the collection belongs to a verified account and has significant interest or sales.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721287/ab8f7ff13231b36f23bf79f9/9729470812051?expires=1720973700&signature=b31f0bff0a7c57cabab60def5195d6008978830ab83087814bc921ce3e015427" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        However, the collection creators may have hidden the function by using a different word instead of BatchBurn. You can also search `uint256 len = tokenids.length;` if you don’t see search results for BatchBurn. The following string is still a burn function:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        {`function anynametheywant (uint256[] memory tokenids) external onlyOwner {
                            uint256 len = tokenids.length;
                        for (uint256 i; i < len; i++) {
                            uint256 tokenid = tokenids[i];
                        transferFrom(ownerOf(tokenid), 0x221738d6A8A017ab32Ff123BEb47cb5BA3c8A935,
                        tokenid)`}
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Web3 is new and exciting, and we want to create a space where everyone can have a great experience. As with any purchase, you should do your due diligence to make an informed decision as these steps may not be comprehensive.
                    </p>
                    <br />


                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default OpenSeaBurnMechanism