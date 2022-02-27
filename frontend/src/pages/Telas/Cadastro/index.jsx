import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaUserAlt, FaTasks } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import "./styles.css";
import { Container } from './styles';


export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                        <button type="submit" id="enter" className="btn">
                            Cadastrar
                        </button>
                    </Link>
                </div>
            </Container>
        </>
    );
}