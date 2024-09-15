export const HeaderNav = () => {
    return(
        <div className="w-full h-[10dvh] ">
            <div className="w-full border border-black h-full flex justify-between items-center mx-auto">
                <h1 className="font-medium text-lg font-sans">Alro.dev</h1>
                <div className="flex flex-row gap-8">
                    {menu.map((item) => (
                        <div className="font-medium cursor-pointer">
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