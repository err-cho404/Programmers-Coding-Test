function solution(a, b) {
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    a = a<10 ? '0'+a : a;
    b = b<10 ? '0'+b : b;
    var date = new Date('2016-'+a+'-'+b).getDay();
    return week[date];
}