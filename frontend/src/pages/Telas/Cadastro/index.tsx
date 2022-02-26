import { useState } from 'react';
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FaUserAlt, FaTasks } from "react-icons/fa";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import "./styles.css";
import { Container } from './styles';

type PropsUser = {
    state: {
        name: '';
        email: '';
        password: '';
    }
}

export function TypeUser({ state }: PropsUser) {
    let data = state;
    console.log(data);
}
export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    <p className="title">Cadastre-se</p>
                    <p className="subtitle">Conheça o TSS</p>
                </header>
                <FaTasks className="icon" />
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
                                    onChange={(evt) => setName(evt.target.value)}
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
                                    onChange={(evt) => setEmail(evt.target.value)}
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
                                    onChange={(evt) => setPassword(evt.target.value)}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="botao">
                    {/* <Link to="/" className="link"> */}
                        <button onChange={Save} className="btn">
                            Cadastrar
                        </button>
                    {/* </Link> */}
                </div>
                console.log({name})
            </Container>
        </>
    );
}
export function Data(nome: typeof name,){
    return nome;
}