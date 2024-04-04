import Home from "./Home";

export default function LogoutForm({ user, onLogout }) {
    // const lame = 0;

    return (
        <div>
            <section className="h-full">
                { user !== null ? <Home/> :
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Welcome
                            </h1>
                            <form className="flex flex-col items-center space-y-4 md:space-y-6" action="#">
                                <div>
                                    {user} 님, 반갑습니다.
                                </div>
                                <button type="button" onClick={onLogout} className="w-full bg-sky-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign out</button>
                            </form>
                        </div>
                    </div>
                </div>}
            </section>
        </div>
    )
}
