import { useEffect, useState, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useContract from '../../hooks/useContract';

import { useRouter } from 'next/router'

export default function NftImage() {

    const router = useRouter()
    const contractData = useContract()
    const {active, account, library} = useWeb3React()
    const [imageSrc, setImageSrc] = useState("")
    const [isMinting, setIsMinting] = useState(false)
    const [txH, setTxH] = useState("")
    const value = library.utils.toWei('0.1', 'ether')
   
    const getNftsData = useCallback(async () => {
      if (contractData) {
        const totalSupply = await contractData.methods.totalSupply().call();
        const dnaPreview = await contractData.methods
          .deterministicPseudoRandomDNA(totalSupply, account)
          .call();
        const image = await contractData.methods.imageByDNA(dnaPreview).call();
        setImageSrc(image);
      }
    }, [contractData, account]);

    useEffect(() => {
      getNftsData();
    }, [getNftsData]);

    const mint = () => {
      
  
      contractData.methods
        .mint()
        .send({
          from: account,
          value: value,
        })
        .on("transactionHash", (txHash) => {
          setTxH(txHash)
          console.log(txHash)
        })
        .on("receipt", () => {
          setIsMinting(true);
          console.log("transaccion confirmada")
        })
        .on("error", (error) => {
          setIsMinting(false);
          console.log(error.message)
        });

        
    };

    return (
      <>
   <div>

  <img src={isMinting ? imageSrc : "imgnft/karafuru-egg.gif"}></img>
     {isMinting ?
     <a target="_blank" href={`https://testnet.bscscan.com/tx/${txH}`} rel="noopener noreferrer">
       <button className="btn"> See Transaction </button>
       </a>
      : <button className="btn" onClick={mint}> MINT</button>}
       <button className="btn" onClick={() => router.push('/gallery')}> Go to Gallery </button>
       </div>
      <style jsx> {`
      div{
        display:flex;
        flex-direction: column;
        gap:15px
      }
      img{
        height:220px;
        width:220px;
        
      }
            .btn{
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
           .btn:hover{
             transform: scale(1.1);
           }
        
        `}</style>
      </>
    )
}