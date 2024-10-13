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
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 gap-md-5 p-3">
                    <div className="order-1 col-md-auto">Logo</div>

                    <SearchBar />

                    <div className="order-2 order-md-3 col-md-auto">
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="secondary-outline"
                            >
                                {i18n.language}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => changeLanguage('it')}>Italiano</Dropdown.Item>
                                <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>
            </Container>
        </nav>
    )
}