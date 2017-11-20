function checkOut() {
    var liczba = document.getElementById('pole').value;
    var btn = document.getElementById('btn');
    
    if (liczba > 0) {
        document.getElementById('wynik').innerHTML='dodatnia';
    } else if (liczba < 0) {
        document.getElementById('wynik').innerHTML='ujemna';
    } else if (liczba === 0) {
        document.getElementById('wynik').innerHTML='zero';
    } else if (liczba == 0) {
        document.getElementById('wynik').innerHTML='nie podałeś żadnej wartości';
    } else {
        document.getElementById('wynik').innerHTML='You know nothing Jon Snow!';
    }
}

btn.addEventListener('click', function() {
    checkOut();
})