import { useWeb3React } from "@web3-react/core"
import { useState } from "react"
import { useAllNftsData } from "../../hooks/useNftsData"
import { useRouter } from 'next/router'
import SecondNavbar from "../../components/Navbar"

export default function Gallery() {
    
    const router = useRouter()
    const [validAddress, setValidAddress] = useState(true);
    const [submitted, setSubmitted] = useState(true);
    const [address, setAddress] = useState(
        new URLSearchParams(router.query).get("address")
      )
    const { nfts } = useAllNftsData({
        owner: submitted && validAddress ? address : null,
      });
    const { active, library } = useWeb3React()

    
  
    const handleAddressChange = ({ target: { value } }) => {
        setAddress(value);
        setSubmitted(false);
        setValidAddress(false);
      }
    const submit = (event) => {
        event.preventDefault();
        if (address) {
          const isValid = library.utils.isAddress(address);
          setValidAddress(isValid);
          setSubmitted(true);
          if (isValid) router.push(`/gallery?address=${address}`);
        } else {
        router.push("/gallery");
      
        }
    }
     let list = document.querySelectorAll('.mc-content .attributes'); 
    function activeNft(){
        list.forEach((item) =>
            item.classList.remove('attributes-container'));
            this.classList.add('attributes-container'); 
    }
    function desactivateNft(){
        list.forEach((item) =>
            item.classList.remove('attributes-container'));
    }
    list.forEach((item) => item.addEventListener('mouseover', activeNft));
    list.forEach((item) => item.addEventListener ('mouseout', desactivateNft));
   

   
    if (!active) return (<>
    {
      <>
    <button onClick={ () => ( router.push("/walletconnector"))}> Wallet disconnected, please reconnect
    </button>
    </>}
    </>)
    
    return ( 
        <>
        <div className="_nextFullContainer">
        <div className="_firstSection">
            <SecondNavbar></SecondNavbar>
            <img className="_firstImg" src="/pattern-white.png" alt="pattern"/>
        </div>
        <button className="btn-return" onClick={() => router.push('/mint')}> <img src="chevron-down.png" /> </button>
        <div className="titleAndForm">
            <h1> Gallery </h1>
            <form onSubmit={submit}> 
                <input placeholder="Search by wallet" value={address ?? ""} onChange={handleAddressChange}></input>
                <button type="submit">Search</button>
            </form>
        </div>

        <div className="container-nft-flex">
            {nfts.map(({name, image, tokenId, owner, attributes}) => ( 
                <>
                <div className="container" >
                    <article className="material-card" >
                        <div className="material-h2">
                            <p> Owner by: {owner.substring(0,6)}...{owner.substring(owner.length - 4)}</p>
                        <a className='a-details-nft' onClick={ () => (router.push(`/detail?tokenId=${tokenId}`))}> {name}</a>      
                        </div>
                        <div className="mc-content" >
                            <div className="img-container">
                                <img className="img-responsive" src={image} alt={name}/>
                            </div>
                            <div className="attributes">
                                <table>
                                    <thead>
                                        <tr>
                                        <th> Attribute </th>
                                        <th> Value </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                {Object.entries(attributes).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>
                                        {value}
                                        </td>
                                    </tr>
                                    ))}
                                    </tbody>
                                </table>   
                            </div>
                        </div>
                    </article>
                </div>
            </>
                
               
            ))}
        </div>
        </div>
        <style jsx>{`

            ._nextFullContainer{
                background-color:white;
            
            }    
            ._firstSection{
                background: url('/pattern-dark.jpg') repeat;
                width:100%;
                height:400px;
                position:absolute;
            }       
            ._firstImg{
                position:absolute;
                bottom:0;
                height:200px;
                z-index:0;
            }           
            .attributes{
                transition: all 0.3s ease-in-out;
                position: absolute;
                z-index: 10;
                opacity: 0;
                width: 250px;
                height: 400px;
                left: -16px;
                padding-top: 1.5rem;
                padding-bottom: 1.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 20px;  
            }
              
            .attributes-container{
                opacity:1;  
                background: #ffffffba;
            }
            table{
                cursor: default;
            }
            /*nft Card */
            .a-details-nft{
                cursor:pointer;
                color: rgb(255, 0, 234);
                
                font-size: 1rem;
            }
            .a-details-nft:hover{
                color: aqua;
            }

            .img-minted{
                width:100px;
                height:100px;
            }
            .container{
                position: relative;
                padding-right: 15px;
                padding-left: 15px;
                width: 270px;
                margin-top: 20px;
                margin-bottom:30px;
                border: none;
                box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
                border-radius: 20px;
                z-index: 1;
            }
            .material-card{
                position: relative;
                height: 0;
                padding-bottom: calc(100% - 16px);
                margin-bottom: 6.6em;
            }
            .material-card .material-h2{
                position: absolute;
                top: calc(100% - 16px);
                left: 0;
                width: 100%;
                padding: 10px 16px;
                color: #fff;
                font-size: 1.4em;
                line-height: 1.6em;
                margin: 0;
                z-index: 10;
                background-color: #272623;
            }
            .material-h2::before{
                content: '';
                position: absolute;
                left: 0;
                top: -16px;
                width: 0;
                border: 8px solid;
                border-top-color: transparent;
                border-right-color: #7d7b74;
                border-bottom-color: #7d7b74;
                border-left-color: transparent;
            }

            .material-card .mc-content{
                position: absolute;
                right: 0;
                top: 0;
                bottom: 16px;
                left: 16px;
            }
            .material-card .img-container{
                overflow: hidden;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 3;
            }
            .img-responsive{
                display: block;
                max-width: 100%;
                height: auto;
            }
        .btn-return{
            position: absolute;
            top: 0; 
            margin: 10px;
            background-color: transparent;
            border: none;
            cursor:pointer;
        }
        .btn-return img{
            width: 30px;
            transform: rotate(90deg)
        }
        .btn-return:hover img{
            transform: scale(1.2) rotate(90deg);

        }
        .titleAndForm{
            margin-top: 50px;
            margin-left: 10px;
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction: column;
        }
        form input{ 
            width: 300px;
            margin-right: 5px;
        }
        .navbartop{
            display: flex;
            justify-content: space-between;
            position: relative;
            background-color: #000;
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
            padding: 8px 10px;
            position: relative;
            z-index: 9;
            background-color: #fff;
            pointer-events: none;
        }
        h5{
            position: relative;
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
        h1{
            color:#fff
        }
        .container-nft-flex{
            display: flex; 
            justify-content: center;
            flex-direction: row;
            margin-top: 50px;  
            flex-wrap: wrap;  
            gap:30px;
            position: relative;
            
        }
        `}
        </style>
        </>
    )
}