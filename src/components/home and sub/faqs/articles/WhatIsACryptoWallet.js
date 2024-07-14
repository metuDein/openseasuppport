import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const WhatIsACryptoWallet = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'What is a crypto wallet?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What is a crypto wallet?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        In this guide, we’ll explain the different types of crypto wallets and recommend ways to secure them. Crypto wallets are the basis of web3 and understanding how they work is helpful to protecting your NFTs and cryptocurrencies.
                    </p>
                    <br />

                    <p className="text-[16px]">Before you start, you may want to familiarize yourself with these key terms in NFTs and Web3. Once you're ready, let's dive in!
                    </p>
                    <br />
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/7pmA02zY8Ag" title="Crypto Wallets Explained: How to Set Up a Crypto Wallet | OpenSea" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <br />
                    <i>Watch our tutorial to learn how to install a crypto wallet to connect with OpenSea. </i>

                    <h2 className="text-2xl font-semibold"> What is a wallet?</h2>
                    <br />
                    <p className="text-[16px]">“Wallet” is a pretty poor metaphor for a crypto wallet. The word “wallet” makes you think that securing a crypto wallet is the same as securing the wallet you keep in your pocket. Most importantly, it seems that if you have your crypto wallet then no one else can have it at the same time. Unfortunately, this is not the case.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        Since we are stuck with the term, what exactly is a wallet?
                    </p>
                    <br />
                    <p className="text-[16px]">
                        A wallet is a private key.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Private keys are like a personal signature. In the physical world, it’s common to use your personal signature to authorize documents or contracts. In the web3 space, only you can produce this signature (the private key), but the entire world knows how to check it by looking at your wallet address.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To get slightly more technical, both public and private keys are a string of random letters and numbers that are associated directly with each other. Each public key can verify one private key, and each private key can produce a message that can be verified by one public key.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        In web3, the public key is the wallet address. The wallet address on Ethereum is the string of random letters and numbers that starts with “0x”. Everyone can know your wallet address, and knowing your wallet address does not give any control over your wallet.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        In summary, the private key grants full control over the wallet. The seed phrase, usually 12-words long, is a shortcut to the private key and to the wallet itself. This is why it is so important to protect your seed phrase.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720256/e69a27be4e47dbce9fc339b2/13161225483283" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <h2 className="text-2xl font-semibold"> Wallet Types</h2>
                    <br />
                    <p className="text-[16px]">

                        There are two main types of wallets:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <ol className="list-disc" >

                            Custodial wallets
                        </ol> <br />
                        <ol className="list-disc" >
                            Non-custodial wallets
                        </ol> <br />
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Custodial wallets are managed entirely by a third party. Non-custodial wallets are maintained and secured directly by you; they include both hardware and software wallets.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Parts of a non-custodial wallet
                    </h2>
                    <br />
                    <p className="text-[16px]">
                        <ol className="list-disc" >
                            Seed phrase: Your seed phrase should never be stored digitally as a picture or as text on a computer or mobile device. The phrase is equivalent to your wallet, and anyone who has it has complete control of your wallet. The best thing to do is write it down on paper (or metal) and store it in a secure place in the physical world. If you log in with email, you won’t see a seed phrase.
                        </ol> <br />
                        <ol className="list-disc" >
                            Private key: If you log in with email on OpenSea, you’ll need to export your private key if you want to import it into another wallet (such as MetaMask) for use on another site. Otherwise, you’ll never need to have direct access to your private key. Your private key is stored within your wallet application and your best protection is to select a well-known one. MetaMask is a popular browser extension wallet application and Trezor is a popular hardware wallet application.
                        </ol> <br />
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Recommended approach to securing your wallet
                    </h2>
                    <br />

                    <p className="text-[16px]">
                        The risk of having a wallet compromised increases the more often it's used. Because of this, we recommend using a two-wallet system at a minimum, with a hot wallet used for everyday transactions and a cold wallet for long-term storage of your crypto items.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Hot wallet
                    </h2>
                    <br />

                    <p className="text-[16px]">
                        Just as your physical wallet wouldn’t have all your money in it, your hot wallet should not have a large amount of cryptocurrency in it. Therefore, you should only have enough cryptocurrency for purchases and only crypto items that you have recently acquired or are planning on selling. This is your day-to-day wallet that you can afford to lose.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Cold wallet
                    </h2>
                    <br />

                    <p className="text-[16px]">
                        A cold wallet is one that is not easily accessible to you or anyone else. It could be a hardware wallet, but it could also be a software wallet whose private key and seed phrase is stored on paper in a safe deposit box or a laptop that is only used when you need to interact with your cold wallet. This wallet should store all of your high-value items and any significant amounts of cryptocurrency.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Staying safe with your wallet
                    </h2>
                    <br />
                    <p className="text-[16px]">
                        We recommend reading through our security guide for tips on how to protect your NFTs and stay safe when using your wallet. When you're ready, you can take a look at the blockchains and cryptocurrencies that are compatible with OpenSea, and learn more about how to purchase crypto.
                    </p>
                    <br />
                    <p className="text-[16px]">

                        Once you've finished your research on crypto wallets, check out which ones you can use with OpenSea!
                    </p>
                    <br />



                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatIsACryptoWallet