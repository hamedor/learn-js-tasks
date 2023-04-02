function* pseudoRandom(seed) {
    while(true) {
        yield seed = seed * 16807 % 2147483647;
    }
}

