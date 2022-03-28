import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Nft mint project</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/logo-02.png" /> 
    </Head>
      <section>
        <div className="home">
            <div className="social">
                <a href="https://twitter.com/karafuruNFT">
                
                    <img src="/twitter.png" alt="twitter" className="socialicon twitter"/>
                </a>
                <a href="https://www.instagram.com/karafuruNFT/">
                    <img src="/instragram.png" alt="instagram" className="socialicon iinstagram"/>
                </a>
                <a href="https://discord.com/invite/karafuru">
                    <img src="/discord.png" alt="discord" className="socialicon ddiscord"/>
                </a>
            </div>
            <div className="outer-content"> 
                <div className="inner-content"> 
                    <img src="/banner.jpg" alt="Image" className="img-fluid"/>
                </div>
            </div>
        </div>
      </section>


      {/* SECOND PART  */}

      <section>
            <div className="headline">
                <img src="/logo.png" alt="Image" className="d-none" />

                <a href="">
                    <img src="/ship.png" alt="Image" className="btn-ship"/>
                </a>
                
                <Link href="/walletconnector" replace>
                  <img src="/mintnow.png" alt="Image" className="btn-mint"/>
                </Link>
                
              
                <div className="marquee-up">
                    <div className="animatetext marquee">
                        <p className="p-animatedtext">5,555 generative NFTs • 12 bases • One Million Colors •</p>
                    </div>
                    <div className="animatetext marquee">
                        <p className="p-animatedtext">5,555 generative NFTs • 12 bases • One Million Colors •</p>
                    </div>
                </div>
           
                <div className="headline-text">
                    <div className="container">
                        <div className="row">
                            <div className="column">
                                <p className="p-container">Leave the drab reality and enter the world of Karafuru. 
                                    It’s a magical space where colors reign supreme and everyone just wants to have fun.
                                    Give it a spin and see which one of our personas you get.
                                </p>
                            </div>
                            <div  className="column">
                                <p className="p-container">These personas are your ticket into the playground with the coolest crew in town. 
                                    More NFTs to drop. More mediums to come. 
                                    It is a brave new digital world. Come over and play.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-roadmap">
                    <img className="img-fluid" src="/roadmap.png" alt="Image" />
                </div>
                <div className="video-trailer">
                    <video src="/trailer.mp4" controls controlsList="nodownload noplaybackrate"></video>
                </div>
                <img src="/checkout.png" alt="checkout" className="checkout-img"/>

                <div className="marquee-down">
                    <div className="animatetext marquee2">
                        <p className="p-animatedtext">* Mosu * Kiba * Otan * Egao * Kuyaku * Futo * Uzachi * Ikai * Goji * Ku'roi * Shi'rai * Torao</p>
                    </div>
                    <div className="animatetext marquee2 ">
                        <p className="p-animatedtext">* Mosu * Kiba * Otan * Egao * Kuyaku * Futo * Uzachi * Ikai * Goji * Ku'roi * Shi'rai * Torao</p>
                    </div>
                </div>
            </div>
               
        </section>

        {/* FOOTER */}


        <section>
            <div className="footer">
                <div className="imageratio">
                    <div className="outer-content">
                        <div className="contentinner">
                            <img src="/banner2.jpg" alt="Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="home-footer">
                    <a href="https://twitter.com/karafuruNFT">
                        <img src="/twitter.png" alt="twitter" className="img-fluid footericon tttwitter" />
                    </a>
                    <a href="https://www.instagram.com/karafuruNFT/">
                        <img src="/instragram.png" alt="instagram" className="img-fluid footericon iiinstagram" />
                    </a>
                    <a href="https://discord.com/invite/karafuru">
                        <img src="/discord.png" alt="discord" className="img-fluid footericon dddiscord" />
                    </a>
                    
                </div>
                <div className="bg-colorful">
                    <div className="bg-footer1">
                        
                        <img src="/footerxl.png"  className="img-fluid black-img-footer"  alt="Image" />
                    </div>
                    <div className="bg-footer2">
                        
                        <img src="/footerxl.png"  className="img-fluid pink-img-footer"  alt="Image" />
                    </div>
                  
                </div>
            </div>
        </section>
            <style jsx>
                {`
                .home{
                    position: relative;
                    display: block;
                }
                img{
                    vertical-align: middle;
                }
                a{
                    text-decoration: none;
                    background-color: transparent;
                    margin-right: 5px;

                }
                .socialicon{
                    width: 3.5rem;
                    height: 3.5rem;
                }

                .iinstagram{
                    transform: rotate(353deg);
                    width: 3.3rem;
                    height: 3.3rem;
                }
                .ddiscord{
                    transform: rotate(353deg);
                }

              
                .social{
                    z-index: 1;
                    display: flex;
                    justify-content: space-between;
                    position: absolute;
                    right: 0;
                    top: 1rem;
                    width: 11rem;
                    padding-right: 17%;
                    
                }
            


            {/* SECOND PART */}
           
                .headline{
                    position: relative;
                    color: #fff;
                    display: block;
                    background: black;
                    z-index: 5;
                    
                }
                  .d-none{
                      position: absolute;
                      z-index: 3;
                      top: -11rem;
                      width: 22.375rem;
                      left: 3rem;
                  }
                  .marquee-up{
                      width: 105%;
                      margin-left: -2%;
                      position: absolute;
                      margin-top: -1.2rem;
                      transform: rotate(2deg);
                      display: flex;
                      flex-direction: row;
                      overflow-x: hidden;
                  }
                  .animatetext{
                      background-color: #000;
                      margin-left: -0.25rem;
                      padding-left: 1rem;
                      min-height: 100%;
                  }

                  .marquee{
                      border-top: 5px solid #ff1a88;
                      border-bottom: 5px solid #ffea41;
                      animation:  slide-left 35s linear 0s infinite;
                      animation-direction: normal;
                      animation-play-state: running;
                      flex: 0 0 auto;
                      min-width: 100%;
                      z-index: 2;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                  }
                  @keyframes  slide-left {
                      0% {
                        transform: translateX(0);
                                transform: translateX(0);
                      }
                      100% {
                        transform: translateX(-1000px);
                                transform: translateX(-1000px);
                      }
                    }
                    @keyframes slidemediaquery414px{
                      0% {
                        transform: translateX(0);
                                transform: translateX(0);
                      }
                      100% {
                        transform: translateX(-700px);
                                transform: translateX(-700px);
                      }
                    }

                  .p-animatedtext{
                      font-size: 3.6rem;
                      font-weight: 400;
                      margin-top: 0.6rem;
                      margin-bottom: 0.5rem;
                      font-family: Chunky Rosie;
                  }
                  .headline-text{
                      width: 100%;
                      display: flex;
                      align-items: center;
                      background-image: url(/section2.png);
                      background-repeat: no-repeat;
                      background-size: cover;
                      height: 70.849375rem;
                  }

                  .btn-ship{
                      position: absolute;
                      right: 20rem;
                      top: -2.4rem;
                      z-index: 3;
                      width: 80px;
                      height: 80px;
                      transform: rotate(-10deg);
                      transition: .4s;
                  }
                  .btn-mint{
                      position: absolute;
                      z-index: 3;
                      right: 7rem;
                      top: -6.5rem;
                      transform: rotate(20deg);
                      width: 200px;
                      height: 200px;
                      transition: .4s;
                  }
                  .btn-ship:hover{
                      transform: scale(1.1) rotate(-10deg);
                    
                  }
                  .btn-mint:hover{
                      transform: scale(1.1) rotate(20deg);
                    
                  }

                  .image-roadmap{
                      position: absolute;
                      top: 15%;
                      width: 19.75rem;
                      right: 6rem;
                      z-index:3;
                      transition: .4s;
                  }
                  .image-roadmap:hover{
                      transform: scale(1.1);
                  }

                  .container{
                      margin-top: calc(-50% + 12rem);
                      padding-left: 5.25rem;
                      padding-right: 1.25rem;
                  }
                  .row{
                      padding-left: 6rem;
                      padding-right: 6rem;
                      display: flex;
                      flex-wrap: wrap;
                      margin-right: -0.625rem;
                      margin-left: -0.625rem;
                      gap: 10px;
                  }
                  .p-container{
                      font-family: Nunito Sans SemiBold;
                      width: 300px;
                  }
                  .video-trailer{
                      position: absolute;
                      bottom: 5.5rem;
                      height: 35rem;
                      left: 50%;
                      transform: translateX(-50%);
                      padding: 2rem;
                      display: flex;
                      align-items: center;
                  }
                  video{
                      border-radius: 10px;
                      width: 100%;
                      height: 100%;
                      box-shadow: 5px 5px rgb(0 0 0/40%);
                      outline: none;
                  }

                  .checkout-img{
                      position: absolute;
                      width: 14.285rem;
                      top: 50%;
                      z-index: 4;
                      left: 13%;
                  }
                  .marquee-down{
                      width: 105%;
                      margin-left: -2%;
                      position: absolute;
                      margin-top: -1.2rem;
                      transform: rotate(357deg);
                      display: flex;
                      flex-direction: row;
                      overflow-x: hidden;
                      bottom: -1rem;
                  }
                  .marquee2{
                      border-top: 5px solid #21ffff;
                      border-bottom: 5px solid #dbff08;
                      animation:  slide-left 35s linear 0s infinite;
                      animation-direction: normal;
                      animation-play-state: running;
                      flex: 0 0 auto;
                      min-width: 100%;
                      z-index: 2;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                  }
                                  {/* THIRD PART */}
                                  .footer{
                      font-family: Chunky Rose;
                      position: relative;
                      margin-top: 0;
                      
                    
                  }
                  .imageratio{
                      position: relative;
                      z-index: 0;
                  }

                  .contentinner img{
                      overflow: hidden;
                  }
                  .footericon{
                    
                      position: absolute;
                      
                      z-index: 7;
                  }
                  .dddiscord{
                      right: 4rem; 
                      transform: rotate(-7.75deg);
                      bottom: 5.5rem;
                      height: 5rem;
                      width: 5rem;
                      transition:  0.5s;
                  }
                  .tttwitter{  
                      right: 10rem; 
                      bottom: 7rem;
                      height: 4.5rem;
                      width: 4.5rem;
                      transition:  0.5s;
                  }
                  .iiinstagram{
                      right: 7rem; 
                      bottom: 10.5rem;
                      height: 4.5rem;
                      width: 4.5rem;
                      transition:  0.5s;
                  }
                  .dddiscord:hover{
                      transform: scale(1.2);
                  }
                  .tttwitter:hover{
                      transform: scale(1.2);
                  }
                  .iiinstagram:hover{
                      transform: scale(1.2);
                  }
                  .home-footer{
                      
                      z-index: 8;
                  }
                  .bg-colorful{
                      position: relative;
                  }
                  .bg-footer1{
                      position: absolute;
                      bottom: -35px;
                      z-index: 4;
                  }

                  .bg-footer2{
                      position: absolute;
                      bottom: 0;
                      z-index: 3;
                  }
                  .black-img-footer{
                      filter: brightness(0);
                      
                      z-index: 10;
                  }
                  .pink-img-footer{
                      z-index: 8;
                    }

                `}
          </style>
    </>
  )
}
