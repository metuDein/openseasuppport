import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const OopsSomehingWentWrong = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'Why am I seeing an “Oops, something went wrong” error?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Why am I seeing an “Oops, something went wrong” error?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        The “Oops, something went wrong” error is a generic error message that can show in many different situations. The good news is that it can usually be resolved by simply refreshing your browser tab. If that doesn’t fix the error, you can try the following:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Update your browser or app to the latest version. Here’s how to update Chrome and Firefox
                        </li>
                        <li className="list-disc" >
                            Disable any firewall or VPN when accessing OpenSea
                        </li>
                        <li className="list-disc" >
                            Make sure you only have one opensea.io browser tab open at a time
                        </li>
                        <li className="list-disc" >
                            Turn off all browser extensions except for your wallet, including Google translate or pop-up blockers
                        </li>
                        <li className="list-disc" >
                            Clear your cache
                        </li>
                        <li className="list-disc" >
                            Try the same action on an entirely different browser, device, or network
                        </li> <br />

                    </p>

                    <p className="text-[16px]">If none of these troubleshooting steps help, you can always reach out to us at support.opensea.io. Make sure to include your wallet ID, your browser, where you’re seeing the issue, and a description of the issue, including the Error ID if you’re seeing one.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721807/3472a368acfa8008eb8d509c/12218623892115" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default OopsSomehingWentWrong