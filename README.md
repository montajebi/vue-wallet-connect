# vue-wallet-connect

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Setup Wallet Connect

1. In your App.vue file set up the following configuration.

```vue
<script setup>
  import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'

  import { mainnet, arbitrum } from 'viem/chains'
  import { reconnect } from '@wagmi/core'

  // 1. Define constants
  const projectId = 'YOUR_PROJECT_ID'

  // 2. Create wagmiConfig
  const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

  const chains = [mainnet, arbitrum]
  const config = defaultWagmiConfig({
    chains, // required
    projectId, // required
    metadata, // required
    enableWalletConnect: true, // Optional - true by default
    enableInjected: true, // Optional - true by default
    enableEIP6963: true, // Optional - true by default
    enableCoinbase: true // Optional - true by default
  })

  reconnect(config)
  // 3. Create modal
  createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
  })
</script>

<template> // Rest of your app ... </template>
```

2. Trigger the modal

To open Web3Modal you can use our default web components or build your own logic with Web3Modal composables.

```vue
<template>
  <w3m-button />
</template>
```

3. Smart contract interaction

```vue
<script setup lang="ts">
  import { readContract } from '@wagmi/core'
  import { USDTAbi } from '../abi/USDTAbi'

  const USDTAddress = '0x...'

  const data = readContract({
    abi: USDTAbi,
    address: USDTAddress,
    functionName: 'symbol'
  })
</script>
```