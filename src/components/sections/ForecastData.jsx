import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ForecastHourComponent } from "../cards/forecast hour/ForecastHourComponent";
import { DataContext } from "../../context/DataContext";

export const ForecastData = ({ metricUnits }) => {
    const { data } = useContext(DataContext)
    const [interval, setInterval] = useState(getInterval());

    function getInterval() {
        const width = window.innerWidth;
        if (width < 576) {
            return 6; // Mobile: intervallo di 6h
        } else if (width < 992) {
            return 4; // Medium: intervallo di 4h
        } else {
            return 3; // Large: intervallo di 3h
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setInterval(getInterval());
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Row className="pt-3 g-3">
            <div className="card-component rounded-4 p-4">
                <Row>
                    {data.today.map((item, index) => {
                        if (index % interval === 0) {
                            return (
                                <Col key={index}>
                                    <ForecastHourComponent metricUnits={metricUnits} data={item} />
                                </Col>
                            );
                        }
                        return null;
                    })}
                </Row>
            </div>
        </Row>
    );
};