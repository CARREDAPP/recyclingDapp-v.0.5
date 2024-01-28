import { Metadata } from "next";
import MainAppLayout from "./MainAppLayout";
import NotConnected from "../global/NotConnection";
import useAuth from "@/hook/use-auth";
import MainLogin from "./LayoutLogin";
import { usePathname } from "next/navigation";
'next/navigation'
export const metadata: Metadata = {
    title: 'RECYCLING dAPPS',
    description: "GRECOM a pour mission de travailler avec les exploitants apicoles et agricoles de la R.D Congo, afin d’améliorer leur système d’exploitation pour augmenter le rendement apicole et agricole à développer les capacités à collaborer pour combattre la pauvreté et préserver les écosystèmes",
    applicationName: 'RECYCLING dAPPS',
    keywords: ['RECYCLING-GANA', 'RECYCLING-DAPPS', 'RECYCLING DAPPS', 'RDC-RECYCLING', 'RECYCLING', 'CARDANO'],
}
export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname()

    const { user } = useAuth();

    return (
        <>
            <main className='bg-transparent'>
                {/* <MainAppLayout> */}
                {children}
                {/* </MainAppLayout> */}
            </main >
        </>
    )
}
