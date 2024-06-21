interface Modulo {
    nombre: string,
    descripcion: string,
    url: string,
    img: string,
}

export const modulos: Modulo[] = [
    {
        nombre: 'Administración de Expedientes',
        descripcion:'Digitaliza y gestiona los expedientes de tus pacientes de manera segura y organizada. Desde la primera consulta hasta el final del tratamiento, mantén un registro detallado y fácilmente accesible.',
        url: 'expedientes',
        img: 'modulo_01.jpg'},
    {
        nombre: 'Programación de Citas',
        descripcion:'Organiza y gestiona las citas médicas de manera eficiente. Evita conflictos de horarios y mejora la experiencia del paciente con recordatorios automáticos y una vista clara de la agenda.',
        url: 'citas', 
        img: 'modulo_02.png'},
    {
        nombre: 'Alertas y Recordatorios',
        descripcion:'Configura alertas y recordatorios para seguimientos, revisiones y tareas pendientes, asegurando un cuidado continuo y adecuado del paciente.', 
        url: 'alertas', 
        img: 'modulo_03.jpg'},
    {
        nombre: 'Manejo de Inventarios',
        descripcion:'Administra el inventario de medicamentos y suministros médicos de tu clínica. Asegura un control preciso y reduce el riesgo de desabastecimientos y errores.', 
        url: 'inventario', 
        img: 'modulo_04.jpg'},
]

