export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <> 
        <div className="flex h-screen overflow-hidden ">
            <aside className='w-56  lg:flex flex-col'>
            <div className="flex h-14 items-center px-2 border-b">
                Sidebar
            </div>
            <div className="flex-1">
            </div>
            <div className="flex border-t h-50 px-20">
                Account
            </div>
            </aside>
            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="border-b p-4 h-14">StraightAPI</header>
                <main className="flex-1 overflow-y-auto p-4 lg:p-6"> {children}</main>
            </div>
        </div>
        </>
    );

}
