import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Reaction from "../../../reaction/Reaction"

const CreateYourAccountWithAnEmail = () => {
    const content = (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <div className="flex items-center space-x-2 mb-4">
                    <Link className="text-[14px]"> All Collections </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
                    <Link className="text-[14px]"> Getting started with OpenSea </Link>
                    <FontAwesomeIcon icon={faAngleRight} className="inline text-[10px]" />
                    <p className="text-[14px] text-[#737373]"> Getting Started with OpenSea</p>
                </div>

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Create your account with an email</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">
                    <p className="text-[16px]">Before you can purchase any items using OpenSea, you’ll need to create an account with a crypto wallet. For other online purchases, you might not need to create an account, but you do need to tell them where to ship your order. Since these items live on the blockchain, they need to be directly linked to your wallet so that you’re the owner.</p>
                    <br />
                    <p className="text-[16px]">
                        You can follow these steps to create your OpenSea account with a  <b> self-custodial </b> <Link className="underline text-blue-500">crypto wallet</Link> using your email. The email login experience is powered by a third-party partner, <Link className="underline text-blue-500">Privy</Link>. Logging in with your email is not available on our mobile app at this time
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’re looking to bring your existing crypto wallet to log in, learn more <Link className="underline text-blue-500">here</Link>.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Create your OpenSea account</h2>
                    <br />

                    <p className="text-[16px]">
                        1. Navigate to <Link className="underline text-blue-500"> opensea.io</Link>.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        2. Click Login in the upper right corner of the site.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        3. Input your email address in the Continue with email field to create an account using an email address.
                    </p>
                    <br />
                    <img src="assets/images/createwithemail1.png" alt="create with email" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">

                        Next, click Sign up and Create Wallet after confirming your email address is correct.
                    </p>
                    <br />
                    <img src="assets/images/createwithemail1.png" alt="create with email" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        This email address is tied to your account, and can’t be changed. If you want to log in with a different email address later, you’ll need to create a new account.
                    </p>
                    <br />
                    <p className="text-[16px]">

                        4. Navigate to your email to look for your one-time code. Be sure to check your spam folder if you don’t see it in your inbox.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        5. Enter your one-time code.
                    </p>
                    <br />
                    <img src="assets/images/createwithemail1.png" alt="create with email" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        6. Next, set up a two-factor verification option to help authenticate and protect your account: SMS on a mobile device (if you live in the U.S. or Canada) or an Authenticator app like Google Authenticator. You’ll need to have access to this when you take certain actions on OpenSea using your wallet that require a signature request, such as when you purchase an item. Learn more about transaction two-factor authentication in our Help Center guide.
                    </p>
                    <br />
                    <p className="text-[16px]">Keep in mind that you cannot use a single mobile number for SMS two-factor authentication on multiple accounts. If you set up another account, you’ll need to use a different security option.</p>
                    <br />
                    <img src="assets/images/createwithemail1.png" alt="create with email" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">

                        7. On the next screen, you’ll be prompted to accept the OpenSea Terms of Service.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        In the future, when you visit OpenSea, you’ll need to sign in using the same email address. Any item you purchase will be tied to this specific account, so you’ll need to be signed in to see your items.
                    </p><br />
                    <p className="text-[16px] p-6 rounded-md bg-[#c8d7e6] border border-solid">
                        ⚠️ If you lose access to your authentication method or email, you will lose access to your wallet, so be sure to keep your login information accessible and secure.
                    </p><br />
                    <p className="text-[16px]">
                        Once you’re logged in, navigate to your Profile details page in Settings and choose a unique username. You can also connect your social media accounts, upload a profile picture or banner image, or add a short bio. Adding this information can help you identify your account if you run into any login issues later on.
                    </p><br />
                    <p className="text-[16px]">
                        When signed in to your account, you can browse OpenSea and add any collection that sparks your interest to your watchlist.
                    </p><br />
                    <Link className="bg-blue-500 p-3 rounded text-center text-white font-bold mb-3 block max-w-xl"> Read on to learn more about your new self-custodial wallet. </Link>
                    <br />
                    <p className="text-[16px] p-6 rounded-md bg-[#c8d7e6] border border-solid">
                        When you log into OpenSea with an email, OpenSea doesn’t have control over your items or funds. Instead, you control your wallet!
                        <br />
                        <br />
                        For your security, OpenSea will have access to your private key.
                    </p><br />

                    <p className="text-[16px]"></p><br />







                </div>

                <Reaction />
            </section>
        </main>
    )

    return content
}
export default CreateYourAccountWithAnEmail