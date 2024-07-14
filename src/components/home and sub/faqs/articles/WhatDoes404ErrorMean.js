import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const WhatDoes404ErrorMean = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'What does a "404" error mean?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What does a "404" error mean?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        A 404 error on a page on OpenSea means that the page no longer exists and can't be visited.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        This error can be caused by a number of different things, including:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            A collection may have changed its URL, and you followed the old link
                        </li>
                        <li className="list-disc" >
                            A user may have changed their username, and you followed the old link
                        </li>
                        <li className="list-disc" >
                            A Drops page that isn't publicly published yet
                        </li>
                        <li className="list-disc" >
                            A delisted collection page
                        </li>
                        <li className="list-disc" >
                            A disabled account
                        </li>
                        <br />

                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721636/7cdc309bbaebf27aeabeb00f/20857840999827" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />



                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatDoes404ErrorMean