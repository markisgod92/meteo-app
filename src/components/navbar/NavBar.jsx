import { Container, Dropdown } from "react-bootstrap"
import { SearchBar } from '../searchbar/SearchBar'
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { Logo } from "./Logo"

export const NavBar = () => {
    const { i18n } = useTranslation()
    const { data } = useContext(DataContext)

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const flags = {
        it: '🇮🇹',
        en: '🇬🇧'
    }

    return (
        <nav>
            <Container>
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 gap-md-5 p-3">
                    <div className="order-1 col-md-auto">
                        <Logo />
                    </div>

                    {data && (
                        <div className="order-3 order-md-2 col-12 col-md-auto flex-grow-1">
                            <SearchBar />
                        </div>
                    )}

                    <div className="order-2 order-md-3 col-md-auto">
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="secondary-outline"
                            >
                                {flags[i18n.language]}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => changeLanguage('it')}>{flags.it}</Dropdown.Item>
                                <Dropdown.Item onClick={() => changeLanguage('en')}>{flags.en}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>
            </Container>
        </nav>
    )
}