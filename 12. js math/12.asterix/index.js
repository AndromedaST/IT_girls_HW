let str = '<div id="task">Задание под звездочкой<br> Напишите <a href="link"> функцию</a> которая возвращает строку очищенную от всех тегов</div>'

function deleteTags(str) {
    let regex = /( |<([^>]+)>)/ig,
    result = str.replace(regex, "");
    return result;
}
console.log("строка с тэгами:",str);
console.log("строка без тэгов:",deleteTags(str));

