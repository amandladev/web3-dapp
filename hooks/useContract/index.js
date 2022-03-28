import {useMemo} from 'react';
import { useWeb3React } from '@web3-react/core';
import { erc721Abi, erc721ContractAddress } from '../erc721';

const useContract = () => {
    const {active, library } = useWeb3React();
    const contractData = useMemo(() => {
        if (active && library) {   {/* probar */}
            return new library.eth.Contract(erc721Abi, erc721ContractAddress);
        }
    }, [active, library?.eth?.Contract]);
    return contractData;
}

export default useContract;