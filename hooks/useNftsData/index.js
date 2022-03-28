import { useWeb3React } from "@web3-react/core"
import { useCallback, useEffect, useState } from "react"
import useContract from "../useContract"

const getNftData = async ({ contractData, tokenId }) => {
    const [
      tokenURI,
      dna,
      owner,
      accessoriesType,
      clotheColor,
      clotheType,
      eyeType,
      eyeBrowType,
      facialHairColor,
      facialHairType,
      hairColor,
      hatColor,
      graphicType,
      mouthType,
      skinColor,
      topType,
    ] = await Promise.all([
      contractData.methods.tokenURI(tokenId).call(),
      contractData.methods.tokenDNA(tokenId).call(),
      contractData.methods.ownerOf(tokenId).call(),
      contractData.methods.getAccessoriesType(tokenId).call(),
      contractData.methods.getAccessoriesType(tokenId).call(),
      contractData.methods.getClotheColor(tokenId).call(),
      contractData.methods.getClotheType(tokenId).call(),
      contractData.methods.getEyeType(tokenId).call(),
      contractData.methods.getEyeBrowType(tokenId).call(),
      contractData.methods.getFacialHairColor(tokenId).call(),
      contractData.methods.getFacialHairType(tokenId).call(),
      contractData.methods.getHairColor(tokenId).call(),
      contractData.methods.getHatColor(tokenId).call(),
      contractData.methods.getGraphicType(tokenId).call(),
      contractData.methods.getMouthType(tokenId).call(),
      contractData.methods.getSkinColor(tokenId).call(),
      contractData.methods.getTopType(tokenId).call(),
    ])
  
    const responseMetadata = await fetch(tokenURI)
    const metadata = await responseMetadata.json()
  
    return {
      tokenId,
      attributes: {
        accessoriesType,
        clotheColor,
        clotheType,
        eyeType,
        eyeBrowType,
        facialHairColor,
        facialHairType,
        hairColor,
        hatColor,
        graphicType,
        mouthType,
        skinColor,
        topType,
      },
      tokenURI,
      dna,
      owner,
      ...metadata,
    };
  };
  
  // Plural
  const useAllNftsData = ({ owner = null } = {}) => {
    const [nfts, setNfts] = useState([])
    const { library } = useWeb3React()
    const [loading, setLoading] = useState(true)
    const contractData = useContract()
  
    const update = useCallback(async () => {
      if (contractData) {
        setLoading(true)
  
        let tokenIds
  
        if (!library.utils.isAddress(owner)) {
          const totalSupply = await contractData.methods.totalSupply().call()
          tokenIds = new Array(Number(totalSupply))
            .fill()
            .map((_, index) => index)
        } else {
          const balanceOf = await contractData.methods.balanceOf(owner).call()
  
          const tokenIdsOfOwner = new Array(Number(balanceOf))
            .fill()
            .map((_, index) =>
            contractData.methods.tokenOfOwnerByIndex(owner, index).call()
            )
  
          tokenIds = await Promise.all(tokenIdsOfOwner)
        }
  
        const nftsPromise = tokenIds.map((tokenId) =>
          getNftData({ tokenId, contractData })
        )
  
        const nfts = await Promise.all(nftsPromise)
  
        setNfts(nfts)
        setLoading(false)
      }
    }, [contractData, owner, library?.utils])
  
    useEffect(() => {
      update()
    }, [update])
  
    return {
      loading,
      nfts,
      update,
    };
  };
  
  // Singular
  const useNftSingularData = (tokenId = null) => {
    const [nft, setNft] = useState({})
    const [loading, setLoading] = useState(true)
    const contractData = useContract()
  
    const update = useCallback(async () => {
      if (contractData && tokenId != null) {
        setLoading(true)
  
        const toSet = await getNftData({ tokenId, contractData })
        setNft(toSet)
  
        setLoading(false)
      }
    }, [contractData, tokenId])
  
    useEffect(() => {
      update()
    }, [update])
  
    return {
      loading,
      nft,
      update,
    };
  };
  
  export { useAllNftsData, useNftSingularData }