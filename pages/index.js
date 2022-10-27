
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

export default function Home() {
  const {address} = useAccount();

  return <>
          <ConnectButton
          label='Connect web3'
          accountStatus={"full"}
          />

          {address && <p>My address is {address}</p>}
  </>
}
