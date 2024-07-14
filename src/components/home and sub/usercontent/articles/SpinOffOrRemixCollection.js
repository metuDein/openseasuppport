import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const SpinOffOrRemixCollection = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'Are spin-off, homage, or remix collections allowed on OpenSea?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Are spin-off, homage, or remix collections allowed on OpenSea?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        This guide looks at how OpenSea may moderate collections inspired by established NFT works such as CryptoPunks or Bored Ape Yacht Club. We also introduce the concept of "Fair Use" for users to consider before creating NFTs.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">What is Fair Use?</h2>
                    <p className="text-[16px]">
                        Generally speaking, fair use means using a copyrighted work (like a book, film, or character) in a transformative way for uses such as commentary, criticism, education, or parody.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Some real-life examples of fair use may include:
                    </p>
                    <br />
                    <ul className="text-[16px]">
                        <li className="list-decimal" >
                            quoting a book passage when writing a book review

                        </li>
                        <li className="list-decimal" >
                            using movie footage when editing a video
                        </li>
                    </ul>
                    <br />
                    <h2 className="text-2xl font-semibold">How does this apply to NFTs?</h2>
                    <br />


                    <p className="text-[16px]">
                        Now that we've defined fair use, consider the following questions before creating your NFT collection.
                    </p>
                    <br />
                    <ul className="text-[16px]">
                        <li className="list-decimal" >
                            Do you own the original rights for all items in your work?

                        </li>
                        <li className="list-decimal" >
                            If not, does your use of the copyrighted work add new expression, meaning, or message to the original work?
                        </li>
                        <li className="list-decimal" >
                            Does your use of the copyrighted work adversely affect the value or owners of the original work?
                        </li>
                        <li className="list-decimal" >
                            Do you have written authorization from the original creator to create an NFT?
                        </li>
                        <li className="list-decimal" >
                            If you're modifying an existing NFT, do you own the original NFT in your account?
                        </li>
                    </ul>
                    <br />
                    <p className="text-[16px]">
                        Our User Safety team reviews countless collections every day. During this process, many collections have been removed from OpenSea for not qualifying as fair use.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Simply adding a photo filter or text to an image may not qualify as fair use. Including disclaimer wording such as "all rights go to the author" or "no infringement intended" in your description also does not exempt you from infringement claims, as the copyright holder has not granted permission.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Works that are judged by OpenSea's user safety team to infringe on the intellectual property rights of others may be removed at any time. For more information, please refer to our Terms of Service.
                    </p>
                    <br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default SpinOffOrRemixCollection