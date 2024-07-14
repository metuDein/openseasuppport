import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"
import { exportDropDown } from "../DropDownData"
import DropDown from "../../../cards/DropDown"

const ExecutionRevertedAndTransferErrors = () => {
    const renderTabs = () => (
        exportDropDown.map(item => <DropDown key={item.id} title={item.title} content={item.content} id={item.id} />)
    )


    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'What fees do I pay on OpenSea?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">“Execution Reverted” and Transfer Errors</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        An “Execution Reverted” or transfer error can happen while using certain functionality on OpenSea such as:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Accepting an offer
                        </li>
                        <li className="list-disc" >
                            Listing an item
                        </li>
                        <li className="list-disc" >
                            Transferring an item
                        </li>
                        <li className="list-disc" >
                            Buying an item
                        </li> <br />

                    </p>

                    <p className="text-[16px]">You can find more information about the specific error message you're experiencing below.
                    </p>
                    {renderTabs()}

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default ExecutionRevertedAndTransferErrors