import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import PruebaPagoArtifact from "../../config/web3/artifacts/PruebaPago";

const { address, abi } = PruebaPagoArtifact;

const usePruebaPago = () => {
  const { active, library, chainId } = useWeb3React();

  const pruebaPago = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId]);
  }, [active, chainId, library?.eth?.Contract]);

  return pruebaPago;
};

export default usePruebaPago;
