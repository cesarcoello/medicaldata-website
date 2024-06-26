interface Planes {
    nombre: string,
    descripcion: string,
    precio: string,
    caracteristicas: string[]
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
     },
     {
        nombre: 'Plan Profesional',
        descripcion: 'Perfecto para clínicas en crecimiento que requieren más funcionalidades y mejor soporte.',
        precio: '1000',
        caracteristicas:[
                    'Todo en el Plan Básico',
                    'Exportación de expedientes en formato PDF',
                    'Recordatorios automáticos a pacientes (SMS y correo electrónico)',
                    'Reportes de Inventario avanzados',
                    'Soporte por correo electrónico y chat'
        ]
     },
     {
        nombre: 'Plan Premium',
        descripcion: 'La solución más completa para clínicas establecidas que buscan optimizar todas sus operaciones.',
        precio: '2000',
        caracteristicas:[
                    'Todo en el Plan Profesional',
                    'Recordatorios automáticos a pacientes (SMS, correo electrónico y WhatsApp)',
                    'Reportes y análisis personalizados',
                    'Soporte prioritario por teléfono, correo electrónico y chat',
                    'Acceso a futuras expansiones y módulos adicionales'
        ]
     }
]