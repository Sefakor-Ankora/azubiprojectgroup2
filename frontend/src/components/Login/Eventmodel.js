import React from 'react';
import './Eventmodel.css';

const model = props => (
    <div className='model'>
        <header className="model_header"><h1>{props.title}</h1></header>
        <section className="model_action">
            {props.children}
            <section>
                
            {props.canCancel && <button>Cancel</button>}
            {props.canSubmit && <button>Submit</button>}
            </section>

        </section>
    </div>
)

export default model;