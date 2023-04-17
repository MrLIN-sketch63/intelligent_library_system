from django.contrib import admin
from .models import Book, StudentInformation, BookCategory, BorrowBookSession, ComplaintSession


class customize_borrow_session(admin.ModelAdmin):
    list_display = ("borrower_name", "borrower_ID", "borrow_book_isbn", "loan_date", "expiry_date")


admin.site.register(Book)
admin.site.register(StudentInformation)
admin.site.register(BookCategory)
admin.site.register(BorrowBookSession, customize_borrow_session)
admin.site.register(ComplaintSession)
