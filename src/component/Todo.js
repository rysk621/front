// import heart from '../img/heart.png'

export default function Todo() {
    function printText(){
        const inText = document.getElementById('input').value;
        document.getElementById("result").innerHTML = inText;
    }

    return (
        <div className="w-full h-screen">
            <header id="header" className="rounded-tl-xl rounded-tr-xl m-5 mb-0 p-5 bg-purple-300 flex flex-col items-center justify-center">
                <div className='flex items-center justify-center w-full px-10'>
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-violet-500 from-sky-400 text-4xl leading-none tracking-tight font-extrabold md:text-5xl lg:text-6xl dark:text-white">to do list</h2>
                    {/* <img src={heart} className='w-6 h-6' /> */}
                </div>
                <div className="p-2 w-full flex justify-evenly items-center">
                    <input type="text" onChange={printText} id="input" className="bg-fuchsia-50 border border-gray-900 text-gray-900 placeholder-gray-700 text-sm rounded-lg block w-full p-2.5" placeholder="insert entity" />
                </div>
            </header>
            <main id="body" className="rounded-bl-xl m-5 mt-0 p-5 bg-fuchsia-200 flex flex-col items-center justify-center">
                <div id="entities">
                    <div id="result"></div>
                </div>
            </main>
        </div>
    )
}
