import { useState } from 'react';
import { Link } from "react-router-dom";

import { FaUserAlt, FaTasks } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import "./styles.css";
import { Container } from './styles';
import { useAuth } from '../../../providers/auth';

export default function Cadastro() {
    const {setUser} = useAuth();
    const [input, setInput] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSave = () => {
        localStorage.setItem('user', JSON.stringify(input));
        setUser(input);
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
                                    onChange={(e)=>setInput({name: e.target.value})}
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
                                    onChange={(e)=>setInput({email: e.target.value})}
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
                                    onChange={(e)=>setInput({password: e.target.value})}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="botao">
                    <Link to="/" className="link">
                        <button 
                            id="enter" 
                            type="submit" 
                            className="btn"
                        >
                            Cadastrar
                        </button>
                    </Link>
                </div>
            </Container>
        </>
    );
}