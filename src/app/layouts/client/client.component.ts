import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import 'rxjs/add/operator/filter';
import { MenuClientItems } from '../../shared/menu-items/menu-client-items';
import { ClientService } from 'src/app/service/client.service';

@Component({
	selector: 'app-client',
	templateUrl: './client.component.html',
	styleUrls: ['./client.component.css'],
	encapsulation: ViewEncapsulation.None,
	animations: [
		trigger('slideInOut', [
			state(
				'in',
				style({
					transform: 'translate3d(0, 0, 0)'
				})
			),
			state(
				'out',
				style({
					transform: 'translate3d(100%, 0, 0)'
				})
			),
			transition('in => out', animate('400ms ease-in-out')),
			transition('out => in', animate('400ms ease-in-out'))
		]),
		trigger('slideOnOff', [
			state(
				'on',
				style({
					transform: 'translate3d(0, 0, 0)'
				})
			),
			state(
				'off',
				style({
					transform: 'translate3d(100%, 0, 0)'
				})
			),
			transition('on => off', animate('400ms ease-in-out')),
			transition('off => on', animate('400ms ease-in-out'))
		]),
		trigger('mobileMenuTop', [
			state(
				'no-block, void',
				style({
					overflow: 'hidden',
					height: '0px'
				})
			),
			state(
				'yes-block',
				style({
					height: AUTO_STYLE
				})
			),
			transition('no-block <=> yes-block', [animate('400ms ease-in-out')])
		])
	]
})
export class ClientComponent implements OnInit {
	deviceType = 'desktop';
	verticalNavType = 'expanded';
	verticalEffect = 'shrink';
	chatToggle = 'out';
	chatInnerToggle = 'off';
	innerHeight: string;
	isScrolled = false;
	isCollapsedMobile = 'no-block';
	toggleOn = true;
	windowWidth: number;
	@ViewChild('searchFriends', /* TODO: add static flag */ { static: false })
	search_friends: ElementRef;
	@ViewChild('toggleButton', /* TODO: add static flag */ { static: false })
	toggle_button: ElementRef;
	@ViewChild('sideMenu', /* TODO: add static flag */ { static: false })
	side_menu: ElementRef;

	config: any;
	id: any
	client: any
	constructor(public menuItems: MenuClientItems, private clientService: ClientService) {
		const scrollHeight = window.screen.height - 150;
		this.innerHeight = scrollHeight + 'px';
		this.windowWidth = window.innerWidth;
		this.setMenuAttributs(this.windowWidth);
	}

	ngOnInit() {
		this.id = JSON.parse(localStorage.getItem('connectedUserDorra'))
		this.clientService.getClientById(this.id).subscribe((client) => {
			this.client = client
		})
	}

	onClickedOutside(e: Event) {
		if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
			this.toggleOn = true;
			this.verticalNavType = 'offcanvas';
		}
	}

	onResize(event) {
		this.innerHeight = event.target.innerHeight + 'px';
		/* menu responsive */
		this.windowWidth = event.target.innerWidth;
		let reSizeFlag = true;
		if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
			reSizeFlag = false;
		} else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
			reSizeFlag = false;
		}

		if (reSizeFlag) {
			this.setMenuAttributs(this.windowWidth);
		}
	}

	setMenuAttributs(windowWidth) {
		if (windowWidth >= 768 && windowWidth <= 1024) {
			this.deviceType = 'tablet';
			this.verticalNavType = 'offcanvas';
			this.verticalEffect = 'push';
		} else if (windowWidth < 768) {
			this.deviceType = 'mobile';
			this.verticalNavType = 'offcanvas';
			this.verticalEffect = 'overlay';
		} else {
			this.deviceType = 'desktop';
			this.verticalNavType = 'expanded';
			this.verticalEffect = 'shrink';
		}
	}

	searchFriendList(event) {
		const search = this.search_friends.nativeElement.value.toLowerCase();
		let search_input: string;
		let search_parent: any;
		const friendList = document.querySelectorAll('.userlist-box .media-body .chat-header');
		Array.prototype.forEach.call(friendList, function (elements, index) {
			search_input = elements.innerHTML.toLowerCase();
			search_parent = elements.parentNode.parentNode;
			if (search_input.indexOf(search) !== -1) {
				search_parent.classList.add('show');
				search_parent.classList.remove('hide');
			} else {
				search_parent.classList.add('hide');
				search_parent.classList.remove('show');
			}
		});
	}

	toggleChat() {
		this.chatToggle = this.chatToggle === 'out' ? 'in' : 'out';
	}

	toggleChatInner() {
		this.chatInnerToggle = this.chatInnerToggle === 'off' ? 'on' : 'off';
	}

	toggleOpened() {
		if (this.windowWidth < 768) {
			this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
			this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
		} else {
			this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
		}
	}
	onMobileMenu() {
		this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
	}

	onScroll(event) {
		this.isScrolled = false;
	}
}
