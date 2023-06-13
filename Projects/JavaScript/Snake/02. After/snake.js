(function(global) {
    function drawSnakeSegment(canvasContext, x, y) {
        canvasContext.strokeStyle = 'black';
        canvasContext.fillStyle = 'green';
        canvasContext.beginPath();
        canvasContext.rect(x, y, 10, 10);
        canvasContext.fill();
        canvasContext.stroke();
    }

    function calculateDelta(direction) {
        switch (direction) {
            // 0 - Up
            case 0:
                return {
                    x: 0,
                    y: -1
                };
            // 1 - Right
            case 1:
                return {
                    x: 1,
                    y: 0
                };
            // 2 - Down
            case 2:
                return {
                    x: 0,
                    y: 1
                };
            // 3 - Left
            case 3:
                return {
                    x: -1,
                    y: 0
                };
        }
    }

    function getNextPosition(position, direction) {
        var delta = calculateDelta(direction);
        return {
            x: position.x + (10 * delta.x),
            y: position.y + (10 * delta.y),
        };
    }

    function drawSnake(canvasContext, snake) {
        var position = snake.getPosition();
        var segments = snake.getSegments();

        for (let counter = 0; counter < segments.length; counter++) {
            var segment = segments[counter];
            var position = segment.getPosition();
            drawSnakeSegment(canvasContext, position.x, position.y);
        }
    }

    function gameTick(snake) {
        snake.move();
    }

    function collision() {
        alert('CRASH!');
    }

    function gameLoop(canvas, canvasContext, snake) {
        drawSnake(canvasContext, snake);

        var gameInterval = setInterval(() => {
            gameTick(snake);

            var segments = snake.getSegments();
            var snakeHead = segments[segments.length - 1];
            var snakeHeadNewPosition = snakeHead.getPosition();
            var { x, y } = snakeHeadNewPosition;

            var pixelData = canvasContext.getImageData(x + 1, y + 1, 1, 1).data;
            var pixelAlphaValue = pixelData[3];
            if (pixelAlphaValue === 255 || x < 0 || y < 0 || x > 310 || y > 230) {
                collision();
                clearInterval(gameInterval);
                return;
            }

            canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            drawSnake(canvasContext, snake);
    
        }, 100);
    }

    function run() {
        var canvas = document.getElementById('game_board');
        var pixelRatio = window.devicePixelRatio;
        var boardWidth = 32;
        var boardHeight = 24;
        var boardSquareSize = 10;
        canvas.width = pixelRatio * boardWidth * boardSquareSize;
        canvas.height = pixelRatio * boardHeight * boardSquareSize;

        var canvasContext = canvas.getContext('2d');
        canvasContext.scale(pixelRatio, pixelRatio);

        var snake = new Snake();
        gameLoop(canvas, canvasContext, snake);

        global.addEventListener('keydown', (e) => {
            const keyCode = e.code;

            const mapKeyCodeToDirection = (keyCode) => {
                // 0 - Up
                // 1 - Right
                // 2 - Down
                // 3 - Left
                switch (keyCode) {
                    case 'ArrowUp': return 0;
                    case 'ArrowRight': return 1;
                    case 'ArrowDown': return 2;
                    case 'ArrowLeft': return 3;
                    default: return -1;
                }
            };

            const newDirection = mapKeyCodeToDirection(keyCode);
            if (newDirection > -1) {
                snake.setDirection(newDirection);
            }
        })

        console.log('=== Snake is running ===');
    }

    function SnakeSegment() {
        var self = this;

        self.x = 0;
        self.y = 0;

        // 0 - Up
        // 1 - Right
        // 2 - Down
        // 3 - Left
        self.direction = 1;

        self.getPosition = function () {
            return {
                x: self.x,
                y: self.y
            };
        };

        self.setPosition = function(position) {
            self.x = position.x;
            self.y = position.y;
        };

        self.getDirection = function () {
            return self.direction;
        };

        self.setDirection = function (direction) {
            if (self.direction === 0 && direction === 2) {
                return;
            }
            if (self.direction === 1 && direction === 3) {
                return;
            }
            if (self.direction === 2 && direction === 0) {
                return;
            }
            if (self.direction === 3 && direction === 1) {
                return;
            }
            self.direction = direction;
        };

        self.move = function () {
            const getNewPosition = () => {
                switch (self.direction) {
                    case 0:
                        return { x: self.x, y: self.y - 10 };
                    case 1:
                        return { x: self.x + 10, y: self.y };
                    case 2:
                        return { x: self.x, y: self.y + 10 };
                    case 3:
                        return { x: self.x - 10, y: self.y };
                    default:
                        return { x: self.x, y: self.y };
                }
            }
            const newPosition = getNewPosition();
            this.setPosition(newPosition);
        };
    }

    function Snake() {
        const self = this;
        
        self.x = 0;
        self.y = 0;
        self.length = 3;
        self.segments = [];
        // 0 - Up
        // 1 - Right
        // 2 - Down
        // 3 - Left
        self.direction = 1;

        var position = { x: self.x, y: self.y };
        for (
            let counter = 0;
            counter < self.length;
            counter++,  position = getNextPosition(position, self.direction)
        ) {
            var segment = new SnakeSegment(self);
            segment.setPosition(position);
            self.segments.push(segment);
        }

        self.getPosition = function () {
            return {
                x: self.x,
                y: self.y
            };
        };

        self.getLength = function () {
            return self.length;
        };

        self.getDirection = function () {
            return self.direction;
        };

        self.setDirection = function (direction) {
            self.direction = direction;
            self.segments[self.segments.length - 1].setDirection(direction);
        }

        self.move = function () {
            for (let counter = 0; counter < self.segments.length - 1; counter++) {
                var currentSegment = self.segments[counter];
                var nextSegment = self.segments[counter + 1];
                currentSegment.setPosition(nextSegment.getPosition());
                currentSegment.setDirection(nextSegment.getDirection());
            }
            self.segments[self.segments.length - 1].move();
        };

        self.getSegments = function() {
            return self.segments;
        };
    }

    global.Snake = {};

    global.Snake.run = run;

})(window);