class Canvas {
    constructor() {
        this.view = document.createElement('canvas');
        this.context = this.view.getContext('2d');
    }
}