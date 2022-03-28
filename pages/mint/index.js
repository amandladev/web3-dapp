import { useWeb3React } from "@web3-react/core";
import { useRouter} from "next/router";
import Link from "next/link";
import SecondNavbar from "../../components/Navbar";
import NftImage from '../../components/NftImages';

export default function Mint() {
    const { active } = useWeb3React();
    const router = useRouter;

    return ( 
        <>
        {active ? 
        <>
        <Link href="/">
        <button className="btn-return"> <img src="chevron-down.png" /> </button>
        </Link>
            <div className='background-img-full'>
                <SecondNavbar></SecondNavbar>
                <section className='section-mint'>
                    <div>
                        <img  className="img4class" src="img4.png"/>
                    </div>
                    <div className='section-mint-nft'>
                            <NftImage/>
                    </div>
                
                </section>
            </div>
            <div className='background-second-section'>
              <div className='flex-second-section'>
                  <div className='text-container'><h2>Join the Karafuru Carnival ✨</h2>
                  <p>As a Karafuru holder, you get to enjoy benefits like Carnival Tickets or more! Find out more about our carnival & benefits!</p>
                  <a target="_blank" href="https://opensea.io/collection/karafuru" rel="noopener noreferrer">
                    <button className="btn" >view in Opensea</button>
                  </a>
                  </div>
                  <div><img className='img2class' src='img2.png'></img></div>
              </div>

        </div>
        <style jsx>{`
        .btn-return{
            position: absolute;
            top: 0; 
            margin: 10px;
            background-color: transparent;
            border: none;
            cursor:pointer;
            z-index: 1;
        }
        .btn-return img{
            width: 30px;
            transform: rotate(90deg)
        }
        .btn-return:hover img{
            transform: scale(1.2) rotate(90deg);

        }
            .section-mint{
                display:flex;
                justify-content: space-around;
                align-items: center;
            }
            
            section{
                position:relative;
            }
            .background-img-full{
                background-image: url(/img.png);
                background-repeat: no-repeat;
                background-size: cover;
                height:800px;
               
            }
            .background-second-section{
                background-image: url(/img3.png);
                background-repeat: no-repeat;
                background-size: cover;
                
                position:absolute;
                width:100%;
                transform: translateY(-190px)
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
          .section-mint-nft{
            transform: translateY(120px);
        }
        
        .img4class{
            height:500px;
            position:absolute;
            transform: translateX(-80px);
            
        }
        .flex-second-section{
            display:flex;
            justify-content: space-between;
            align-items: center;
        }
        .text-container{
            display:flex;
            flex-direction: column;
            justify-content:center;
            padding-left: 9rem;
            padding-right:6rem;
        }

        .text-container h2{
            text-transform: uppercase;
            font-size:2.5rem;
            font-family: Chunky Rosie;
        }
        .text-container p{
            padding-bottom: 1rem;
            padding-top:1rem;
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
        .img2class{
            height:700px; 
        }
            `}</style>
        </>
        : <>
            <h2> You're disconnected</h2>
            <button type="button" onClick={() => router.back()}>Click here to go back
            </button> 
            <style jsx>
                {`
                    h2{
                        color:#fff;
                    }
                `}
            </style>
        </>}
    </>
    )
}