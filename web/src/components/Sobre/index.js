import React, { useState } from 'react';
import api from '../../services/api';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import '../../assets_template/css/main.css';
import '../HomePage/css/sobre.css';
import '../HomePage/css/style.css';
import logo from '../../images/logo2.png'

export default function Sobre() {
	return (
		<>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* <link rel="stylesheet" href="styles/style.css">
    		<link rel="stylesheet" href="styles/home.css"></link> */}
				<title>Sobre | IParei</title>
			</head>


			<body>
				<div id="menu">
					<div class="col">
						<div>
							<img src={logo} alt="IParei | saiba onde estacionar" />
						</div>
						<ul>
							<li><a href={'/'} >Home</a></li>
							<li><Link to="./Sobre">Sobre</Link ></li>
							<li><Link to="./Login">Login</Link ></li>
						</ul>
					</div>
				</div>

				<div class="col">
					<div id="sobre">
						<p>O IParei sinaliza para o motorista através do aplicativo, diferentes vagas disponíveis.
            </p>

						<p>O aplicativo de vagas pode ser utilizado em qualquer rede de estabelecimentos com sensores que identificam as vagas de quaisquer lugares com grande número de vagas como universidades, hospitais, mercados entre outros.
            </p>

						<p>Na entrada do estabelecimento junto ao aplicativo o usuário visualiza o mapa do local que se encontra junto com as opções de vagas disponíveis, ao seu cadastro ele te direciona para uma vaga seja ela comum ou preferencial, ao estacionar o sensor identifica a presença de veículo tornando aquela vaga não mais disponível para outras pessoas.
            </p>

						<p>Com o sensor ele identifica o tempo que o usuário permaneceu na vaga sendo assim já calculando o valor a ser pago e com a possibilidade de pagar pelo próprio aplicativo sem a necessidade de procurar totens ou área de validação para estacionamento.
            </p>

						<p>Pagando via aplicativo como comprovante gera um QR Code como autenticação para liberar a saída do veículo.
            </p>

						<div class="assinatura">
							<h1>
								IParei
                </h1>
							<h2>
								Saiba onde estacionar
                </h2>
						</div>

						<div id="cadastrar">
							<h2>
								Deseja se cadastrar agora?
                </h2>

							<button>
								<Link style={{ textDecoration: 'none', color: '#fff' }} to="/cadastro">
									Cadastrar
                        </Link >
							</button>
						</div>
					</div>
				</div>

				<footer>
					<div class="col">
						<h3>
							IParei | Saiba onde estacionar
            </h3>
						<h3>
							2020
            </h3>
					</div>
				</footer>

			</body>
		</>
	);
}