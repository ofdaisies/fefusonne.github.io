class Deck {
	deck = new Array();
	create() {
		for (var i = 0; i < 48; i++) {
			
		}
	}
	
	
}

//0 - field; 1 - stadium; 2 - road, 3 - building
class card {
	contains = new Array();
	
	ident(name) {
		for (var i = 0; i < 5; i++) {
			switch (name[i]) {
				case 'f':
					contains[i] = 0;
					break;
				case 's':
					contains[i] = 1;
					break;
				case 'r':
					contains[i] = 2;
					break;
				case 'b':
					contains[i] = 3;
					break;
			}
		}
	}
	remote(name) {
		name = name[3] + name.substring(0, 3) + name.substring(4, 6);
	}
}