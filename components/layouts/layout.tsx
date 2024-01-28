import { Metadata } from "next";
import MainAppLayout from "./MainAppLayout";
import NotConnected from "../global/NotConnection";
export const metadata: Metadata = {
    title: 'GRECOM-RDC',
    description: "GRECOM a pour mission de travailler avec les exploitants apicoles et agricoles de la R.D Congo, afin d’améliorer leur système d’exploitation pour augmenter le rendement apicole et agricole à développer les capacités à collaborer pour combattre la pauvreté et préserver les écosystèmes",
    applicationName: 'GRECOM-RDC',
    keywords: ['GRECOM-RDC', 'GRECOM-DRC', 'GRECOMRDC', 'RDC-GRECOM', 'GRECOM', 'NYUKI'],
}
export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    let isTrue = true;
    return (
        <>
            <main className='bg-transparent'>
                <MainAppLayout>
                    {isTrue ? children : <NotConnected />}
                </MainAppLayout>

            </main>
        </>
    )
}
