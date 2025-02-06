export default function Layout() {
    return (
        <> 
        <div className="flex h-screen overflow-hidden border-t"> 
            <aside className='w-56  lg:flex flex-col border-r'>
            <div className="flex h-14 items-center px-20">
                Sidebar
            </div>
            <div className="flex-1">
            </div>
            <div className="flex border-t h-50 px-20">
                Account
            </div>
            </aside>
            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="border-b h-14">StraightAPI</header>
            </div>
        </div>
        </>
    );

}