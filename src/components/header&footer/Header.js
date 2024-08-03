import { faGlobe, faWallet, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
// import ConnectWalletTab from "../cards/ConnectWalletTab"
import { useState, useEffect } from "react"


const Header = () => {
    // const [wallet, setWallet] = useState(false)
    // const [isLocked, setIsLocked] = useState(false)
    // const [addr, setAddr] = useState('')
    // const [balance, setBalance] = useState(0)
    // const [menu, setMenu] = useState(false)

    // useEffect(() => {
    //     if (isLocked) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }

    //     // Cleanup on unmount
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     };
    // }, [isLocked])

    // const activateWallet = () => {
    //     setWallet(true)
    //     setIsLocked(true)
    // }
    // const deactivateWallet = () => {
    //     setWallet(false)
    //     setIsLocked(false)
    // }

    // const toggleMenu = () => {
    //     setMenu(prev => !prev)
    // }

    // const disconnect = () => {
    //     setAddr('')
    //     setBalance(0)
    //     setMenu(false)
    // }

    return (
        <header className="p-7 bg-white flex justify-between items-center">
            <nav className="mx-auto w-full max-w-4xl flex justify-between items-center">
                <div>
                    <Link to={'/'}>
                        <img className="w-[35px] h-[35px]" src="https://downloads.intercomcdn.com/i/o/483383/9ebf33acaebb36649fc325dc/a3dd3fcfe89960f9368750bbb4fd6bd8.png" alt="Header logo" />
                    </Link>
                </div>
                <div className="flex space-x-3">
                    {/* <div className="mr-7 relative">
                        {!wallet && !addr && <button className="p-1" onClick={activateWallet}>Connect Wallet <FontAwesomeIcon icon={faWallet} /></button>
                        }
                        {addr &&
                            <div onClick={() => toggleMenu()} className="flex items-center p-1 bg-gray-200 rounded-md cursor-pointer">
                                <FontAwesomeIcon icon={faWallet} className="mx-1" />
                                <div className="flex items-center justify-around">
                                    <div className="p-2"> {Math.floor(balance).toFixed(3)} ETH </div>
                                    <div className="w-[1px] h-[14px] mx-3 bg-gray-400 hidden sm:block"></div>
                                    <div className="p-2 hidden sm:block">{Math.floor(balance).toFixed(3)} WETH</div>
                                </div>
                            </div>}
                        {menu && <div className="absolute bg-white top-[130%] w-full p-3 z-30 rounded-lg shadow-md">
                            <button onClick={() => disconnect()} className="hover:bg-gray-200 p-1 sm:p-3 transition-all duration-300 rounded-md flex items-center w-full">  <FontAwesomeIcon icon={faRightFromBracket} className="sm:mr-4 mr-1 inline" />  <span>Disconnect</span> </button>
                        </div>}
                    </div> */}

                    <div className="flex cursor-pointer p-1">
                        <span>
                            <FontAwesomeIcon icon={faGlobe} className="mr-1" />
                        </span>
                        <p>English</p>
                    </div>
                </div>
            </nav>


        </header>
    )
}
export default Header