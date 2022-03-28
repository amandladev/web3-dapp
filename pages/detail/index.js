import { useRouter } from 'next/router'
import { useWeb3React } from "@web3-react/core"
import { useState } from "react"
import { useNftSingularData } from '../../hooks/useNftsData'
import useContract from '../../hooks/useContract'



const Detail = () => {
    const { active, account, library } = useWeb3React()
    const router = useRouter()
    const tokenId = new URLSearchParams(router.query).get("tokenId")
    const { loading , nft, update } = useNftSingularData(tokenId)
    const contractData = useContract()
    const [transfering, setTransfering] = useState(false)

    const transfer = () => {
      setTransfering(true);
      const address = prompt("Ingresa la dirección: ");
      const isAddress = library.utils.isAddress(address);
      if (!isAddress) {
          alert("Direccion Invalida")
        setTransfering(false);
      } else {
          contractData.methods
          .safeTransferFrom(nft.owner, address, nft.tokenId)
          .send({
            from: account,
          })
          .on("error", () => {
            setTransfering(false);
          })
          .on("transactionHash", (txHash) => {
              alert(`Hash de la transaccion ${txHash}`)
          })
          .on("receipt", () => {
            setTransfering(false);
            alert(`El nft ahora pertenece a ${address}`)
            update()
          })
      }
    }
  
      if (!active) return (<>
        {
          <>
        <button onClick={ () => ( router.push("/walletconnector"))}> Wallet disconnected, please reconnect
        </button>
        </>}
        </>)
    return(
        <>
        {console.log(router.query)}
        <div className='mainContainer'>
          <div className='flex-01-cont'>
              <img src={nft.image}/>
              <div className='infoContainer'>
              <h2><span>Name: </span>  {nft.name}</h2>
                <p><span> Owner: </span> {nft.owner.substring(0,6)}...{nft.owner.substring(nft.owner.length - 4)}</p>  
              </div> 
              <button className={account !== nft.owner ? "disableButton" : "transferButton"}>
                    Transfer
                </button> 
          </div>
          <div className='flex-02-cont'>
            <table>
              <thead>
                <tr>
                  <th> Attribute </th>
                  <th> Value </th>
                </tr>
              </thead>
              <tbody>
              {Object.entries(nft.attributes).map(([key, value]) => (
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
        <style jsx>
            {`
            .mainContainer{
              width:100%;
             
              display:flex;
              align-items:center;
              justify-content:center;
              flex-direction: row;
              gap:40px;
            }
            .infoContainer{
              background-color: #edf0ef;
              box-shadow: 0.25rem 0.25rem rgb(0 0 0 / 50%);
              border-radius:20px;
              padding: 1rem 2rem;
              text-align:center;
            }
            .flex-01-cont{
              display:flex;
              flex-direction:column;
              gap:20px;
            }
            .flex-02-cont{
              transform:translateY(50px)
            }
            th{
              background-color: #272623;
              color: #fff;
            }
            td {
              background-color: #d5e6e0;
              padding:1rem;
              
            }
            .disableButton{
                background:#272623;
                pointer-events: none;
            }
            .transferButton{
              font-weight: 700;
                text-transform: uppercase;
                border-radius: 50rem;
                transition: all .2s cubic-bezier(.55,.085,.68,.53);
                border: 5px solid #fff;
                box-shadow: 0.25rem 0.25rem rgb(0 0 0 / 50%);
                color: #fff;
                background-color: #ff1a88;
                padding: 0.9375rem 2rem;
                cursor:pointer;
            }
            .transferButton:hover{
              transform:scale(1.1);
            }
            span{
              font-size:13px;
              font-weight:300;
              color:#959696;
            }
          
            `}
        </style>
        </>
    )
}
export default Detail