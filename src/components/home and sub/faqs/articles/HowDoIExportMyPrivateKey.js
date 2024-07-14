import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const HowDoIExportMyPrivateKey = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How do i export my privateKey?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do i export my privateKey?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">
                    <p className="text-[16px] p-6 rounded-md bg-[#c8d7e6] border border-solid">
                        ⚠️ It’s important to never share your private key with anyone, so be sure to store it in a secure place. OpenSea staff will  ask for you to send it or provide it for certain circumstances.
                    </p><br />
                    <p className="text-[16px]">Your private key is generated automatically when you create a self-custodial crypto wallet, and it serves as a digital signature proving that you’re the owner of the blockchain wallet address where your items are stored.</p>
                    <br />
                    <p className="text-[16px]">


                        If you got started with OpenSea with email, you can export your private key according to the steps below. If you use a third-party crypto wallet, such as MetaMask, follow your provider’s instructions on how to export your key.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To export your key, navigate to your wallet settings and click Export private key. Before you can export your key, you’ll be required to complete an authentication step.
                    </p>
                    <br />

                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718516/7a6bb0a6b7ddb4e4ba29efc5/24975061881491?expires=1712065685&signature=82c9907d3cb3a085e5a0c91d9fe2f74cbb88696f59d91b65770cb6904fb47a31" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">
                        Because the email login you use on OpenSea can’t be used on other websites, if you'd like to access your items elsewhere, you may want to export your private key and import it into another third-party wallet. Follow the instructions in your wallet to export your key, and the third-party wallet’s instructions to import it. As an example, here are MetaMask’s instructions.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        Remember that OpenSea does not have access to or control of your private key. This means that if you lose your private key, OpenSea will not be able to recover it for you.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">  Regaining access</h2>

                    <br />


                    <p className="text-[16px]">
                        If you have lost access to the authentication method for your OpenSea account that you log into with an email, there are two ways to regain access to your wallet:
                    </p>
                    <p className="text-[16px]">
                        1. If you have backed up your wallet’s private key according to the steps above, you can import your private key into a new third-party wallet, such as MetaMask, to access your funds and NFTs.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        2. If you have lost authenticator access, you should use your authenticator app's backup QR code or key to regain access. Please follow the third-party provider’s instructions.
                    </p>


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default HowDoIExportMyPrivateKey