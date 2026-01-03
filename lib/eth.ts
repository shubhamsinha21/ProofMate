import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./ethConfig";

export async function storeOnChain(teamId: string, agreementHash: string) {
  if (!(window as any).ethereum) {
    throw new Error("MetaMask not found");
  }

  const provider = new ethers.BrowserProvider((window as any).ethereum);

  const signer = await provider.getSigner();

  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  const tx = await contract.storeTeamProof(teamId, agreementHash);
  await tx.wait();

  return tx.hash;
}
