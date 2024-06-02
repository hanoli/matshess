import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/layout/dashboard'] }
                ]
            },
           
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Clientes',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Lista de clientes',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/pages/crud']
                            },
                            {
                                label: 'Historicas',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/uikit/charts']
                            },
                            {
                                label: 'Cambio de posicion',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/pages/timeline']
                            }
                        ]
                    },{
                        label: 'Comparativos',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Facturado',
                                icon: 'pi pi-fw pi-sign-in',
                             //   routerLink: ['/auth/login']
                            },
                            {
                                label: 'Presupuestado',
                                icon: 'pi pi-fw pi-times-circle',
                               // routerLink: ['/auth/error']
                            }
                        ]
                    },{
                        label: 'Administracion',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Comision base',
                                icon: 'pi pi-fw pi-sign-in',
                               // routerLink: ['/auth/login']
                            },
                            {
                                label: 'Formadores',
                                icon: 'pi pi-fw pi-times-circle',
                              //  routerLink: ['/auth/error']
                            },
                            {
                                label: 'Presupuesto Anual',
                                icon: 'pi pi-fw pi-lock',
                              //  routerLink: ['/auth/access']
                            },
                            {
                                label: 'Datos de socio liquidadores',
                                icon: 'pi pi-fw pi-lock',
                              //  routerLink: ['/auth/access']
                            },
                            {
                                label: 'Integracion de volumen',
                                icon: 'pi pi-fw pi-lock',
                              //  routerLink: ['/auth/access']
                            },
                            {
                                label: 'Subyacente Diario',
                                icon: 'pi pi-fw pi-lock',
                               // routerLink: ['/auth/access']
                            }

                        ]
                    },{
                        label: 'Tarifas y Descuentos',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Tarifas y Descuentos',
                                icon: 'pi pi-fw pi-sign-in',
                              //  routerLink: ['/auth/login']
                            }
                        ]
                    },
                    {
                        label: 'Administracion 2',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Empresas',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/administracion/empresas']
                            },
                            {
                                label: 'Administración de contenidos',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/administracion/administracion-contenidos']
                            },
                            {
                                label: 'Usuarios',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/administracion/usuarios']
                            },
                            {
                                label: 'Control',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/administracion/control']
                            },
                            {
                                label: 'Publicar',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/administracion/publicar']
                            }
                        ]
                    },
                    {
                        label: 'Operaciones de emisores',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Agenda de recompras',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/operacion-emisores/agenda/capital/agenda-recompras']
                            },
                            {
                                label: 'Agenda de tenedores',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/operacion-emisores/agenda/deuda/agenda-tenedores']
                            },
                            {
                                label: 'Agenda de recompras fibras',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/operacion-emisores/agenda/fibras/agenda-recompras-fibras']
                            },
                            {
                                label: 'Capital',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/operacion-emisores/agenda/capital']
                            }
                        ]
                    },
                    {
                        label: 'Operar ofertas',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Consultar ofertas publicas o listados no cruzados',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/operar-ofertas/consultas']
                            }
                        ]
                    },
                    {
                        label: 'Mantenimiento',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Cambio emisora',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/mantenimiento/cambio-emisora']
                            },
                            {
                                label: 'Capitales',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/mantenimiento/capitales']
                            },
                            {
                                label: 'Deuda',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/mantenimiento/deuda']
                            },
                            {
                                label: 'Operar estado de emisores',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/mantenimiento/operar-estado-emisores']
                            },
                            {
                                label: 'Mantenimiento',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/layout/mantenimiento']
                            }
                        ]
                    }
                ]
            },
           
        ];
    }
}
