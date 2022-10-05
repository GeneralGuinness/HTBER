var stringArray: string[] = ['AB', 'Z', 'A', 'AC'];

var sortedArray: string[] = stringArray.sort((n1,n2) => {
    if (n1 > n2) {
        return 1;
    }

    if (n1 < n2) {
        return -1;
    }

    return 0;
});
