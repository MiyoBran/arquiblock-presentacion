import { useState } from 'react'
import './App.css'

import DCUAvanceObra from './assets/diagramas/DCU-Avance_Obra.png'
import DCUControlRentabilidad from './assets/diagramas/DCU-Control_Rentabilidad.png'
import DCUPlanificacionProduccion from './assets/diagramas/DCU-Planificacion_Produccion.png'
import DSAvanceObra from './assets/diagramas/DS-Avance_Obra.png'
import DSControlRentabilidad from './assets/diagramas/DS-Control_Rentabilidad.png'
import DSPlanificacionProduccion from './assets/diagramas/DS-Planificacion_Produccion.png'
import InterfazAvanceObra from './assets/interfaces/Interfaz-Avance-de-Obra.png'
import InterfazPanelControl from './assets/interfaces/Interfaz-Panel-de-Control.png'
import InterfazPresupuestosCostos from './assets/interfaces/Interfaz-Presupustos-y-Costos.png'
import InterfazProduccionObra from './assets/interfaces/Interfaz-Produccion-Obra.png'
import InterfazLogistica from './assets/interfaces/Interfaz-Logistica.png'

const PDF_URL = '/src/content/Informe-Final-ArquiBlock.pdf'

const sections = [
	{
		title: 'Portada e Introducción',
		content: (
			<>
				<h2>Portada e Introducción</h2>
				<p>
					<strong>Trabajo Integrador: ArquiBlock</strong>
					<br />
					Sistemas y Organizaciones
				</p>
				<p>
					<strong>Integrantes:</strong>
					<br />
					Miyen Brandolino
					<br />
					Luka Posternak
					<br />
					Agustín Sepulveda
					<br />
					Tomás Martínez Bengolea
				</p>
				<p>
					<strong>Profesores:</strong> Rodrigo René Cura – Leonardo Morales
					<br />
					<strong>Fecha de entrega:</strong> 19 de junio de 2025
				</p>
				<h3>Introducción</h3>
				<p>
					ArquiBlock es una empresa en crecimiento dedicada a la fabricación de
					bloques de hormigón celular y a la construcción de módulos habitacionales
					bajo la modalidad "llave en mano". Su propuesta de valor se centra en
					ofrecer una alternativa de construcción rápida, eficiente y de alta
					calidad, posicionándose como una solución superior a las casas
					prefabricadas livianas tradicionales gracias a la solidez y excelentes
					propiedades de aislación de su sistema constructivo.
				</p>
				<h3>Objetivo</h3>
				<p>
					El objetivo principal fue aplicar los conocimientos teóricos de la
					materia en un caso real, realizando un análisis exhaustivo de una
					organización para identificar sus problemáticas operativas y
					estratégicas, y proponer el diseño de un Sistema de Información (SI) que
					brinde una solución integral a dichos problemas.
				</p>
				<h3>Metodología de Trabajo</h3>
				<ul className="no-bullet">
					<li>
						<strong>Entrevista Semiestructurada:</strong> Se realizó una entrevista
						en profundidad con el responsable de la empresa para comprender la
						visión del negocio, los procesos, los desafíos y los objetivos
						estratégicos.
					</li>
					<li>
						<strong>Observación Directa:</strong> Se utilizó un modelo de lenguaje
						(LLM) como apoyo en el proceso de observación directa. Mediante sus
						preguntas y orientaciones, se fue guiando la identificación de los
						aspectos clave del flujo de trabajo, desde el contacto comercial hasta
						la entrega de la obra.
					</li>
				</ul>
				<div
					style={{
						textAlign: 'center',
						margin: '2rem 0',
					}}
				>
					<a
						href={PDF_URL}
						download
						className="pdf-download-btn"
					>
						Descargar Informe Final (PDF)
					</a>
				</div>
			</>
		),
	},
	{
		title: 'Diagnóstico Organizacional',
		content: (
			<>
				<h2>Diagnóstico Organizacional</h2>
				<h3>Problemáticas Detectadas</h3>
				<ul className="no-bullet">
					<li>Falta de visibilidad de costos y rentabilidad por proyecto</li>
					<li>Descoordinación entre producción y obra</li>
					<li>Gestión manual y fragmentada de procesos clave</li>
					<li>Dependencia crítica del dueño</li>
				</ul>
				<h3>Análisis Sistémico (TGS)</h3>
				<ul className="no-bullet">
					<li>
						<strong>Entorno:</strong> Competidores, mercado, proveedores, economía,
						regulaciones
					</li>
					<li>
						<strong>Entradas:</strong> Pedidos, precios, condiciones climáticas
					</li>
					<li>
						<strong>Procesos:</strong> Presupuestación, planificación, construcción,
						logística, administración
					</li>
					<li>
						<strong>Salidas:</strong> Módulos entregados, facturas, remitos, pagos
					</li>
					<li>
						<strong>Retroalimentación:</strong> Ausente, justifica la necesidad de un
						SI
					</li>
				</ul>
				<h3>Análisis FODA</h3>
				<ul className="no-bullet">
					<li>
						<strong>Fortalezas:</strong> Producto diferenciado, proceso eficiente,
						know-how, argumento de venta sólido
					</li>
					<li>
						<strong>Debilidades:</strong> No se mide rentabilidad, cuello de botella en
						producción, gestión informal, nula trazabilidad, alta dependencia del
						dueño
					</li>
					<li>
						<strong>Oportunidades:</strong> Mercado en crecimiento, demanda de
						calidad, acceso a SaaS, tendencia sostenible
					</li>
					<li>
						<strong>Amenazas:</strong> Competencia en precio, volatilidad de insumos,
						coyuntura económica, clima
					</li>
				</ul>
			</>
		),
	},
	{
		title: 'Fundamentación de la Solución Propuesta',
		content: (
			<>
				<h2>Fundamentación de la Solución Propuesta</h2>
				<p>
					A partir del análisis FODA, se diseñaron estrategias para capitalizar
					fortalezas, aprovechar oportunidades, mitigar amenazas y superar
					debilidades. La clave es implementar un sistema de gestión que integre la
					información y solucione la falta de control de costos y trazabilidad,
					aprovechando herramientas digitales de bajo costo.
				</p>
				<ul className="no-bullet">
					<li>
						<strong>Estrategias FO:</strong> Marketing digital, franquicias/socios
						constructoras
					</li>
					<li>
						<strong>Estrategias DO:</strong> Sistema de gestión de proyectos,
						presupuestador online
					</li>
					<li>
						<strong>Estrategias FA:</strong> Manual de comparación, diversificación
						de oferta
					</li>
					<li>
						<strong>Estrategias DA:</strong> Estandarización de modelos, protocolo de
						producción con pronóstico climático
					</li>
				</ul>
			</>
		),
	},
	{
		title: 'Propuesta del Sistema de Información SIGOP',
		content: (
			<>
				<h2>Propuesta del Sistema de Información SIGOP</h2>
				<p>
					<strong>Concepto:</strong> Sistema web centralizado para gestión de obras y
					producción, con información en tiempo real sobre proyectos, producción,
					logística, avances y costos
				</p>
				<h3>Módulos Principales</h3>
				<ul className="no-bullet">
					<li>Sincronización Producción–Obra</li>
					<li>Logística de Entregas</li>
					<li>Panel de Control por Proyecto (Dashboard)</li>
					<li>Presupuesto y Seguimiento de Costos</li>
					<li>Carga de Avances en Obra</li>
				</ul>
				<h3>Actores</h3>
				<ul className="no-bullet">
					<li>Administrador General</li>
					<li>Responsable de Producción</li>
					<li>Jefe de Obra / Capataz</li>
					<li>Cliente (acceso de solo lectura)</li>
				</ul>
				<h3>Decisiones de Diseño</h3>
				<ul className="no-bullet">
					<li>Enfoque en Dashboard por proyecto</li>
					<li>Gestión por roles y permisos diferenciados</li>
				</ul>
			</>
		),
	},
	{
		title: 'Diagramas',
		content: (
			<>
				<h2>Diagramas de Casos de Uso</h2>
				<div className="diagramas-grid">
					<div>
						<img
							src={DCUAvanceObra}
							alt="Caso de Uso: Avance de Obra"
						/>
						<p>
							Gestión de Avances de Obra: El administrador valida el avance que el
							jefe de obra cargó al sistema (materiales, horas, foto).
						</p>
					</div>
					<div>
						<img
							src={DCUControlRentabilidad}
							alt="Caso de Uso: Control de Rentabilidad"
						/>
						<p>
						 Control de Rentabilidad: El responsable administrativo registra costos y
						 presupuestos; el administrador puede generar reportes y visualizar
						 comparativas.
						</p>
					</div>
					<div>
						<img
							src={DCUPlanificacionProduccion}
							alt="Caso de Uso: Planificación de la Producción"
						/>
						<p>
							Planificación de la Producción: El jefe de obra ve obras activas; el
							administrador planifica producción, actualiza stock y alerta
							desfasajes.
						</p>
					</div>
				</div>
				<h2>Diagramas de Secuencia</h2>
				<div className="diagramas-grid">
					<div>
						<img
							src={DSAvanceObra}
							alt="Secuencia: Avance de Obra"
						/>
						<p>
							Registro de Avance de Obra: Pasos desde iniciar sesión hasta guardar
							avance con éxito.
						</p>
					</div>
					<div>
						<img
							src={DSControlRentabilidad}
							alt="Secuencia: Control de Rentabilidad"
						/>
						<p>
							Creación de Presupuesto y Análisis de Rentabilidad: Desde iniciar
							sesión, completar presupuesto, hasta análisis de rentabilidad.
						</p>
					</div>
					<div>
						<img
							src={DSPlanificacionProduccion}
							alt="Secuencia: Planificación de la Producción"
						/>
						<p>
							Planificación de la Producción Semanal: Visualización de alertas,
							creación de plan y confirmación de guardado.
						</p>
					</div>
				</div>
			</>
		),
	},
	{
		title: 'Interfaces',
		content: (
			<>
				<h2>Interfaces de Usuario</h2>
				<h3>Historia 1: Carga de Avances</h3>
				<img
					src={InterfazAvanceObra}
					alt="Interfaz Avance de Obra"
					className="interface-img"
				/>
				<p>
					Permite al Jefe de Obra registrar el avance diario directamente desde la
					obra.
				</p>
				<h3>Historia 2: Panel de Control</h3>
				<img
					src={InterfazPanelControl}
					alt="Interfaz Panel de Control"
					className="interface-img"
				/>
				<img
					src={InterfazPresupuestosCostos}
					alt="Interfaz Presupuestos y Costos"
					className="interface-img"
				/>
				<p>
					Solución para el Administrador: Panel de Control (vista 360°) y
					Presupuesto/Costos (análisis de rentabilidad).
				</p>
				<h3>Historia 3: Planificación y Logística</h3>
				<img
					src={InterfazProduccionObra}
					alt="Interfaz Producción Obra"
					className="interface-img"
				/>
				<img
					src={InterfazLogistica}
					alt="Interfaz Logística"
					className="interface-img"
				/>
				<p>
					Herramientas para el Responsable de Producción: planificación de
					fabricación y coordinación de entregas.
				</p>
			</>
		),
	},
	{
		title: 'Historias de Usuario',
		content: (
			<>
				<h2>Historias de Usuario</h2>
				<div className="historias-usuario">
					<div>
						<h3>Historia 1: Carga de Avances desde la Obra</h3>
						<p>
							Como jefe de obra, quiero registrar desde el celular el avance de cada
							etapa, el consumo de materiales y las horas trabajadas, para que el
							equipo administrativo y de producción tenga visibilidad en tiempo real
							y sin errores.
						</p>
						<p>
							<strong>Criterios de Aceptación:</strong> Selección de proyecto y
							etapa, carga de % de avance y observaciones, ingreso de materiales,
							registro de asistencia y subida de fotos.
						</p>
					</div>
					<div>
						<h3>Historia 2: Panel de Control del Proyecto</h3>
						<p>
							Como administrador general, quiero ver en un panel todos los
							indicadores clave del proyecto (avance físico, costos, pagos, fechas),
							para tomar decisiones operativas y financieras informadas.
						</p>
						<p>
							<strong>Criterios de Aceptación:</strong> Barras de progreso,
							comparativas de costos, total de horas, alertas por desvíos y fechas
							clave.
						</p>
					</div>
					<div>
						<h3>Historia 3: Planificación de Producción</h3>
						<p>
							Como responsable de producción, quiero ver qué cantidad de bloques
							necesita cada obra para la próxima semana, para organizar la
							fabricación sin faltantes ni urgencias.
						</p>
						<p>
							<strong>Criterios de Aceptación:</strong> Calendario de obras, cálculo
							automático de requerimientos, stock disponible y plan de producción
							priorizado.
						</p>
					</div>
				</div>
			</>
		),
	},
	{
		title: 'Conclusión',
		content: (
			<>
				<h2>Conclusión</h2>
				<p>
					El análisis realizado a ArquiBlock revela una empresa con un producto de
					alta calidad y un gran potencial, pero cuyo crecimiento se ve
					obstaculizado por una gestión operativa y financiera basada en métodos
					manuales e informales. La falta de un sistema integrado genera una cadena
					de problemas que culmina en la imposibilidad de medir la rentabilidad, el
					indicador más vital para cualquier negocio.
				</p>
				<p>
					La propuesta del sistema SIGOP está diseñada para ser la columna
					vertebral digital de la empresa. Ataca directamente cada una de las
					debilidades detectadas, transformándolas en fortalezas:
				</p>
				<ul className="no-bullet">
					<li>
						La incertidumbre financiera se convierte en control de rentabilidad en
						tiempo real.
					</li>
					<li>
						La descoordinación y el caos se transforman en planificación proactiva
						y sincronizada.
					</li>
					<li>
						La información fragmentada se consolida en una única fuente de la
						verdad.
					</li>
				</ul>
				<p>
					La implementación de este sistema no solo representaría una mejora
					operativa, sino que le proporciona a ArquiBlock la herramienta estratégica
					fundamental que necesita para gestionar su crecimiento de manera
					sostenible, optimizar sus recursos y, finalmente, consolidar su posición
					como una marca de referencia en el mercado de la construcción modular.
				</p>
				<div style={{ marginTop: '2rem' }}>
					<a
						href={PDF_URL}
						download
						className="pdf-link"
					>
						Descargar Informe Final (PDF)
					</a>
				</div>
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
