import React, { useState, useEffect } from "react";

export default function MaxLimit(props) {
    const [artist, setArtist] = useState('')

    function handleChange(e) {
        setArtist(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        artist ? props.onSubmit(artist) : props.onSubmit('10')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 align-items-center justify-content-center">
                    <div className="col-auto">
                        <label className="col-form-label" htmlFor="artist">Set a Limit Search!</label>
                    </div>
                    <div className="col-auto">
                        <input type="number" id="artist" value={artist} onChange={handleChange} className="form-control" placeholder='' />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-light">Search</button>
                    </div>
                </div>
            </form>
        </>
    )
}
