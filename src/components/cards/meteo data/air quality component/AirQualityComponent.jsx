import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../../../context/DataContext"
import { Row, Col } from "react-bootstrap"

export const AirQualityComponent = ({data}) => {

    return (
        <Row className="h-100 border border-1 border-dark rounded-4 p-4 mt-3">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-lungs fs-3"></i>
                <h4>Qualità dell'aria</h4>
            </div>

            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>Monossido di Carbonio</div>
                    <div>{data.co} μg/m3</div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>Ozono</div>
                    <div>{data.no2} μg/m3</div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>Diossido di Azoto</div>
                    <div>{data.o3} μg/m3</div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>Diossido di Zolfo</div>
                    <div>{data.so2} μg/m3</div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>PM2.5</div>
                    <div>{data.pm2_5} μg/m3</div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-1 border-dark">
                    <div>PM10</div>
                    <div>{data.pm10} μg/m3</div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3">
                    <div>Indice EPA (US)</div>
                    <div>{data['us-epa-index']}</div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="d-flex justify-content-between align-items-center py-3">
                    <div>Indice DEFRA (UK)</div>
                    <div>{data['gb-defra-index']}</div>
                </div>
            </Col>
        </Row>
    )
}