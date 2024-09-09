
import { Core } from '@walletconnect/core'
import { Web3Wallet } from '@walletconnect/web3wallet'

const core = new Core({
  projectId: '9fd0244dfe57c0208d0f6a60e0b73542'
})

const metadata = {
  name: 'ENS',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const web3wallet = await Web3Wallet.init({
  core, // <- pass the shared 'core' instance
  metadata
})