from datetime import timedelta
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.models import User
from student.models import Book, BookCategory
from student.forms import BookForm, CreateUserForm, modifyUserForm, ComplaintSession
from student.models import BorrowBookSession, StudentInformation


def managerLogin(request):
    if request.user.is_authenticated and request.user.groups.filter(name='student').exists():
        return redirect('sMainPage')
    if request.user.is_authenticated and request.user.groups.filter(name='manager').exists():
        return redirect('mMainPage')
    else:
        if request.method == "POST":
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                if user.groups.filter(name='manager').exists():
                    login(request, user)
                    return redirect('mMainPage')
                else:
                    messages.info(request, "You are not allowed here. Please login as Student!")
                    return redirect('sLogin')
            else:
                messages.info(request, "Username or Password is incorrect")

        context = {}
        return render(request, 'manager/loginAdmin.html', context)


def managerLogout(request):
    logout(request)
    return redirect('home')


@login_required(login_url='/manager/login/')
def manager_main_page(request):
    if request.method == 'POST' and 'book_inventory' in request.POST:
        return redirect('bookInventory')
    if request.method == 'POST' and 'borrowed_books' in request.POST:
        return redirect('manageBorrowedBooks')
    if request.method == 'POST' and 'student_complaint' in request.POST:
        return redirect('manageComplaint')
    if request.method == 'POST' and 'student_accounts' in request.POST:
        return redirect('manageStudent')
    if request.method == 'POST' and 'logout' in request.POST:
        return redirect('sLogout')

    user = request.user
    context = {'user': user}
    return render(request, 'manager/manager_main_page.html', context)


@login_required(login_url='/manager/login/')
def addBooks(request):
    bookForm = BookForm()
    if request.method == 'POST':
        bookForm = BookForm(request.POST)
        if bookForm.is_valid():
            bookForm.save()
            book_title = bookForm.cleaned_data['title']
            request.session['b_title'] = book_title
        return redirect('addBooksConfirm')
    context = {'bookForm': bookForm}
    return render(request, 'manager/addBooks.html', context)


@login_required(login_url='/manager/login/')
def addBooksConfirm(request):
    get_book_title = request.session['b_title']
    find_book = Book.objects.get(title=get_book_title)
    context = {'find_book': find_book}
    return render(request, 'manager/addBooks_confirm.html', context)


@login_required(login_url='/manager/login/')
def book_inventory(request):
    if request.method == 'POST' and 'add' in request.POST:
        return redirect('addBooks')
    if request.method == 'POST' and 'update' in request.POST:
        return redirect('updateBooks')
    if request.method == 'POST' and 'delete' in request.POST:
        return redirect('deleteBooks')
    if request.method == 'POST' and 'back' in request.POST:
        return redirect('mMainPage')

    q = request.GET.get('q') if request.GET.get('q') is not None else ''

    if q == "":
        books = Book.objects.all()
        find_category_book = []
        for book in books:
            find_category_book.append(book)
    elif q != "":
        books = Book.objects.all()
        find_category_book = []
        for book in books:
            if book.category.category_name == q:
                find_category_book.append(book)

    book_category = BookCategory.objects.all()

    context = {'book_category': book_category, 'find_category_book': find_category_book}
    return render(request, 'manager/book_inventory.html', context)


@login_required(login_url='/manager/login/')
def manage_complaint(request):
    all_books = Book.objects.all()
    defect_books = []
    for book in all_books:
        if book.book_defect:
            defect_books.append(book)

    context = {'defect_books': defect_books}
    return render(request, 'manager/manage_complaint.html', context)


@login_required(login_url='/manager/login/')
def handling_complaint(request, pk):
    complaint_book = Book.objects.get(isbn=pk)
    c_session = ComplaintSession.objects.get(complaint_book=complaint_book)
    if request.method == "POST":
        Book.objects.filter(isbn=pk).update(book_defect=False)
        c_session.delete()
        return redirect('manageComplaint')
    context = {'complaint_book': complaint_book, 'c_session': c_session}
    return render(request, 'manager/handling_complaints.html', context)


@login_required(login_url='/manager/login/')
def update_books(request):
    all_books = Book.objects.all()
    context = {'all_books': all_books}
    return render(request, 'manager/update_books.html', context)


@login_required(login_url='/manager/login/')
def show_book_detail(request, pk):
    get_book = Book.objects.get(isbn=pk)
    form = BookForm(instance=get_book)
    if request.method == "POST":
        form = BookForm(request.POST, instance=get_book)
        if form.is_valid():
            form.save()
            return redirect('updateBooks')

    context = {'form': form}
    return render(request, 'manager/show_book_detail.html', context)


@login_required(login_url='/manager/login/')
def delete_books(request):
    book_all = Book.objects.all()
    context = {'book_all': book_all}
    return render(request, 'manager/delete_books.html', context)


@login_required(login_url='/manager/login/')
def delete_confirm(request, pk):
    get_book = Book.objects.get(isbn=pk)
    if request.method == "POST":
        get_book.delete()
        return redirect('deleteBooks')

    context = {'get_book': get_book}
    return render(request, 'manager/delete_confirm.html', context)


@login_required(login_url='/manager/login/')
def manage_borrowed_books(request):
    borrowed_books = BorrowBookSession.objects.all()
    context = {'borrowed_books': borrowed_books}
    return render(request, 'manager/manage_borrowed_books.html', context)


@login_required(login_url='/manager/login/')
def extend_expiry_date(request, pk):
    get_book = Book.objects.get(isbn=pk)
    get_borrow_session = BorrowBookSession.objects.get(borrow_book_isbn=get_book)
    if request.method == "POST":
        BorrowBookSession.objects.filter(borrow_book_isbn=get_book).update(
            expiry_date=get_borrow_session.expiry_date + timedelta(days=15))
        return HttpResponse("The due date of this book has been extended by 15 days!!!")
    context = {"get_borrow_session": get_borrow_session}
    return render(request, 'manager/extend_expiry_date.html', context)


@login_required(login_url='/manager/login/')
def manage_student(request):
    student_info = StudentInformation.objects.all()
    context = {'student_info': student_info}
    return render(request, 'manager/manage_student.html', context)


@login_required(login_url='/manager/login/')
def delete_student(request, pk):
    user = User.objects.get(username=pk)
    s_info = StudentInformation.objects.get(user=user)
    if request.method == "POST":
        user.delete()
        return redirect('manageStudent')
    context = {'user': user, 's_info': s_info}
    return render(request, 'manager/delete_student.html', context)


@login_required(login_url='/manager/login/')
def modify_student(request, pk):
    user = User.objects.get(username=pk)

    form = modifyUserForm(request.POST, instance=user)
    if request.method == "POST":
        if form.is_valid():
            form.save()
            return redirect('manageStudent')
    context = {'user': user, 'form': form}
    return render(request, 'manager/modify_student.html', context)
