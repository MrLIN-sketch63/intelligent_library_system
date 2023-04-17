from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, timedelta


class BookCategory(models.Model):
    category_name = models.CharField(max_length=30)

    def __str__(self):
        return str(self.category_name)


class Book(models.Model):
    title = models.CharField(max_length=100)
    isbn = models.IntegerField(primary_key=True)
    author = models.CharField(max_length=50)
    category = models.ForeignKey(BookCategory, on_delete=models.SET_NULL, null=True)
    description = models.TextField(null=True, blank=True)
    book_state = models.BooleanField(default=True)
    book_defect = models.BooleanField(default=False)

    def __str__(self):
        return str(self.title)


class StudentInformation(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    studentID = models.CharField(primary_key=True, max_length=20)
    subject = models.CharField(max_length=40)

    create_time = models.DateTimeField(auto_now_add=True, verbose_name="Creation time")
    modify_time = models.DateTimeField(auto_now=True, verbose_name="Last Modify")

    def __str__(self):
        return str(self.studentID)


def default_loan_date():
    return datetime.today() + timedelta(days=15)


class BorrowBookSession(models.Model):
    borrower_name = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    borrower_ID = models.ForeignKey(StudentInformation, on_delete=models.SET_NULL, null=True)
    borrow_book_isbn = models.ForeignKey(Book, on_delete=models.SET_NULL, null=True)
    loan_date = models.DateTimeField(auto_now_add=True)
    expiry_date = models.DateTimeField(default=default_loan_date)

    def __str__(self):
        return str(self.borrower_name) + '[' + str(self.borrow_book_isbn) + ']'


class ComplaintSession(models.Model):
    complainant_name = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    complaint_book = models.ForeignKey(Book, on_delete=models.SET_NULL, null=True)
    complaint_content = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.complainant_name) + '[' + str(self.complaint_book) + ']'
