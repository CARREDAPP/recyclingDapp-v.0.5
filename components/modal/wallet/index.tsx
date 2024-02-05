import { showModal } from '@/components/redux/show-modal/slice.showmodal';
import { useAppSelector } from '@/components/redux/store';
import { walletAsync } from '@/components/redux/wallet/wallet.slice';
import useAppDispatch from '@/hook/use-dispatch';
import { IWallet } from '@/types';
import { useWalletList } from '@meshsdk/react';
import { Modal, Spin } from 'antd';
import Image from 'next/image';
import React from 'react'
import { MdInstallDesktop } from 'react-icons/md';

function ModalWallet() {
    const wallets = useWalletList();
    const { dispatch } = useAppDispatch();
    const { status } = useAppSelector(state => state.createWallet);
    return (
        <Modal
            centered
            className='bg-white dark:bg-gray-800'
            wrapClassName='backdrop-blur-sm '
            width={400}
            closeIcon
            open={true}
            onCancel={() => dispatch(showModal('close'))}
            footer={[]}
        >
            <Spin spinning={status.isLoading}>
                <div className="w-full">
                    <h1 className="text-2xl font-bold">
                        Connect your wallet
                    </h1>
                    <p className="text-gray-400 text-[18px]">
                        Please select a wallet to connect to the marketplace:
                    </p>
                    <section className="grid grid-cols-2 gap-3 w-full">
                        {[...wallets].slice(0, 6).map(({ icon, name, version }: IWallet, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => {

                                        dispatch(walletAsync({ icon, name, version }))
                                    }
                                    }
                                    className="w-40 h-40 shadow-md rounded dark:bg-gray-800 p-3 group scale-95 hover:scale-100 duration-500 cursor-pointer hover:bg-[#14b8a6]"
                                >
                                    <div className="flex flex-col justify-center items-center">
                                        <Image
                                            className="h-12 w-12"
                                            height={200}
                                            width={200}
                                            alt="wallets"
                                            src={icon}
                                        />
                                        <h1 className="text-xl capitalize text-black dark:text-white font-bold group-hover:text-white">
                                            {name}
                                        </h1>
                                        <div className="flex justify-center items-center space-x-1">
                                            <span className="text-[16px] font-medium text-gray-500">
                                                Install
                                            </span>
                                            <MdInstallDesktop className="text-gray-400" />
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </section>
                </div>
            </Spin>
        </Modal>
    )
}

export default ModalWallet
