import React from 'react';

import GradeItem from '../components/GradeItem';
import GradeData from './../GreadeData';

const GradeTable = () => {
    GradeData.map((v, i) => {
        console.log(v)
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>이름</td>
                        <td>학년</td>
                        <td>성별</td>
                        <td>성적</td>
                    </tr>
                </thead>
                <tbody>
                    {GradeData.map((v, i) => {

                        return (<GradeItem
                            key={i}
                            name={v.이름}
                            level={v.학년}
                            gender={v.성별}
                            kor={v.국어}
                            math={v.수학}
                            eng={v.영어}
                        />
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default GradeTable;