for (let index = 0; index <= 4; index++) {
    for (let list = 0; list <= 4; list++) {
        if (index % 2 != list % 2) {
            led.plot(index, list)
        }
    }
}
