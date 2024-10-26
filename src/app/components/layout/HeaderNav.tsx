import { Icon } from "@iconify/react/dist/iconify.js"

interface HeaderNavProps {
    openAddEvent: () => void;
}
export const HeaderNav: React.FC<HeaderNavProps> = ({ openAddEvent }) => {
    return(
        <div className="w-full h-[10dvh] sticky top-0 z-50 bg-pri-0">
            <div className="w-full h-full flex justify-between items-center px-4 mx-auto">
                <h1 className="font-bold text-lg">Alro.dev</h1>
                <div className="md:flex hidden flex-row gap-8 ">
                    {menu.map((item, index) => (
                        <div key={index} className="font-semibold cursor-pointer">
                            {item.name}
                        </div>
                    ))}
                </div>
                <Icon onClick={openAddEvent} className="cursor-pointer md:hidden flex" icon="solar:hamburger-menu-linear" width="30" height="30" />
            </div>
        </div>
    )
}

const menu = [
    {name : "Home", link : "/"},
    {name : "About", link : "/about"},
    {name : "Projects", link : "/projects"},
    {name : "Contact", link : "/contact"},
]