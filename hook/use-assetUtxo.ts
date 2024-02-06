import { BlockfrostProvider, resolveDataHash } from '@meshsdk/core';
import React from 'react';

interface IUtxoParams {
    scriptAddress: string;
    asset: string;
    datum: any;
}

async function useAssetUtxo({ scriptAddress, asset, datum }: IUtxoParams) {
    try {
        const blockfrostProvider = new BlockfrostProvider('preprodXoBIju9xy7u4xwmYdFMvCgN9QtfeurhD');
        const utxos = await blockfrostProvider.fetchAddressUTxOs(scriptAddress, asset);
        const dataHash = resolveDataHash(datum);
        const utxo = utxos.find((utxo: any) => utxo.output.dataHash === dataHash);
        console.log("OK OK OK", utxo);

        return { utxo };
    } catch (error) {
        console.error("Error fetching UTXOs:", error);
        return { utxo: null }; // Return null or handle error as per your application's logic
    }
}

export default useAssetUtxo;
