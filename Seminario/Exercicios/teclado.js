function Teclado ()
{
	this.teclaPressionada = function (e) {
		this[e.keyCode] = true;
	}
	this.teclaSolta = function (e) {
		this[e.keyCode] = false;
	}
}
