import React from 'react';

export const AcessRouterModal = ({route, totalDistance}) => {
    console.log(totalDistance);
    console.log(route);
    const buildRoutes = () => {
        return route.map(r => {
            return <li>{r.name}</li>;
        });
    };
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>
                    Distância Total: {totalDistance.toFixed(2)}
                    <br></br>
                    <br></br>
                    Rota:
                    <br></br>
                    <br></br>
                    {buildRoutes()}
                </p>
            </div>
        </div>
    );
};
