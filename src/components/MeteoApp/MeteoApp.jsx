import { useContext, useEffect, useState } from "react"
import { Location } from "../location/Location"
import { MeteoData } from "./MeteoData"
import { DataContext } from "../../context/DataContext"
import styles from '../../utilities/styles.json'
import { NavBar } from "../navbar/NavBar"
import { Footer } from "../footer/Footer"
import { Spinner } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Welcome } from "../welcome/Welcome"

export const MeteoApp = () => {
    const { data, isLoading, isFailed } = useContext(DataContext)
    const { t } = useTranslation()

    const makeStyle = (timeOfDay, code) => {
        for (let condition of Object.keys(styles[timeOfDay])) {
            if (styles[timeOfDay][condition].includes(code)) {
                return `${timeOfDay}-${condition}`
            }
        }

        return 'n-a'
    }

    return (
        <>
            <NavBar />

            <div className={data && makeStyle(data.isDay ? 'day' : 'night', data.current.condition.code)}>
                {!isLoading && !isFailed && !data && (
                    <Welcome />
                )}

                {isLoading && !isFailed && (
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <Spinner animation="grow" role="status" variant="primary" />
                    </div>
                )}

                {!isLoading && isFailed && (
                    <div className="h-100 d-flex flex-column justify-content-center align-items-center gap-3">
                        <i className="bi bi-exclamation-circle-fill fs-1"></i>
                        <p>{t('utils.error')}</p>
                    </div>
                )}

                {!isLoading && !isFailed && data && (
                    <>
                        <Location />
                        <MeteoData />
                    </>
                )}
            </div>

            <Footer />
        </>
    )
}