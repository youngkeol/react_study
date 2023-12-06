import React from 'react';
import { useLocation } from 'react-router-dom'


const DepartmentGet = () => {
    const { pathname, search } = useLocation();
    console.log(pathname)
    console.log(search)

    //
    const query = new URLSearchParams(search)
    console.log(query.get('id'))


    //생성된 객체를 json 변환
    const params = Object.fromEntries(query);
    const { id, msg } = params;
    console.log(id)

    const departmentList = {
        item: [
            { id: 101, dname: '컴공', loc: '1호' },
            { id: 102, dname: '멀티', loc: '2호' }
        ]
    }
    let departmentItem = departmentList.item.find((v, i) => v.id === parseInt(id));

    if (!departmentItem) {
        return (<h3>존재하지 않는 데이터에 대한 요청입니다.</h3>)
    }
    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과 번호 {departmentItem.id}</li>
                <li>장소 : {departmentItem.loc}</li>
            </ul>
        </div>
    );
};

export default DepartmentGet; 