from django.shortcuts import render, HttpResponse, redirect #hay que importarla para realizar una resues http

# Create your views here.
layout = '''

<h1>Sitio web con Django / Hendrick Rafael</h1>
<hr/>
<ul>
    <li>
        <a href='/inicio'> Inicio</a>
    </li>
    <li>
        <a href='/hola-mundo'> Hola Mundo</a>
    </li>
    <li>
        <a href='/pagina'> Pagina</a>
    </li>
     <li>
        <a href='/contacto/rafael'> Contacto</a>
    </li>

</ul>


'''
def index(request):

    html = '''
     <h1>Inicio</h1>
     <h4>Anios hasta el 2050</h4>

    <ul>
    '''
    year = 2024
    while year <= 2050:
        if year%2==0:
            html += f'<li>{str(year)}</li>'
            year+=1
    html += '</ul>'
    
    return render(request, 'index.html')




# primer hola mundo con Django
def hola_mundo(request): #todos los metodos deben llevar como paramentro request

    return render(request, 'hola_mundo.html')



def pagina(request):

   
        return render(request,'pagina.html')





def contacto(request,nombre):
    return HttpResponse(layout+f'<h2>HOla {nombre}</h2>')