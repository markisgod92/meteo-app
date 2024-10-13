import { useTranslation } from "react-i18next"

export const CloudComponent = ({ data }) => {
    const {t} = useTranslation()

    return (
        <div className="card-component h-100 d-flex flex-column gap-5 rounded-4 p-4">
            <div className="d-flex gap-3 align-items-baseline">
                <i className="bi bi-clouds fs-3"></i>
                <h4>{t('singleValueCards.cloudCover')}</h4>
            </div>

            <div className="fs-3 ps-3">{data.cloud} %</div>
        </div>
    )
}