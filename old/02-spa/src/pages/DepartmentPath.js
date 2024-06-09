import React from 'react';
import { useParams } from 'react-router-dom';
const DepartmentPath = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            {params.id}
            {params.msg}
        </div>
    );
};

export default DepartmentPath;