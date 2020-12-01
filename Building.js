boxes_array = []

class Building {
    constructor(x, y, width, height, rows, cols) {
        this.boxrows = width / rows;
        this.boxcols = height / cols
        for (var i = 0; i < this.boxrows; i++) {
            for (var j = 0; j < this.boxcols; j++) {
                boxes_array.push(new Box(x - j * this.boxrows, y + i * this.boxcols, this.boxrows, this.boxcols))
            }
        }
    }
    display() {
        for (var k = 0; k < boxes_array.length; k++) {
            boxes_array[k].display();
        }
    }
}