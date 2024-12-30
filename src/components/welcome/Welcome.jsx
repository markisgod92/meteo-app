import { useTranslation } from "react-i18next"
import { SearchBar } from "../searchbar/SearchBar"

export const Welcome = () => {
    const { t } = useTranslation()
    return (
        <div className="h-100 d-flex justify-content-center align-items-center">
            <div className="welcome-container bg-primary text-white rounded-md-3 p-5 w-100 h-100 d-flex flex-column justify-content-center gap-3 align-items-center">
                <p>{t('welcome')}</p>
                
                <SearchBar />
            </div>
        </div>
    )
}