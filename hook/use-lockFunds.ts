import { scriptAddr } from '@/types/contract';
import { Data, Transaction } from '@meshsdk/core';
import React from 'react'

async function useLockFunds({ wallet }: any) {
    console.log(wallet)
    if (wallet) {
        const addr = (await wallet.getUsedAddresses())[0];
        const d: Data = {
            alternative: 0,
            fields: [42],
        };
        const tx = new Transaction({ initiator: wallet })
            .sendAssets(
                {
                    address: scriptAddr,
                    datum: {
                        value: d,
                    },
                },
                [
                    {
                        unit: "lovelace",
                        quantity: "3000000",
                    },
                ],
            );
        const unsignedTx = await tx.build();
        const signedTx = await wallet.signTx(unsignedTx);
        const txHash = await wallet.submitTx(signedTx);
        console.log(txHash)
    }
}

export default useLockFunds;
