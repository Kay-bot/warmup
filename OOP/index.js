// function createCircle(radius) {
return {
    radius,
    draw: function() {
        console.log('draw')
    }
};
}

const circle = createCircle(1)
circle.draw()


// Constructor Function 
function Circle(radius) {

    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function() {
        return defaultLocation;
    }
    this.draw = function() {
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.');

            defaultLocation = value;
        }
    })
}
const another = new Circle(10)
another.draw();