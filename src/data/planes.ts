interface Planes {
    nombre: string,
    descripcion: string,
    precio: string,
    caracteristicas: string[],
}

export const planes: Planes[] = [
    {
        nombre: 'Plan Básico',
        descripcion: 'Ideal para médicos que están comenzando con la digitalización de sus expedientes.',
        precio: '500',
        caracteristicas:[
                    'Administración de Expedientes',
                    'Programación de Citas',
                    'Alertas y Recordatorios',
                    'Manejo de Inventarios (básico)',
                    'Soporte por correo electrónico'
        ]


     }
]