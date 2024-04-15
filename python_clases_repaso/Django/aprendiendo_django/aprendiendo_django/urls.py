"""aprendiendo_django URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

#importar app con mis vistas
from miapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hola-mundo/', views.hola_mundo, name='hola_mundo'),
    path('', views.index, name='index'), #  esta se hace de esta forma para indicar que sera la princial
    path('pagina/',views.pagina, name='pagina'),
    path('pagina/<int:redirigir>',views.pagina, name='pagina'),
    path('inicio/', views.index, name='index'),
    path('contacto/<str:nombre>',views.contacto, name='contacto') # de esa forma se le puede poner parametros a las url, y se le pueden poner todos los que quiera
]
