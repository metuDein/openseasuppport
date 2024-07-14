import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const WhatCryptoWalletsCanIUseWithOpenSea = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'What crypto wallets can I use with OpenSea?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What crypto wallets can I use with OpenSea?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        Just as there are many banks and credit cards, there are many different crypto wallet providers to choose from. They all serve the same purpose, but each one takes a different approach and makes different tradeoffs.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        This guide introduces many of the crypto wallets that are supported on OpenSea. At this time, OpenSea doesn’t support the use of multi-signature wallets (wallets that require two or more private keys to sign and send a transaction).
                    </p>
                    <br />

                    <h2 className="text-2xl font-semibold">What crypto wallets can I use with OpenSea?</h2>
                    <br />
                    <p className="text-[16px]">You can use any of the wallets listed below. They all have different features, but many users choose MetaMask or Coinbase Wallet. You can also get started on OpenSea with just an email address. Learn more in our Help Center guides.
                    </p>
                    <br />

                    <p className="text-[16px]">


                        Bitget – A browser extension and mobile app. Bitget is a decentralized multi-chain crypto wallet that currently supports over 75 mainnets.
                    </p>
                    <br />
                    <p className="text-[16px]">

                        Bitski – A simple-to-use wallet allowing users to sign up with an email and password.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Coinbase Wallet – The Coinbase Wallet app allows users to explore the decentralized web with a dApp browser. You do not need a Coinbase account to use the Coinbase Wallet app.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Core – A browser extension for the Avalanche ecosystem.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Fortmatic/Magic – A user-friendly wallet that allows you to sign up with your phone number from any device.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Kaikas – A browser extension for the Klaytn network.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        MetaMask – A browser extension and mobile app. MetaMask is web3’s most popular wallet and one of the oldest players in the industry.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Opera Touch – Opera Crypto Wallet works with your Opera computer browser and your Opera Touch for iOS browser (or Opera for Android) on your mobile device.
                    </p>
                    <br />
                    <p className="text-[16px]">

                        Phantom – Phantom is a popular non-custodial crypto wallet designed for Solana.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Trust Wallet – A non-custodial mobile wallet that stores your private key locally with an additional layer of security.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        WalletConnect – WalletConnect is a protocol supported by many different dApps and wallets.
                    </p>
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatCryptoWalletsCanIUseWithOpenSea