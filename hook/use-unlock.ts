import { script, scriptAddr } from '@/types/contract';
import { Data, Transaction } from '@meshsdk/core';
import React from 'react';
import useAssetUtxo from './use-assetUtxo';

async function useUnlock({ wallet }: any) {
    if (wallet) {
        try {
            const addr = (await wallet.getUsedAddresses())[0];
            const datumConstr: Data = {
                alternative: 0,
                fields: [42],
            };
            const redeemer = {
                data: {
                    alternative: 0,
                    fields: [21],
                },
            };
            const assetUtxo = await useAssetUtxo({
                scriptAddress: scriptAddr,
                asset: 'lovelace',
                datum: datumConstr,
            });
            const tx = new Transaction({ initiator: wallet })
                .redeemValue({
                    value: assetUtxo,
                    script: script,
                    datum: datumConstr,
                    redeemer: redeemer,
                })
                .sendValue({ address: addr }, assetUtxo)
                .setRequiredSigners([addr]);

            const unsignedTx = await tx.build();
            const signedTx = await wallet.signTx(unsignedTx, true);
            const txHash = await wallet.submitTx(signedTx);
            if (txHash) {
                console.log("Transaction Hash:", txHash);
            } else {
                console.error("Failed to submit transaction.");
            }
        } catch (error) {
            console.error("Error in useUnlock:", error);
        }
    }
}

export default useUnlock;

