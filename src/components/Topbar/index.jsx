import React from 'react'

import Logo from '../../assets/images/logo.png';
import Toggle from '../../components/ToggleTheme/index.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Avatar, Container, Menu, Navegation, Title} from "./styles";

import { ReactComponent as CatIcon } from '../../assets/icons/cat.svg';

export default function Topbar({ theme, toggleTheme }) {
    return (
        <Navegation>
            <Container>
                <Title>
                    <img src={Logo} alt="Logotipo Valid" />
                    Flix
                </Title>
                <Menu>
                    <AnchorLink href="#top5">
                        Top 3
                    </AnchorLink>
                    <AnchorLink href="#populares">
                        Populares
                    </AnchorLink>
                    <AnchorLink href="#recemadicionados">
                        Lançamentos
                    </AnchorLink>
                </Menu>
            </Container>
            <Container>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                <Avatar>
                    <CatIcon />
                </Avatar>
            </Container>
        </Navegation>
    )
}
