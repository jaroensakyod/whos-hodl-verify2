import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import Header from './header';
import Body from './body';
import Footer from './footer';
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useIsMounted } from '../hooks/uselsMounted';

export default function Homepage() {
          const mounted = useIsMounted();
          const { address } = useAccount();

          return <div className={styles.container}>
                    <Header />

                    <main className={styles.main}>
                              <Body />

                              <div>
                                        <ConnectButton
                                                  label='Connect web3'
                                                  accountStatus={"full"}
                                        />

                                        {mounted ? address && <p>My address is {address}</p>: null}
                              </div>
                    </main>

                    <Footer />

          </div>
}



