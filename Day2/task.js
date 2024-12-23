const books =[];
const members =[];
const issueBk = [];

class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}


class Member extends Person {
    constructor(name,id,membershipType){
        super(name,id);
        this.membershipType = membershipType;
    }
}

class Book{

    constructor(title, author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

}

class Library{

    addBook(bookName){
        books.push(bookName);
    }

    registerMember(memberID){
        members.push(memberID);
    }

    issueBook(title,memberId){
        const book = books.find(b => b.title=== title && b.isAvailable);
        const member = members.find(m=>m.id === memberId);

        if(!book){
            console.log("Book is not Available");
            return;
        }

        if(!member){
            console.log("Member Not Found");
            return;
        }

        book.isAvailable = false;
        console.log(`Book is issued to Member ID: ${memberId}`);
    }
}

class Loan {
    #fine = 5;

    constructor(borrowsBook, dueDate,memberID,fineAmount) {
        this.borrowsBook = borrowsBook;
        this.dueDate = dueDate;
        this.#fine = fineAmount;
        this.memberID = memberID;
    }

    // loanAmount() {
    //     const currentDate = new Date();
    //     const timeDiff = currentDate - this.dueDate;
    //     const daysOverdue = Math.ceil(timeDiff / (1000 * 3600 * 24));
    //     console.log(this.#fines * daysOverdue)
    // }


    setLoan(){
        // console.log("fine" + this.#fine);
        // console.log("date" + this.dueDate);
        return this.#fine*this.dueDate;
    }
}


const library = new Library();
library.addBook(new Book("The whisper of grave", "T.sharma", "12345"));
library.registerMember(new Member("Hariom","26558", "Plus"));
library.issueBook("The whisper of grave","26558");
library.issueBook("The whisper of grave","26558");
const loan = new Loan("The whisper of grave","3","26558","5");
console.log(loan.setLoan());

