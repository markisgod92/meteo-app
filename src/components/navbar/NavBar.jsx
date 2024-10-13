import { Container, Dropdown } from "react-bootstrap"
import { SearchBar } from '../searchbar/SearchBar'
import { useTranslation } from "react-i18next"

export const NavBar = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <nav>
            <Container>
                <div className="d-flex justify-content-between align-items-center gap-5 p-3">
                    <div>Logo</div>

                    <SearchBar />

                    <Dropdown>
                        <Dropdown.Toggle>
                            {t('language')}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => changeLanguage('it')}>Italiano</Dropdown.Item>
                            <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Container>
        </nav>
    )
}