import React, { useEffect, useState } from "react";

import axios from "axios";

function Listadats(props) {
    const [studentsdatas, setStudentsDatas] = useState([]);
    useEffect(() => {
        getapidatas();
    }, []);

    const getapidatas = () => {
        axios
            .get("https://reqres.in/api/unknown")
            .then((res) => {
                console.log("student", res.data.data);
                setStudentsDatas(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1>elcome</h1>
            <table class="table">
                <thead class="thead-dark w-100">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Year</th>
                        <th scope="col">Pantone_value</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsdatas.map((items, index) => {
                        return (
                            <div key={index} className="w-100">
                                <tr>
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.year}</td>
                                    <td>{items.pantone_value}</td>
                                </tr>
                            </div>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Listadats;
