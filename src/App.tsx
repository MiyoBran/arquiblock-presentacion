import { useState } from 'react'
import './App.css'

const sections = [
	{
		title: 'Portada e Introducción',
		content: (
			<>
				<h2>Portada e Introducción</h2>
				<p>Presentación de ArquiBlock y objetivo del trabajo.</p>
			</>
		),
	},
	{
		title: 'Diagnóstico Organizacional',
		content: (
			<>
				<h2>Diagnóstico Organizacional</h2>
				<ul>
					<li>Metodología de relevamiento (entrevista, observación)</li>
					<li>
						Problemáticas detectadas (descoordinación, falta de control de costos,
						etc.)
					</li>
					<li>Análisis Sistémico (Entrada-Proceso-Salida, entorno)</li>
					<li>Análisis FODA</li>
				</ul>
			</>
		),
	},
	{
		title: 'Fundamentación de la Solución Propuesta',
		content: (
			<>
				<h2>Fundamentación de la Solución Propuesta</h2>
				<ul>
					<li>Árboles de decisión y justificación de la solución elegida</li>
				</ul>
			</>
		),
	},
	{
		title: 'Propuesta del Sistema de Información SIGOP',
		content: (
			<>
				<h2>Propuesta del Sistema de Información SIGOP</h2>
				<ul>
					<li>Nombre y objetivo del sistema</li>
					<li>Actores y componentes</li>
					<li>Decisiones técnicas</li>
					<li>Diagramas representativos</li>
					<li>Casos de uso</li>
					<li>Diagramas de secuencia</li>
					<li>Boceto de interfaz de usuario</li>
					<li>Historias de usuario</li>
				</ul>
			</>
		),
	},
	{
		title: 'Conclusión',
		content: (
			<>
				<h2>Conclusión</h2>
				<p>
					Resumen del impacto esperado del sistema en ArquiBlock. Reflexiones
					finales del equipo.
				</p>
			</>
		),
	},
]

function App() {
	const [current, setCurrent] = useState(0)

	return (
		<div className="presentation-container">
			<nav className="presentation-nav">
				{sections.map((section, idx) => (
					<button
						key={section.title}
						className={current === idx ? 'active' : ''}
						onClick={() => setCurrent(idx)}
					>
						{section.title}
					</button>
				))}
			</nav>
			<main className="presentation-content">
				{sections[current].content}
			</main>
		</div>
	)
}

export default App
