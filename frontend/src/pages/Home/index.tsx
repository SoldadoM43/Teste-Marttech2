import { Main, Container } from "../../styles/global";

import Menu from '../../components/Menu/index';

export default function Home() {
    return (
        <>
            <Menu />
            <Container>
                <Main>
                    <h1>Home</h1>
                </Main>
            </Container>
        </>
    );
}