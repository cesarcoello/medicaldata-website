interface Modulo {
    nombre: string,
    descripcion: string,
    url: string,
    img: string,
    caracteristicas: string[]
}

export const modulos: Modulo[] = [
    {
        nombre: 'Administración de Expedientes',
        descripcion:'Digitaliza y gestiona los expedientes de tus pacientes de manera segura y organizada. Desde la primera consulta hasta el final del tratamiento, mantén un registro detallado y fácilmente accesible.',
        url: 'expedientes',
        img: 'modulo_01.jpg',
        caracteristicas: [
            'Permite crear, editar y gestionar expedientes médicos detallados desde la primera consulta del paciente',
            'Incluye datos personales básicos, historial médico, diagnósticos, tratamientos y notas clínicas',
            'Capacidad para adjuntar documentos e imágenes relevantes',
            'Funcionalidad para buscar y filtrar expedientes por diversos criterios',
            'Capacidad para exportar historias clínicas o el expediente completo en formato PDF'
        ]
    },
    {
        nombre: 'Programación de Citas',
        descripcion:'Organiza y gestiona las citas médicas de manera eficiente. Evita conflictos de horarios y mejora la experiencia del paciente con recordatorios automáticos y una vista clara de la agenda.',
        url: 'citas', 
        img: 'modulo_02.png',
        caracteristicas:[
            'Soporte para la programación y ajuste de citas médicas',
            'Integración con calendarios y recordatorios automáticos',
            'Herramientas para visualizar la agenda diaria y semanalmente',
            ' Envío de recordatorios de cita a los pacientes por SMS, correo electrónico y WhatsApp'
        ]
    },
    {
        nombre: 'Alertas y Recordatorios',
        descripcion:'Configura alertas y recordatorios para seguimientos, revisiones y tareas pendientes, asegurando un cuidado continuo y adecuado del paciente.', 
        url: 'alertas', 
        img: 'modulo_03.jpg',
        caracteristicas:[
            'Flexibilidad para crear y personalizar alertas y recordatorios',
            'Sistema de notificaciones eficiente para recordatorios importantes',
            'Fácil gestión y visualización de alertas pendientes',
            'Recordar tareas y seguimientos críticos para mejorar el cuidado del paciente',
            'Personalización de alertas para mantener a los médicos informados y organizados'
        ]
    },
    {
        nombre: 'Manejo de Inventarios',
        descripcion:'Administra el inventario de medicamentos y suministros médicos de tu clínica. Asegura un control preciso y reduce el riesgo de desabastecimientos y errores.', 
        url: 'inventario', 
        img: 'modulo_04.jpg',
        caracteristicas:[
            'Sistema para registrar y actualizar el inventario de medicamentos y suministros médicos',
            'Funcionalidad para generar reportes de inventario y consumo de medicamentos',
            'Seguimiento preciso de las existencias de medicamentos, reduciendo errores y desabastecimientos',
            'Facilita la organización y el almacenamiento de los medicamentos, reduciendo el tiempo dedicado a la búsqueda',
            'Alertas cuando el inventario de ciertos medicamentos está bajo'
        ]
    },
]

