import { useEffect , useCallback } from "react"
import { useWeb3React } from '@web3-react/core'
import { connector } from '../../config/web3'
import { useRouter } from 'next/router'

export default function WalletConnector() {
    const router = useRouter()
    const { activate, active, deactivate ,error } = useWeb3React()

    const connect = useCallback(() => {
        activate(connector)
        localStorage.setItem('previouslyConnected', true)
    }, [activate])

    useEffect(() => {
        if(localStorage.getItem('previouslyConnected') === 'false')
        connect()         
    }, [connect])

    const disconnect = () => {
        deactivate()
        localStorage.removeItem('previouslyConnected')
    }

if (error) {
    return <>
    <h1>Connection rejected</h1>
    <a className='error-return' href="/"> Return </a> 
    <style jsx>
        {`
        h1{
            color:#fff
        }
        .error-return{
            color:#fff;
            text-decoration:none
        }
        `}</style>
        </>
}

    return (
        <>
        <div className="body-walletconnect">
            <section className="sc-common">
                <div className="container">
                    <div className="loginbox">
                        <img src="/mintpage/connectwallet.png" className="connectwallet" alt="Image" />
                        <div className="loginbuttons">  
                        {
                                active 
                                ? <>    
                                <button className="btn" onClick={() => router.push('/mint')}> MINT NOW </button>
                                <button className="btn" onClick={disconnect}>Disconnect Wallet</button>
                                </>
                                : <><button className="btn" onClick={connect}> WALLET CONNECT</button>
                                    <button className="btn"> CONNECT WITH EMAIL</button>
                                    </>
                                    
                            }                         
                        </div>
                        <img src="/mintpage/whiteb.png" className="img-fluid login-img whiteb"  alt="Image" />
                        <img src="/mintpage/turqub.png" className="img-fluid login-img turqub" alt="Image"/>
                        <img src="/mintpage/pinkb.png" className="img-fluid login-img pinkb" alt="Image"/>
                    </div>
                </div>
            </section>
        </div>
    <style jsx>
            {`
            .body-walletconnect{
            background-image: url(/mintpage/bannerXL.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
            box-shadow: -500px 55px -45px rgba(0,0,0,0.6) inset;
            -webkit-box-shadow: -500px 0px 55px -45px rgba(0,0,0,0.6) inset;
            -moz-box-shadow: -500px 0px 55px -45px rgba(0,0,0,0.6) inset;
        }
        .sc-common{
            position: relative;
            height: 100vh;
            text-align: center;
            display: flex;
            justify-content: flex-end;
            align-content: flex-end;
        }
        .container{
            margin-right: 10%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 550px;
            
        }
        .loginbox{
            position: relative;
            width: 100%;
        }
        button{
            background: #000;
            color: #fff;
            border-radius: 5rem;
            border: 0.25rem solid #fff;
            box-shadow: 0.125rem 0.25rem 0 rgb(0 0 0/25%);
            outline: none;
            transform: rotate(-4deg);
            font-size: 1.5rem;
            font-family: Chunky Rosie;
            cursor: pointer;
            width: 90%;
        }
        button:hover{
            background: #fa247e;
        }
        .btn{
            padding-top: 1.2rem;
            padding-bottom: 1.2rem;
        }
        .loginbuttons{
            z-index: 5;
            width: 100%;
            position: absolute;
            bottom: 22.5%;
        }
        .loginbuttons .btn:first-child{
            margin-bottom: 1rem;
            margin-left: 5%;
        }
        .loginbuttons .btn:last-child{
            margin-left: -8%;
        }
        .connectwallet{
            width: 80%;
            position: absolute;
            z-index: 4;
            top: -7rem;
            left: -5rem;
        }
        .login-img{
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .whiteb{
            position: relative;
            z-index: 3;
        }
        .turqub{
            z-index: 2;
            position: absolute;
        }
        .pinkb{
            z-index: 1;
            position: absolute;
        }
            `}
        </style>
        </>
    )
}