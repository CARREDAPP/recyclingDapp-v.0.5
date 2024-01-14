import { GrDashboard } from "react-icons/gr";
import { GrBlog } from "react-icons/gr";
import { GrArticle } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { BiExtension } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { BsChatQuote } from "react-icons/bs";
import { BsBasket3 } from "react-icons/bs";
import { HrefLink } from "@/types";
import { AiOutlineDashboard } from "react-icons/ai";


export const LINK_GRICOM: HrefLink[] = [
    {
        href: '/dashboard',
        label: "Dashboard",
        icon: <AiOutlineDashboard className='text-xl' />
    },
    {
        href: '/products',
        label: "Produicts",
        icon: <BsBasket3 className='text-xl' />
    },

]
