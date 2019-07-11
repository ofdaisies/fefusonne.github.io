let cardTypes = [
    'ffffbn',//1
    'ffffbn',
    'ffffbn',
    'ffffbn',
    'fffrbn',//2
    'ffrfbn',
    'frffbn',
    'rfffbn',
    'sssssn',//3
    'sssssn',
    'sssssn',
    'sssssn',
    'sssfsn',//4
    'fssssn',
    'sfsssn',
    'ssfssn',
    'ssffsn',//5
    'sffssn',
    'ffsssn',
    'fssfsn',
    'ssrrsn',//6
    'srrssn',
    'rrsssn',
    'rssrsn',
    'sfsfsn',//7
    'fsfssn',
    'sfsfsn',
    'fsfssn',
    'ssfffn',//8
    'sffsfn',
    'ffssfn',
    'fssffn',
    'fsfsfn',//9
    'sfsffn',
    'fsfsfn',
    'sfsffn',
    'fsfffn',//10
    'sffffn',
    'fffsfn',
    'ffsffn',
    'rsfrrn',//11
    'sfrrrn',
    'frrsrn',
    'rrsfrn',
    'fsrrrn',//12
    'srrfrn',
    'rrfsrn',
    'rfsrrn',
    'rsrren',//13
    'srrren',
    'rrrsen',
    'rrsren',
    'rsrfrn',//14
    'srfrrn',
    'rfrsrn',
    'frsrrn',
    'frfrrn',//15
    'rfrfrn',
    'frfrrn',
    'rfrfrn',
    'rffrrn',//16
    'ffrrrn',
    'frrfrn',
    'rrffrn',
    'rfrren',//17
    'frrren',
    'rrrfen',
    'rrfren',
    'rrrren',//18
    'rrrren',
    'rrrren',
    'rrrren',
    'sssfsy',//19
    'ssfssy',
    'sfsssy',
    'fssssy',
    'sfsfsy',//20
    'fsfssy',
    'sfsfsy',
    'fsfssy',
    'ssrrsy',//21
    'srrssy',
    'rrsssy',
    'rssrsy',
    'ssffsy',//22
    'sffssy',
    'ffsssy',
    'fssfsy',
    'sssrsn',//23
    'ssrssn',
    'srsssn',
    'rssssn',
    'sssrsy',//24
    'ssrssy',
    'srsssy',
    'rssssy'
];


function isPlaced(im, i, j, field, b) {
    if (!checkPlace(i, j, field)) {
        return false;
    }

    if ((!field[i - 1][j] || field[i - 1][j][2] == b[0]) &&
        (!field[i + 1][j] || field[i + 1][j][0] == b[2]) &&
        (!field[i][j - 1] || field[i][j - 1][3] == b[1]) &&
        (!field[i][j + 1] || field[i][j + 1][1] == b[3])) {
        return true;
    }
}

function checkPlace(a, b, field) {
	if (field[a][b])
		return false;
	if ((a == 0) || (a == 101) || (b == 0) || (b == 101))
		return false;
	if (field[a - 1][b - 1] || field[a + 1][b - 1] || field[a - 1][b + 1] || field[a + 1][b + 1]) {
		return true;
	} else {
		if (!field[a - 1][b] && !field[a + 1][b] && !field[a][b + 1] && !field[a][b - 1])
			return false;
	}
	return true;
}
function fill_tip(a, b){
    let cvs = document.getElementById("canvas");
    let ctx = cvs.getContext("2d");
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#3cc1ff";
    ctx.fillRect((a - 1) * 100, b * 100 + 200, 100, 100);
}

class Deck {
    shuffle(o) {
        for (let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) ;
        return o;
    }

    constructor() {
        this.deck = [];
        for (let i = 0; i < 1; i++)
            this.deck = this.deck.concat(cardTypes);
        this.deck = this.shuffle(this.deck);
        this.last_image;

    }

    rotation() {
        let a = this.last_image;
        a = a[3] + a.substring(0, 3) + a.substring(4, 6);
        this.last_image = a;

        let image = document.getElementById("cards");
        image.src = "pics/" + a + ".jpg";
    }

