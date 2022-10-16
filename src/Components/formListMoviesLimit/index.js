import React, { useState, useEffect } from "react";

export default function MaxLimit(props) {
    const [maxLimit, setMaxLimit] = useState('')

    function handleChange(e) {
        setMaxLimit(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        maxLimit ? props.onSubmit(maxLimit) : props.onSubmit('10')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 align-items-center justify-content-center">
                    <div className="col-auto">
                        <label className="col-form-label" htmlFor="artist">Set a Limit Search!</label>
                    </div>
                    <div className="col-auto">
                        <input type="number" id="artist" value={maxLimit} onChange={handleChange} className="form-control" placeholder='' />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-light">Filter</button>
                    </div>
                </div>
            </form>
        </>
    )
}
