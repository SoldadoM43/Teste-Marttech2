import { useState } from 'react';
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FaUserAlt, FaTasks } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import "./styles.css";
import { Container } from './styles';

import { User } from "../../../types/user";

type Props = {
    user: User
}
export default function Cadastro({ user }: Props) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [usuario, setUsuario] = useState<string[]>([]);

    const Save = async (evt: any) => {
        evt.preventDefault();
        const schema = Yup.object().shape({
            usu_nome: Yup.string().required("Informe o Nome do(a) Usuário(a)"),
            usu_telefone: Yup.string().required(
                "Informe o Telefone do(a) Usuário(a)"
            ),
            usu_cpf: Yup.string().required("Informe o CPF do(a) Usuário(a)"),
            usu_email: Yup.string().required("Informe o E-maiil do(a) Usuário(a)"),
            usu_senha: Yup.string().required("Informe a Senha do(a) Usuário(a)")
        });
    }
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <header>
                    <h1 className="title">Cadastre-se</h1>
                    <p className="subtitle">Conheça o TSS</p>
                </header>
                <FaTasks className="icon" />
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        if (!!name) {
                            setUsuario([...usuario, name])
                            setName('');
                            setEmail('');
                            setPassword('');
                        }
                        return;
                    }}
                ></form>
                <div className="inputs">
                    <table>
                        <tr>
                            <td><FaUserAlt /></td>
                            <td>
                                <input
                                    type="text"
                                    className="campo"
                                    placeholder="Nome"
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><MdAlternateEmail /></td>
                            <td>
                                <input
                                    type="email"
                                    className="campo"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><RiLockPasswordFill /></td>
                            <td>
                                <input
                                    type="password"
                                    className="campo"
                                    placeholder="Senha"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="botao">
                    <Link to="/" className="link">
                        <button 
                            type="submit" 
                            id="enter" 
                            className="btn"
                            // onClick={event => {
                            // Save(event);
                            // }} ERROR!
                            onChange={Save}
                        > 
                            Cadastrar
                        </button>
                    </Link>
                </div>
            </Container>
        </>
    );
}