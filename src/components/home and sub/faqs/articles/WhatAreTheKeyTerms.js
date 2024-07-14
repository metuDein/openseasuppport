import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"
import DropDown from "../../../cards/DropDown"
import { dropDownData } from "../DropDownData"

const WhatAreTheKeyTerms = () => {
    const renderTabs = () => (
        dropDownData.map(item => <DropDown key={item.id} id={item.id} title={item.title} content={item.content} />)
    )

    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'What are the key terms to know in NFTs and Web3?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What are the key terms to know in NFTs and Web3?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">Here's a list of key terms used in the NFT space that may be helpful to review before getting started on OpenSea.

                    </p>
                    <br />
                    {renderTabs()}
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatAreTheKeyTerms