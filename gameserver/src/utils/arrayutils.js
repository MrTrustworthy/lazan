function arrayEquals(a1, a2) {
    if (a1.length !== a2.length) return false;
    return a1.every((v1, i) => v1.equals(a2[i]))
}

module.exports = {arrayEquals}