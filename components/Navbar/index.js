import { useWeb3React } from '@web3-react/core'

import { useState , useEffect} from "react"
import web3 from "web3"

export default function SecondNavbar() {

    
    const { account,  library} = useWeb3React()
    const [balance, setBalance] = useState()


    const getBalance = async () => {  
        const balance = await library.eth.getBalance(account)
        var number = web3.utils.fromWei(balance, 'ether')
        setBalance(Number(number).toFixed(3))
    }

    useEffect(() => {
        getBalance()
      }, [getBalance])
  
      
    return (
    <>
    <div className="navbartop">
    <div className="contlogoimg">
        <img className="logoimg" src="logo-02.png" alt=""/>
    </div>
    <div className="flex">
        <div className="flextextcont">
            <div className="whitecontainer">
                <h5>BSC Testnet</h5>
            </div>
        </div>
        <div className="flextextcont">
            <div className="whitecontainer whitecontainerD" >
                <h5>{account.substring(0,6)}...{account.substring(account.length - 4)}</h5>
            </div>
        </div>
        <div className="flextextcont">
            <div className="whitecontainer">
                <h5>BNB: {balance}</h5>
            </div>
        </div>
    </div>  
  </div>

  <style jsx> {`
  .navbartop{
            display: flex;
            justify-content: space-between;
            position: relative;
            background-color: transparent;
            height: 88px;
        }
        .contlogoimg{
            position: relative;
            top: 15px;
            margin-left: 60px;
        }
        .logoimg{
            height: 130px;
        }
        .flex{
            display: flex;
            align-items: center;   
            gap: 50px;
            margin-right: 40px;
        }
        .flextextcont{
            margin-top: 10px;
            position: relative;
        }
        .whitecontainer{
            padding: 5px 20px;
            position: relative;
            z-index: 9;
            background-color: #fff;
            pointer-events: none;
        }
        .whitecontainerD{
            pointer-events:all!important; 
            cursor:pointer;
        }
        h5{
            position: relative;
            margin-top:5px;
            margin-bottom:5px;
            z-index: 99;
        }
        .flextextcont::before{
            content: '';
            background-color: aqua;
            position: absolute;
            top: -5px;
            left: -5px;
            z-index: 0;
            height: 100%;
            width: 100%;
            transform: rotate(4deg);
        }
        .flextextcont::after{
            content: '';
            background-color: rgb(255, 0, 234);
            position: absolute;
            top: 5px;
            left: 5px;
            z-index: 0;
            height: 100%; 
            width: 100%;  
            transform: rotate(4deg);
        }
      `}</style>
  </>)
}