import { useEffect, useState } from "react";
import sarea from '../db/sarea.json';

export default function SubwayInfo() {
    const apikey = process.env.REACT_APP_API_KEY;
    const [ops, setOps] = useState([]);
    const [tags, setTags] = useState([]);
    //setTags까지만
    const [areaData, setAreaData] = useState();

    const getData = async (cd) => {
        let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`;
        url = url + `serviceKey=${apikey}`;
        url = url + `&pageNo=1&numOfRows=5&resultType=json&controlnumber=2024010918`
        url = url + `&areaIndex=${cd}`;

        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data.getIndoorAirQualityByStation.body.items.item[0]);
        setAreaData(data.getIndoorAirQualityByStation.body.items.item[0]);
    }

    useEffect(() => {
        let tm = sarea.map((item, idx) =>
            <option key={`op${idx}`} value={item['코드']}>{item['측정소']}</option>
        );
        setOps(tm);
        // getData(); // cd값 없음
    }, []);

    const handleSelectArea = (e) => {
        console.log(e.target.value);
        getData(e.target.value);
    }

    useEffect(() => {
        if (areaData === undefined) return;
        const k = ['co2', 'co', 'no2', 'no', 'nox', 'o3', 'pm25', 'fad'];
        // const kName = ['이산화탄소','일산화탄소','이산화질소','일산화질소','질소산화물','오존','초미먼','폼알데하이드']
        let tm = k.map((item, idx) =>
            <div key={`tag${idx}`}>
                <div className="flex flex-col justify-center items-center font-semibold text-yellow-200 bg-gray-700 h-full m-2 rounded">{item}</div>
                <div className="flex justify-center items-center">{areaData[item]}</div>
            </div>
        )
        setTags(tm);
    }, [areaData])

    return (
        <div className="w-full h-full justify-top my-5 items-center flex flex-col">
            <div className="m-10 font-bold text-3xl">SUBWAY WAITING </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select onChange={handleSelectArea} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="selected">=====지역선택=====</option>
                    {ops}
                </select>
            </div>
            <div className="m-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 w-2/3 justify-center items-center">
                {tags}
            </div>
        </div>
    )
}
