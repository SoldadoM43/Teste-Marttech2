import {GrEmoji} from "react-icons/gr";

import "./styles.css";
import { Main, Container } from "../../styles/global";

import Menu from '../../components/Menu/index';

export default function Home() {
    return (
        <>
            <Menu />
            <Container>
                <Main>
                    <h1 className="title">Bem-Vindo(a)</h1>
                    <div className="textos">
                        <p className="p">
                            Este é o TSS-Task System Storage, que em
                            uma tradução literal é Sistema de Armazenamento
                            de Tarefas.
                        </p>
                        <p className="p">
                            Na aba de Tarefas você pode adicionar suas tarefas
                            e ver suas listas.
                        </p>
                        <p className="p">
                            No Icone de Perfil você pode ver seu perfil.
                        </p>
                        <p className="p">
                            No icone de seta ao lado do perfil você é 
                            redirecionado para a tela de Login.
                        </p>
                        <p className="p">
                            Para voltar para a Home basta clicar no nome 
                            do site que fica no menu superior, do lado esquerdo.
                        </p>
                        <p className="p2">
                            Faça bom proveito ;) <br /> <GrEmoji className="icon"/>
                        </p>
                    </div>
                </Main>
            </Container>
        </>
    );
}