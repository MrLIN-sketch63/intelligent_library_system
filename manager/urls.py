from django.urls import path
from . import views

urlpatterns = [
    path('manager/login', views.managerLogin, name="mLogin"),
    path('manager/logout', views.managerLogout, name="mLogout"),
    path('manager/mainpage', views.manager_main_page, name="mMainPage"),
    path('manager/addBooks', views.addBooks, name='addBooks'),
    path('manager/addBooks_confirm', views.addBooksConfirm, name='addBooksConfirm'),
    path('manager/bookInventory', views.book_inventory, name='bookInventory'),
    path('manager/manageComplaint', views.manage_complaint, name='manageComplaint'),
    path('manager/handlingComplaint<str:pk>/', views.handling_complaint, name='handlingComplaint'),
    path('manager/updateBooks', views.update_books, name='updateBooks'),
    path('manager/showBookDetail/<str:pk>/', views.show_book_detail, name='showBookDetail'),
    path('manager/deleteBooks', views.delete_books, name='deleteBooks'),
    path('manager/deleteConfirm/<str:pk>/', views.delete_confirm, name='deleteConfirm'),
    path('manager/manageBorrowedBooks', views.manage_borrowed_books, name='manageBorrowedBooks'),
    path('manager/extend_expiry_date/<str:pk>/', views.extend_expiry_date, name='extendExpiryDate'),
    path('manager/manageStudent', views.manage_student, name='manageStudent'),
    path('student/deleteStudent/<str:pk>/', views.delete_student, name='deleteStudent'),
    path('student/modifyStudent/<str:pk>/', views.modify_student, name='modifyStudent'),
]