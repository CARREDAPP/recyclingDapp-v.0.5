import { STATUS } from "@/components/helpers/helpers";
import { IInfoWallet, IItemsCard, IWallet } from "@/types"
import { contract, toLovelace } from "@/types/types"
import { BrowserWallet, Data, Transaction, resolvePaymentKeyHash, resolvePlutusScriptAddress } from "@meshsdk/core"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
let wallet: BrowserWallet;
const initialState: {
    infoWallet: IInfoWallet | undefined,
    session: any,
    statusLock: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
    },
    status: {
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
    },
    msg: string | null
} = {
    infoWallet: undefined,
    msg: null,
    session: typeof window !== 'undefined'
        ? JSON.parse(window?.localStorage?.getItem('session-wallet')!)
        : null,
    status: {
        isError: false,
        isLoading: false,
        isSuccess: false,
    },
    statusLock: {
        isError: false,
        isLoading: false,
        isSuccess: false,
    },
}
interface IHash {
    hash: string;
}
const handleLock = createAsyncThunk<IHash | any, IItemsCard[]>("lock", async (payload: IItemsCard[], _) => {
    try {
        if (wallet) {
            const addresses = await wallet.getUsedAddresses();
            const pkh1 = resolvePaymentKeyHash(addresses[0]);
            const tx = new Transaction({ initiator: wallet });
            payload.forEach((items) => {
                const pkh2 = resolvePaymentKeyHash(items?.Entreprise?.digitalAdress!);
                const datumList: Data = { alternative: 0, fields: [pkh1, pkh2, 12345678, "recycling", 200] };
                tx.sendAssets(
                    {
                        address: contract.address,
                        datum: {
                            value: datumList,
                            inline: true,
                            data: payload
                        },
                    }, [{ unit: 'lovelace', quantity: toLovelace((items?.price! * items.qte!).toString()) }],
                );
                return tx;
            })
            const unsignedTx = await tx.build();
            const signedTx = await wallet.signTx(unsignedTx);
            const txHash = await wallet.submitTx(signedTx);
            return txHash;
        }
    } catch (error: any) {
        return error.info as string;
    }


})
const walletAsync = createAsyncThunk<IInfoWallet | any, any>("wallet", async (_: any, a) => {
    try {
        wallet = await BrowserWallet.enable(_.name);
        const address = await wallet.getUsedAddresses();
        const network = await wallet.getNetworkId();
        const balance = await wallet.getBalance();
        const asset = await wallet.getAssets();
        const walletConnected: IWallet = _;
        const data: IInfoWallet = { address, asset, balance, network, wallet, walletConnected };
        return data;
    } catch (error: any) {
        console.log("=========>", error);
    }
})

const ConnectedWalletSlice = createSlice({
    initialState: initialState,
    name: 'info',
    reducers: {
        connectedWallet: ((state, { payload }) => {
            state.status = STATUS.SUCCESS;
            state.infoWallet = payload;
        }),
        deconnedWallet: ((state, { payload }) => {
            window?.localStorage.removeItem(payload);
            state.status = STATUS.SUCCESS;
        }),
        setWalletIsSuccess: (state, { payload }) => {
            state.statusLock.isSuccess = payload;
        },
        setWalletIsError: (state, { payload }) => {
            state.statusLock = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(walletAsync.pending, (state) => {
            state.status = STATUS.PENDING;
        }).addCase(walletAsync.fulfilled, (state, { payload }) => {
            state.status = STATUS.SUCCESS;
            state.infoWallet = payload;
            const { walletConnected, ...res } = payload
            window?.localStorage?.setItem('session-wallet', window.JSON?.stringify(walletConnected));
        }).addCase(walletAsync.rejected, (state, { payload }) => {
            state.status = STATUS.ERROR;
            state.msg = payload as string;
        }).addCase(handleLock.pending, (state) => {
            state.statusLock = STATUS.PENDING;
        }).addCase(handleLock.fulfilled, (state, { payload }) => {
            state.statusLock = STATUS.SUCCESS;
            state.msg = payload;
        }).addCase(handleLock.rejected, (state, { payload }) => {
            state.statusLock = STATUS.ERROR;
            state.msg = payload as string;
        })
    },
});
export default ConnectedWalletSlice.reducer;
export const { connectedWallet, deconnedWallet, setWalletIsError, setWalletIsSuccess } = ConnectedWalletSlice.actions;
export { walletAsync, handleLock }