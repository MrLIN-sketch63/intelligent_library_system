from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Group, User
from django.http import HttpResponse
from django.shortcuts import render, redirect

from .forms import CreateUserForm, StudentInformationForm, complaintForm
from .models import Book, BookCategory, BorrowBookSession, StudentInformation, ComplaintSession


def registerPage(request):
    if request.user.is_authenticated and request.user.groups.filter(name='student').exists():
        return redirect('sMainPage')
    if request.user.is_authenticated and request.user.groups.filter(name='manager').exists():
        return redirect('mMainPage')
    else:
        form1 = CreateUserForm()
        form2 = StudentInformationForm()
        context = {'form1': form1, 'form2': form2}

        if request.method == 'POST':
            form1 = CreateUserForm(request.POST)
            form2 = StudentInformationForm(request.POST)
            if form1.is_valid() and form2.is_valid():
                user = form1.save()
                f2 = form2.save(commit=False)
                f2.user = user
                f2.save()

                group_student = Group.objects.get(name='student')
                group_student.user_set.add(user)

                user = form1.cleaned_data.get("username")
                messages.success(request, "Account was created for " + user)
                return redirect('sLogin')

        return render(request, 'student/signUp.html', context)


def loginPage(request):
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
                login(request, user)
                if request.user.is_authenticated and request.user.groups.filter(name='student').exists():
                    return redirect('sMainPage')
                elif request.user.is_authenticated and request.user.groups.filter(name='manager').exists():
                    return redirect('mMainPage')
            else:
                messages.info(request, "Username or Password is incorrect")

        context = {}
        return render(request, 'student/loginStudent.html', context)


def home(request):
    username = request.user
    context = {'username': username}
    return render(request, 'student/home.html', context)


def logoutUser(request):
    logout(request)
    return redirect('home')


@login_required(login_url='/student/login/')
def user_main_page(request):
    if request.method == 'POST' and 's_book' in request.POST:
        return redirect('searchBook')
    if request.method == 'POST' and 'inventory' in request.POST:
        return redirect('inventory')
    if request.method == 'POST' and 'complaint' in request.POST:
        return redirect('complaintPage')
    if request.method == 'POST' and 'account' in request.POST:
        return redirect('studentProfile')
    if request.method == 'POST' and 'logout' in request.POST:
        return redirect('sLogout')

    user = request.user
    context = {'User': user}
    return render(request, 'student/user_main_page.html', context)


@login_required(login_url='/student/login/')
def inventory(request):
    if request.method == 'POST' and 's_book' in request.POST:
        return redirect('searchBook')
    if request.method == 'POST' and 'inventory' in request.POST:
        return redirect('inventory')
    if request.method == 'POST' and 'complaint' in request.POST:
        return redirect('complaintPage')
    if request.method == 'POST' and 'account' in request.POST:
        return redirect('studentProfile')
    if request.method == 'POST' and 'logout' in request.POST:
        return redirect('sLogout')

    current_user = request.user
    student_books = BorrowBookSession.objects.filter(borrower_name=current_user)
    q = request.GET.get('q') if request.GET.get('q') is not None else ''

    if q == "":
        available_book = []
        for book in student_books:
            if not book.borrow_book_isbn.book_defect:
                available_book.append(book)
    elif q != "":
        available_book = []
        for book in student_books:
            if book.borrow_book_isbn.category.category_name == q and book.borrow_book_isbn.book_defect != True:
                available_book.append(book)

    book_category = BookCategory.objects.all()
    context = {'book_category': book_category, 'available_book': available_book}
    return render(request, 'student/manageInventoryStudent.html', context)


@login_required(login_url='/student/login/')
def complaintPage(request):
    if request.method == 'POST' and 's_book' in request.POST:
        return redirect('searchBook')
    if request.method == 'POST' and 'inventory' in request.POST:
        return redirect('inventory')
    if request.method == 'POST' and 'complaint' in request.POST:
        return redirect('complaintPage')
    if request.method == 'POST' and 'account' in request.POST:
        return redirect('studentProfile')
    if request.method == 'POST' and 'logout' in request.POST:
        return redirect('sLogout')

    c_form = complaintForm
    if request.method == 'POST':
        c_form = complaintForm(request.POST)

        if c_form.is_valid():
            complaint_session = c_form.save(commit=False)
            complaint_session.complainant_name = request.user
            complaint_session.save()
            c_form.save()
            c_book = c_form.cleaned_data['complaint_book']
            request.session['c_book'] = c_book.isbn
            return redirect('complaintSuccess')
        else:
            return HttpResponse("Sorry, We cannot find the book. Please check the isbn is correct!")

    context = {'c_form': c_form}
    return render(request, 'student/complaintStudent.html', context)


