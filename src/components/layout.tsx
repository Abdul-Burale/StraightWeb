export default function Layout() {
    return (
        <> 
        <header className="min-h-15">
            <h2 className="text-2xl font-semibold">Header</h2> 
        </header>
        <div className="flex h-screen overflow-hidden"> 
            <aside className='w-[60] bg-black-100 lg:fle flex-col'>
            <div className="flex h-14 items-center border-b px-4">
                Sidebar
            </div>
            
            </aside>
            <main className="flex-1 bg-gray-100 p-4">
                Main
            </main>
        </div>

        <footer className="bg-gray-800 text-white p-4">Footer</footer>
        </>
    );

}