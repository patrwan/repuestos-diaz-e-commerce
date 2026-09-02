import { Branch, Commune } from '../core/models/branch.model';

export const BRANCHES: Record<Commune, Branch[]> = {
    'santa-cruz': [
        {
            name: 'Sucursal Santa Cruz',
            address: 'Av. Errázuriz 1109, Santa Cruz',
            parking: true,
            hours: {
                weekdays: '09:00 - 18:00',
                saturday: '10:00 - 15:00',
                sunday: 'Cerrado'
            }
        }
    ],

    'san-fernando': [
        {
            name: 'Sucursal San Fernando 1',
            address: 'Avenida Ohiggins 218',
            parking: false,
            hours: {
                weekdays: '09:00 - 18:00',
                saturday: '10:00 - 15:00',
                sunday: 'Cerrado'
            }

        },
        {
            name: 'Sucursal San Fernando 2',
            address: 'Avenida Ohiggins 374',
            parking: true,
            hours: {
                weekdays: '09:00 - 18:00',
                saturday: '10:00 - 15:00',
                sunday: 'Cerrado'
            }

        },
        {
            name: 'Servicio Automotriz (Taller Mecánico)',
            address: 'AvenidaA Ohiggins 239 - San Fernando',
            parking: true,
            hours: {
                weekdays: '09:00 - 18:00',
                saturday: '10:00 - 15:00',
                sunday: 'Cerrado'
            }

        }

    ],

    rengo: []
};