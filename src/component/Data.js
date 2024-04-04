import { useEffect, useState } from "react";

export default function Data() {

    const [dataMember, setDataMember] = useState([]);

    const getData = async () => {
        const resp = await fetch("/member");
        const data = await resp.json();
        console.log(data);
        setDataMember(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            data
            {dataMember}
        </div>
    )
}
