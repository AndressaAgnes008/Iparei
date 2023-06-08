import React, { Component, useState } from 'react';
import api from '../../services/api';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import '../../assets_template/css/main.css';
import './css/home.css';
import './css/style.css';
import logo from '../../images/logo2.png'

export default function HomePage() {

	return (
		
		<>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* <link rel="stylesheet" href="styles/style.css">
    		<link rel="stylesheet" href="styles/home.css"></link> */}
				<title>IParei</title>
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

						<h1>
							IParei, Saiba onde estacionar
            </h1>
						<h2>
							Não conte com a sorte, conte com a gente!
            </h2>

						<div id="cards">
							<div class="card">
								<div>
									<h3>
										Baixe o nosso aplicativo
                            <br /><br />
									</h3>
									<button>
										Baixar app
                        </button>
									<i class="icon-qrcode"></i>
								</div>
							</div>
							<div class="card">
								<div>
									<h3>
										Faça agora seu cadastro
                            <br /> e ache a sua vaga!
                        </h3>
									<button >
									<Link style={{ textDecoration: 'none', color: '#fff' }} to="/cadastro">
										Cadastrar
                        </Link >
                        </button>
								</div>
							</div>
						</div>

					</div>
				</div>

				<footer>
					<div class="col">
						<h3>
							IParei | Saiba onde estacionar
            </h3>
						<h3>
							2023
            </h3>
					</div>
				</footer>

			</body>
		</>
	);
}