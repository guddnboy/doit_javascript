function Book(title, author, volume, price){
    this.title = title;
    this.author = author;
    this.volue = volume;
    this.price = price;
}

var html = new Book('웹 표준의 정석', 'Ko', '608', '28,000');
var youtube = new Book('유튜브 영상 만들기', '김', '304', '14,000');
var python = new Book('파이썬 만들기', 'A', '186', '34,000');

var bookList = [html, youtube, python];

document.write("<h1>책 제목으로 살펴보기</h1>");
for(let i = 0; i < bookList.length; i++){
    document.write("<p>" + bookList[i].title + "</p>");
}

document.write("<h1>책 가격으로 살펴보기</h1>");
for(let i = 0; i < bookList.length; i++){
    document.write("<p>" + bookList[i].price + "</p>");
}