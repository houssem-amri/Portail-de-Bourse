import { Injectable } from '@angular/core';

export interface BadgeItem {
	type: string;
	value: string;
}

export interface ChildrenItems {
	state: string;
	target?: boolean;
	name: string;
	type?: string;
	children?: ChildrenItems[];
}

export interface MainMenuItems {
	state: string;
	main_state?: string;
	target?: boolean;
	name: string;
	type: string;
	icon: string;
	badge?: BadgeItem[];
	children?: ChildrenItems[];
}

export interface Menu {
	label: string;
	main: MainMenuItems[];
}

const MENUITEMS = [
	{
		label: 'acceuil',
		main: [
			{
				state: 'dashboard',
				name: 'acceuil',
				type: 'link',
				icon: 'ti-home'
			}
		]
	},
	{
		label: ' Les utilisateurs ',
		main: [
			{
				state: 'utilisateurs',
				name: 'Mes utilisateurs ',
				type: 'link',
				icon: 'ti-home'
			},
			{
				state: 'ajouter-utilisateurs',
				name: 'Ajouter utilisateur ',
				type: 'link',
				icon: 'ti-home'
			}
		]
	},
	{
		label: 'Ordres',
		main: [
			{
				state: 'orders',
				name: 'Ordres',
				type: 'link',
				icon: 'ti-layers'
			},
			{
				state: 'order-history',
				name: 'Order history',
				type: 'link',
				icon: 'ti-layers'
			}
		]
	},
	{
		label: 'Operations',
		main: [
			{
				state: 'Operations',
				name: 'Operations',
				type: 'link',
				icon: 'ti-receipt'
			}
		]
	},
	{
		label: 'Charts',
		main: [
			{
				state: 'charts',
				name: 'Charts',
				type: 'link',
				icon: 'ti-map-alt'
			}
		]
	},
	{
		label: 'Ajouter  cours',
		main: [
			{
				state: 'ajouter-cours',
				name: 'ajouter cours',
				type: 'link',
				icon: 'ti-id-badge'
			}
		]
	}
];

@Injectable()
export class MenuItems {
	getAll(): Menu[] {
		return MENUITEMS;
	}

	/*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
