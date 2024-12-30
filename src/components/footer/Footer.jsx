import { Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"

export const Footer = () => {
    const {t} = useTranslation()

    return (
        <footer className="p-3 bg-secondary-subtle">
            <Container>
                <Row>
                    <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly align-items-center">
                        <div className="d-flex flex-wrap justify-content-center gap-1">
                            <span>© 2024.</span>
                            <span className="text-center">{t('utils.madeBy')} <a href="https://marcogusso-webdev.vercel.app" target="_black" rel="noreferrer noopener">Marco Gusso</a></span>
                        </div>

                        <div>
                            Powered by <a href="https://www.weatherapi.com/" target="_blank" rel="noreferrer noopener">WeatherAPI.com</a>
                        </div>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}