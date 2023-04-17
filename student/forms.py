from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Book, StudentInformation, ComplaintSession
from . import models


class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2']


class StudentInformationForm(forms.ModelForm):
    class Meta:
        model = models.StudentInformation
        fields = ['studentID', 'subject']


class BookForm(forms.ModelForm):
    class Meta:
        model = models.Book
        fields = ['title', 'isbn', 'author', 'category', 'description']


class complaintForm(forms.ModelForm):
    class Meta:
        model = ComplaintSession
        fields = ['complaint_book', 'complaint_content']


class modifyUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']
