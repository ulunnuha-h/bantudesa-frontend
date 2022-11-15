import React from "react";

const cardStyle = {
    borderRadius:'3px',
    border:'0px',
    border:'solid 1px var(--color-2)',
}

export const StudentControl = () => {
    return(
        <div className="d-flex flex-column box-shadow p-3" style={cardStyle}>
            <h6 className="mb-3 text-center"><b>Unggah Proposal</b></h6>
            <div 
                className="d-flex justify-content-center align-items-center" 
                style={{...cardStyle,aspectRatio:'3/2'}}>
                Upload PDF
            </div>
            <button className="primary-btn mt-2 py-2">Unggah</button>
            <button className="delete-btn mt-2 py-2" disabled>Hapus</button>
        </div>
    )
}