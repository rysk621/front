import logo from '../logo.svg'

export default function Home() {
    return (
        <div className="w-full h-full justify-center items-center flex flex-col">
            <div>
                <img width='100%' src={logo} alt='logo' />
            </div>
            <div className='text-3xl'>
                <span>K-digital 5기 김수정</span>
            </div>
        </div>
    )
}
