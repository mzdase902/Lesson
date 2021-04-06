function pow(x,n) {
    if (n < 1) {
        return "Шо ти твориш, людина?!!!";
    } else {
        return x**n;
    }
}

console.log(pow(2,-2));