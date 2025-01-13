def solution(data, ext, val_ext, sort_by):
    answer = []
    listname = ["code", "date", "maximum", "remain"]
    extindex = listname.index(ext)
    sortindex = listname.index(sort_by)
    for x in data :
        if x[extindex] < val_ext :
            answer.append(x)
    answer.sort(key=lambda z:z[sortindex])
    return answer