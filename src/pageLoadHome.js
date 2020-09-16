const content = () => `
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="./img/home1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="./img/home2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="./img/home3.jpg" class="d-block w-100" alt="..." />
        </div>
    </div>
`

const overlappedContent = () => `
<div id=overlapped-container>
The best
<div id=flip>
    <div>
        <div>Tacos</div>
    </div>
    <div>
        <div>Ceviches</div>
    </div>
    <div>
        <div>Tostadas</div>
    </div>
</div>
In Cascais!
</div>`

export { content, overlappedContent }