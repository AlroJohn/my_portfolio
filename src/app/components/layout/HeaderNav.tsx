export const HeaderNav = () => {
    return(
        <div className="w-full h-[10dvh] ">
            <div className="w-full border border-black h-full flex justify-between items-center mx-auto">
                <h1>Logo here</h1>
                <div className="flex flex-row gap-6">
                    {menu.map((item) => (
                        <div>
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