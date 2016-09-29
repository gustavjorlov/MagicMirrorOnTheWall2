import React from 'react';

const RegisterPresentation = ({onSubmit, onPersonClicked, clickedButton}) => {
    return (<div className="row">
        <div className="col-md-1">
            <div className="page-header">
                <h1>Träning</h1>
            </div>
        </div>
        <div className="col-md-1">
            <div className="form-group">
                <div className="btn-group btn-group-justified btn-group-lg" role="group">
                    <div className={"btn-group btn-group-lg"} role="group">
                        <button onClick={onPersonClicked.bind(null, 'sofia')} type="button" className={"btn btn-default " + (clickedButton === 'sofia' ? 'active' : '')}>Sofia</button>
                    </div>
                    <div className="btn-group btn-group-lg" role="group">
                        <button onClick={onPersonClicked.bind(null, 'gustav')} type="button" className={"btn btn-default " + (clickedButton === 'gustav' ? 'active' : '')}>Gustav</button>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="input-group input-group-lg">
                    <div className="input-group-addon">Tränat</div>
                    <input type="number" className="form-control" id="exampleInputAmount" placeholder="30" />
                    <div className="input-group-addon">min</div>
                </div>
            </div>
            <button onClick={onSubmit} type="button" className="btn btn-primary btn-lg btn-block">Registrera</button>
        </div>
    </div>);
}

export default RegisterPresentation;
