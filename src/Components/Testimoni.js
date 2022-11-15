import React from "react";
import icon from '../Assets/icons/double-quote.svg';

const cardStyle = {
    borderRadius:'3px',
    border:'0px',
    aspectRatio:'1/1',
    border:'solid 1px var(--color-2)',
    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'
}

export const Testimoni = (props) => {
    return(
        <div className="p-3">
            <div className="p-4" style={cardStyle}>
                <img className="mb-4" src={icon}/>
                <div className="d-flex flex-column justify-content-between" style={{minHeight:'calc(100% - 35px)'}}>
                    <p>{props.content}</p>
                    <section className="d-flex">
                        <img src={props.image} className="h-100 me-3"/>
                        <section className="d-flex flex-column justify-content-center">
                            <h6 className="m-0">{props.name}</h6>
                            <span style={{fontSize:'8px'}}>{props.title}</span>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}