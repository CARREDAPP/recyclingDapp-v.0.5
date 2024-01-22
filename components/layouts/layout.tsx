import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'GRECOM-RDC',
    description: "GRECOM a pour mission de travailler avec les exploitants apicoles et agricoles de la R.D Congo, afin d’améliorer leur système d’exploitation pour augmenter le rendement apicole et agricole à développer les capacités à collaborer pour combattre la pauvreté et préserver les écosystèmes",
    applicationName: 'GRECOM-RDC',
    keywords: ['GRECOM-RDC', 'GRECOM-DRC', 'GRECOMRDC', 'RDC-GRECOM', 'GRECOM', 'NYUKI'],
}
export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className=' dark:bg-slate-900 bg-gray-50 flex flex-col min-h-screen w-full items-center py-16 justify-center '>
            <div className="w-48 h-40 bg-slate-200 rotate-180 duration-500 rounded-ee-full opacity-30 animate-spin">

            </div>

            <main className='w-full max-w-md mx-auto p-6 z-50'>
                <div className='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                    {children}
                </div>
            </main>
            <div className="w-48 h-40 bg-slate-400 rotate-180 duration-500 rounded-ss-full-full -translate-y-4 opacity-10 animate-spin">

            </div>
        </div>
    );
}
