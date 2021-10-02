import React, { useState, useEffect } from "react";

function Home() {
    const [authors, setAuthors] = useState([]);
    const [authData, setAuthData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/v1/authors", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxMCIsImp0aSI6ImNiYjNlM2JlNjJhYzY5OThmM2EzMzcwMjExMjY5NTUzODZmNjM3ZDYyMGY4MWRmMTA1MjM5NjA1NjM3MGMyMmI0N2NjOWM2ZmNlMmYzZmQxIiwiaWF0IjoxNjMzMTk5MzgwLjY4NTEyNSwibmJmIjoxNjMzMTk5MzgwLjY4NTEzMSwiZXhwIjoxNjY0NzM1MzgwLjY2OTkxOCwic3ViIjoiMSIsInNjb3BlcyI6W119.PzAr9_ArZuKA1D3b5na79l1KLLK-dHuH1IE4iQV71zGeafh8VSsQOE04WLWSgIOLL0SMrPLBXLwWQhpwlQFUeeuhwk8Rgo8KfpzH0HuBWi5ikqjL1_0TpvyxTLMlWKt45SxsnxRo6vhnFYMNgPppx5twpMtYDgRWhnEEWqHXZPrenpmdBN32nRAPyZgICcW5pZC_BRJB3WAdTzX-bHjNORGLl3VUrUNRw2-UG8v8bGc_TouGQz7Jf6KmTp_s3ixoVt9j63kPLyPEta8XzJ7NS6lV7-vijWX7WlIqXgihRzBr6vV7kKmMBoKf_orDlvh9lE1v0jjiGOncIrMz27zPAHXAHsBzAUFRBcn3wPOkTavEUWM65TB-a6IiS_nYmoc1Eej6m6th-AcDwkZ9wOe5NIh-acv9rNwwY0ZADLPpVlFq1cQgNsnsfXQ_5bGoLwQP4z-49hkhgvJgx4H-XGMVeGf91lZnKZ-KZdy9yD_69oBuzHYTK2QwSxu2BjZ5GmN45r9O4awj2ag4izDPlcHpuyOYE5Cuk5383Q3ys84SIXA4XrpLdyFj2NVfnJ4smkaRTibZAc_99jYUVKuHf-TmkUAz5ybjaWRS7OXiWwrNZFL5hvMdryZuTqYO7QyapNbwnULmkqXI8bXA5P2Jp3GUFOg1isXLItPN8bagDvRnFKk"
            }
        })
        .then(resp => resp.json())
        .then(data => setAuthors(data.data))
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        let arr = [];
        authors.forEach(auth => arr.push(auth.attributes));
        setAuthData(arr);
    }, [authors]);

    function showme(e) {
        e.preventDefault();
        console.log(authors);
        console.log(authData);
    };

    return(
        <div className="homeContainer">
            <h1>Hello</h1>
            <button onClick={showme}>Show Me</button>
            {authData.map(auth => {
                return(
                    <div>
                        <p>{auth.name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Home;