    show_card() {
        let block = document.getElementById("sharpp");
        if (block.childElementCount >= 2)
            return;
        if (this.deck.length <= 0) {
            alert("GAME OVER");
            return 0;
        }

        let a = this.deck[this.deck.length - 1];
        let image = document.createElement("img");
        image.id = "cards";
        image.src = "pics/" + a + ".jpg";
        block.appendChild(image);
        let im = document.getElementById("cards");
        this.last_image = a;
        this.deck.pop();
        initDrag(im);

        //this.fill_tip(5, 5);

        //show tips
        // for (let i = 1; i < 100; ++i){
        //     for (let j = 1; j < 100; ++j){
        //         if (checkPlace(i + 1, j, r.f.field)) {
        //             if (r.f.field[i][j][2] == r.f.field[i + 1][j][0]) {
        //                 fill_tip(i, j);
        //             }
        //         }
        //         if (checkPlace(i - 1, j, r.f.field)){
        //             if (r.f.field[i][j][0] == r.f.field[i + 1][j][2]){
        //                 fill_tip(i, j);
        //             }
        //         }
        //         if (checkPlace(i, j + 1, r.f.field)){
        //             if (r.f.field[i][j][3] == r.f.field[i + 1][j][1]){
        //                 fill_tip(i, j);
        //             }
        //         }
        //         if (checkPlace(i, j - 1, r.f.field)){
        //             if (r.f.field[i][j][1] == r.f.field[i + 1][j][3]){
        //                 fill_tip(i, j);
        //             }
        //
        //         }
        //
        //     }
        // }
    }
}

function initDrag (im) {

	im.onmousedown = function (e) {
		let coords = getCoords(im);
		let shiftX = e.pageX - coords.left;
		let shiftY = e.pageY - coords.top;

		im.style.position = 'absolute';
		document.body.appendChild(im, 50, 50);
		moveAt(e);


		im.style.zIndex = 1000; // над другими элементами

		function moveAt(e) {
			im.style.left = e.pageX - shiftX + 'px';
			im.style.top = e.pageY - shiftY + 'px';
		}

		document.onmousemove = function (e) {
			moveAt(e);

		};

		im.ondragstart = () => false;
		im.onmouseup = function (e) {
			if ( !(e.pageX < 1000 && e.pageY > 200 && e.pageY < 1200)) {
				return;
			}
			const sz = 100;
			let i = Math.floor((e.pageX - r.dx) / sz);
			let j = Math.floor((e.pageY - r.dy) / sz) - 2;
			let b = d.last_image;
			if (isPlaced(im, i, j, r.f.field, b)) {
				r.f.field[i][j] = b;
				r.redraw();
				document.onmousemove = null;
				im.onmouseup = null;
				im.remove();
				players[r.currentPlayer].score = 20;
				players[r.currentPlayer].show_score(r.currentPlayer);
				alert('Ход игрока: '+r.nextPlayer());
			}
			else {
				document.onmousemove = null;
				im.onmouseup = null;
			}
		}
	}
}

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    }
}

class Meeple{
    constructor(n, k) {
        let coordMeepX, coorfMeepY;
        let canvas = document.getElementById("player" + n);
        let	context = canvas.getContext("2d");
        let image = new Image(10, 10);
        image.visibility = true;
        image.src = "player" + n + ".png";
    }

    show_meeples(){
        image.onload = () => context.drawImage(image, 25*k, 60, 20, 20);
    }

    drag_and_drop(){

    }
}

class Player {
    constructor(n) {
        this.score = 0;
        this.meeples = [];
        this.pl = [];
        for (let i = 0; i < 6; ++i) {
            this.meeples[i] = new Meeple(n, i);
        }
        this.show_score(n);
    }

    show_score(n){
        let canvas = document.getElementById("player" + n);
        let	context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "22px Verdana";
        context.strokeText(n +" player", 10, 20);
        context.strokeText("score: " + this.score, 10, 50);
    }
}

class Field {
	constructor() {
		this.field = [];
		const n = 100;
		for (let i = 0; i < n; ++i) {
			this.field.push([]);
			for (let j = 0; j < n; ++j)
				this.field[i].push('');
		}
		this.field[5][5] = 'rsrfrn'
	}
}