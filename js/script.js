function checkOut() {
    var liczba = document.getElementById('pole').value;
    var btn = document.getElementById('btn');
    
    if (liczba > 0) {
        document.getElementById('wynik').innerHTML='dodatnia';
    } else if (liczba == '') {
        document.getElementById('wynik').innerHTML='Nie podałeś żadnej wartości!';
        document.getElementById('wynik').style.color = '#f00';
        return false;
    } else if (liczba < 0) {
        document.getElementById('wynik').innerHTML='ujemna';
        document.getElementById('wynik').style.color = '#fff';
    } else if (liczba == 0) {
        document.getElementById('wynik').innerHTML='zero';
    }  else {
        document.getElementById('wynik').innerHTML='nie jestem liczbą. You know nothing Jon Snow!';
        document.getElementById('wynik').style.color = '#fff';
    }
}

btn.addEventListener('click', function() {
    checkOut();
})