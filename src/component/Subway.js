import { useRecoilValue } from "recoil"
import { stLogin } from "./StAtom"
import SubwayInfo from "./SubwayInfo";
import Login from "./Login";

export default function Subway() {
    const isLogin = useRecoilValue(stLogin);

    return (
        <div className="w-full h-full justify-center items-center flex flex-col">
            {isLogin ? <SubwayInfo /> : <Login />}
        </div>
    )
}
