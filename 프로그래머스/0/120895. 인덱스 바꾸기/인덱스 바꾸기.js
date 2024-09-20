function solution(my_string, num1, num2) {
    my_string=my_string.split('');
    var arr=[...my_string];
    my_string[num1]=arr[num2];
    my_string[num2]=arr[num1];
    return my_string.join('');
}