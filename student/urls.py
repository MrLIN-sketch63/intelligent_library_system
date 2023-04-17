from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('student/register/', views.registerPage, name="register"),
    path('student/login/', views.loginPage, name="sLogin"),
    path('student/logout/', views.logoutUser, name="sLogout"),
    path('student/mainPage/', views.user_main_page, name="sMainPage"),
    path('student/inventory/', views.inventory, name='inventory'),
    path('student/complaint/', views.complaintPage, name='complaintPage'),
    path('student/complaintSuccess/', views.complaintSuccess, name='complaintSuccess'),
    path('student/searchBook', views.search_book, name='searchBook'),
    path('student/student_profile', views.student_profile, name='studentProfile'),
    path('student/loanBook', views.loan_book, name='loanBook'),
    path('student/returnBooks/<str:book_isbn>/', views.returnBooks, name='returnBooks'),
]
