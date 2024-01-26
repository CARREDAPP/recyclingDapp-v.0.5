import Link from "next/link";
function ActiveLink({ children, href, pathname }: any) {
    return (
        <div className={`${pathname === href ? 'bg-[#e0f7fa] bg-opacity-100' : ''}  hover:bg-[#e0f7fa]  hover:bg-opacity-100 rounded-md  text-[14.3px] p-2 my-2 hover:text-gray-400 text-gray-500 scale-95 hover:scale-100 duration-500 w-full `}>
            <Link
                href={href}
                className='flex gap-2 items-center hover:text-gray-400 duration-150'
            >
                {children}
            </Link>
        </div>
    );
}
export default ActiveLink;