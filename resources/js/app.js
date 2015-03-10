(function () {
	var app = angular.module('store', [ ]);

	app.controller('StoreController',function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){

		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2,
		description: 'A description',
		canPurchase: true,
		soldOut: false,
		images: [
		{
			full: 'resources/images/01-full.png',
			thumb: 'resources/images/01-thumb.png'
		},
		{
			full: 'resources/images/02-full.png',
			thumb: 'resources/images/02-thumb.png'
		}
		]
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'Another description',
		canPurchase: false,
		soldOut: false,
		images: [
		{
			full: 'resources/images/03-full.png',
			thumb: 'resources/images/03-thumb.png'
		}
		]
	}
	];
})();

