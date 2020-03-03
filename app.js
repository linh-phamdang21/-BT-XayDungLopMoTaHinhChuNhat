let Rectangle = function (width, height) {
    this.width = parseInt(width);
    this.height = parseInt(height);
    this.show = "";
    this.setWidth = function (width) {
        this.width = width;
    }
    this.setHeight = function (height) {
        this.height = height;
    }
    this.getWidth = function () {
        return this.width
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getArea = function () {
        return width * height;
    }
    this.getPerimeter = function () {
        return (width + height)*2;
    }
    this.showRectangle = function () {
        let c = document.getElementById("mycanvas");
        let ctx = c.getContext("2d");
        ctx.fillRect(20,20,this.width,this.height);
    }
}

let rectangle = new Rectangle(200,100);
alert(rectangle.getArea());
alert(rectangle.getPerimeter());
rectangle.showRectangle();

rectangle.setWidth(300);
rectangle.setHeight(200);
alert(rectangle.getArea());
alert(rectangle.getPerimeter());
rectangle.showRectangle();