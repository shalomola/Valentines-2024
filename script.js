const evilBtn = document.getElementById('evil')
const OFFSET = 200

evilBtn.addEventListener('click', () => {
    alert('Hahaha, you thought you was smart.')
    window.close()
})

document.addEventListener('mouseover', (e) => {
    const x = e.pageX
    const y = e.pageY
    const btnBox = evilBtn.getBoundingClientRect()

    const horizontalDistanceFrom = distanceFromCenter(btnBox.x, x, btnBox.width)
    const verticalDistanceFrom = distanceFromCenter(btnBox.y, y, btnBox.height)

    const horizontalOffset = btnBox.width / 2 + OFFSET
    const verticalOffset = btnBox.height / 2 + OFFSET

    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
        setBtnPosition(
            btnBox.x + horizontalOffset / horizontalDistanceFrom * 10,
            btnBox.y + verticalOffset / verticalDistanceFrom * 10
        )
    }
})

function setBtnPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect()
    const btnBox = evilBtn.getBoundingClientRect()

    if (distanceFromCenter(left, windowBox.left, btnBox.width) < 0) {
        left = windowBox.right - btnBox.width - OFFSET
    }

    if (distanceFromCenter(left, windowBox.right, btnBox.width) > 0) {
        left = windowBox.left + OFFSET
    }

    if (distanceFromCenter(top, windowBox.top, btnBox.height) < 0) {
        top = windowBox.bottom - btnBox.height - OFFSET
    }

    if (distanceFromCenter(top, windowBox.bottom, btnBox.height) > 0) {
        top = windowBox.top + OFFSET
    }

    evilBtn.style.left = `${left}px`
    evilBtn.style.top = `${top}px`
    console.log(x, y)
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize/2
}