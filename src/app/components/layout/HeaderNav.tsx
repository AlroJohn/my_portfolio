export const HeaderNav = () => {
    return(
        <div className="w-full h-[10dvh] sticky top-0 z-50 bg-pri-0">
            <div className="w-full border border-black h-full flex justify-between items-center px-4 mx-auto">
                <h1 className="font-bold text-lg">Alro.dev</h1>
                <div className="md:flex hidden flex-row gap-8 ">
                    {menu.map((item, index) => (
                        <div key={index} className="font-semibold cursor-pointer">
                            {item.name}
                        </div>
                    ))}
                </div>
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