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
				state: 'dashboard-client',
				name: 'acceuil',
				type: 'link',
				icon: 'ti-home'
			}
		]
	},
	{
		label: ' Mon compte  ',
		main: [
			{
				state: 'compte-titre',
				name: 'Mon compte titre ',
				type: 'link',
				icon: 'ti-home'
			},
			{
				state: 'compte-espèce',
				name: 'Mon compte espèce ',
				type: 'link',
				icon: 'ti-home'
			}
		]
	},
	{
		label: 'Ordres',
		main: [
			{
				state: 'ordres-client',
				name: 'Ordres ',
				type: 'link',
				icon: 'ti-layers'
			}
		]
	},
	{
		label: 'Operations',
		main: [
			{
				state: 'Operations-client',
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
				state: 'charts-client',
				name: 'Charts',
				type: 'link',
				icon: 'ti-map-alt'
			}
		]
	}
];

@Injectable()
export class MenuClientItems {
	getAll(): Menu[] {
		return MENUITEMS;
	}

	/*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
