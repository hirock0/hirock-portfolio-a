"use client"

const Menu_btn = ({ menuHandler, children }: { children: React.ReactNode, menuHandler: () => void }) => {
    return (
        <div>
            <button onClick={menuHandler} >
                {children}
            </button>
        </div>
    )
}

export default Menu_btn
