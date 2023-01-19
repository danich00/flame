import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli, hardhat } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { YourApp } from './button';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, goerli, hardhat],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function ConnectWallet () {
  return (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <YourApp />
        </RainbowKitProvider>
      </WagmiConfig>
  );
};