@login_required(login_url='/student/login/')
def complaintSuccess(request):
    get_book_isbn = request.session['c_book']
    find_book = Book.objects.get(isbn=get_book_isbn)
    find_complaint_book = ComplaintSession.objects.get(complaint_book=find_book)
    Book.objects.filter(isbn=find_complaint_book.complaint_book.isbn).update(book_defect=True)
    context = {'find_complaint_book': find_complaint_book}
    return render(request, 'student/complaint_success.html', context)


@login_required(login_url='/student/login/')
def search_book(request):
    if request.method == 'POST' and 's_book' in request.POST:
        return redirect('searchBook')
    if request.method == 'POST' and 'inventory' in request.POST:
        return redirect('inventory')
    if request.method == 'POST' and 'complaint' in request.POST:
        return redirect('complaintPage')
    if request.method == 'POST' and 'account' in request.POST:
        return redirect('studentProfile')
    if request.method == 'POST' and 'logout' in request.POST:
        return redirect('sLogout')

    search = request.POST.get('search') if request.POST.get('search') is not None else ''
    search_category = request.GET.get('q') if request.GET.get('q') is not None else ''

    if search != "" and search_category == "":
        book_title_found = Book.objects.filter(title__icontains=search)

        book_found_check = []
        for b in book_title_found:
            if b.book_state:
                if not b.book_defect:
                    book_found_check.append(b)

    elif search == "" and search_category != "":
        book_category_found = Book.objects.filter(category__category_name__icontains=search_category)

        book_found_check = []
        for b in book_category_found:
            if b.book_state:
                if not b.book_defect:
                    book_found_check.append(b)
    else:
        book_all = Book.objects.all()
        book_found_check = []
        for b in book_all:
            if b.book_state:
                if not b.book_defect:
                    book_found_check.append(b)

    all_book_categories = BookCategory.objects.all()

    context = {'book_found_check': book_found_check, 'all_book_categories': all_book_categories}
    return render(request, 'student/searchBooksStudent.html', context)


@login_required(login_url='/student/login/')
def loan_book(request):
    user = request.user
    loan_book_isbn = request.GET.get('loan_book_isbn') if request.GET.get('loan_book_isbn') is not None else ''
    select_book = Book.objects.get(isbn=loan_book_isbn)
    current_student_info = StudentInformation.objects.get(user=user)

    if request.method == "POST":
        loan_session = BorrowBookSession(borrower_name=user, borrower_ID=current_student_info,
                                         borrow_book_isbn=select_book)
        loan_session.save()
        Book.objects.filter(isbn=loan_book_isbn).update(book_state=False)
        return redirect('searchBook')

    context = {'select_book': select_book}
    return render(request, 'student/loan_book.html', context)


@login_required(login_url='/student/login/')
def returnBooks(request, book_isbn):
    if request.method == 'POST' and 's_book' in request.POST:
        return redirect('searchBook')
    if request.method == 'POST' and 'inventory' in request.POST:
        return redirect('inventory')
    if request.method == 'POST' and 'complaint' in request.POST:
        return redirect('complaintPage')
    if request.method == 'POST' and 'account' in request.POST:
        return redirect('studentProfile')
    if request.method == 'POST' and 'logout' in request.POST:
        return redirect('sLogout')

    found_book = Book.objects.get(isbn=book_isbn)

    if request.method == "POST" and 'return_confirm' in request.POST:
        BorrowBookSession.objects.filter(borrow_book_isbn=found_book).delete()
        Book.objects.filter(isbn=book_isbn).update(book_state=True)
        return redirect('inventory')
    context = {'found_book': found_book}
    return render(request, 'student/return_books.html', context)


@login_required(login_url='/student/login/')
def student_profile(request):
    if request.method == 'POST' and 's_book' in request.POST:
        return redirect('searchBook')
    if request.method == 'POST' and 'inventory' in request.POST:
        return redirect('inventory')
    if request.method == 'POST' and 'complaint' in request.POST:
        return redirect('complaintPage')
    if request.method == 'POST' and 'account' in request.POST:
        return redirect('studentProfile')
    if request.method == 'POST' and 'logout' in request.POST:
        return redirect('sLogout')

    current_user = request.user
    student_info = StudentInformation.objects.get(user=current_user)

    if request.method == "POST":
        find_user = User.objects.get(username=request.user)
        reset_password = request.POST.get("reset_password")
        confirm_password = request.POST.get("confirm_reset_password")

        if reset_password == confirm_password:
            find_user.set_password(reset_password)
            find_user.save()
            return redirect("sLogin")
        else:
            messages.info(request, "Make sure that you enter the same password ")

    context = {'current_user': current_user, 'student_info': student_info}
    return render(request, 'student/accountStudent.html', context)
