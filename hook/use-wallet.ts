import { BrowserWallet } from '@meshsdk/core';

async function useWallet(walletName: string) {
    const _wallet = await BrowserWallet.enable(walletName);
    const _address = await _wallet.getUsedAddresses();
    const _network = await _wallet.getNetworkId();
    const _balance = await _wallet.getBalance();
    const _asset = await _wallet.getAssets();
    return { _wallet, _address, _network, _balance, _asset }
}

export default useWallet