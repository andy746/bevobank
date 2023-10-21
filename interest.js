function interestCalculation(p, r, t, n = -1) {
    Simple = True
    if (n!=-1 && n > 0) {
        Simple = False
    }

    if (p <= 0 || r <= 0 || t <= 0 || n < -1) {
        print('Please enter positive values only.')
    }

    if (Simple == True) {
        return p*r*t
    }
    else {
        return p*(1+(r/n))**(n*t)
    }
}