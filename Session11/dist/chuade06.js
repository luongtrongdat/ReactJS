// 1. lop khan gia
class Audience {
    ;
    constructor(name, email, phone) {
        this.id = Audience.counter++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return `Thong tin khan gia: Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}
Audience.counter = 0;
// 2. lop phim
class Movie {
    constructor(title, genre, ticketPrice) {
        this.isShowing = false; // trang thai phim dang chieu
        this.id = Movie.counter++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
    }
    // cac phuong thuc
    startShow() {
        this.isShowing = true;
    }
    stopShow() {
        this.isShowing = false;
    }
}
Movie.counter = 1;
// 3. tao cac lop con cua lop cha
class ActionMovie extends Movie {
    calculateTicketCost(quantity) {
        return this.ticketPrice * quantity;
    }
    getSpecialOffers() {
        return ["Mien phi bap rang bo", "Tang poster"];
    }
    getMovieInfo() {
        return `Phim hanh dong: ${this.title}, Gia ve: ${this.ticketPrice}: Phim hành động gay cấn, kỹ xảo hoành tráng`;
    }
}
class ComedyMovie extends Movie {
    calculateTicketCost(quantity) {
        let root_price = this.ticketPrice;
        return quantity > 4 ? root_price * quantity * 0.9 : root_price * quantity;
    }
    getSpecialOffers() {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo() {
        return `Phim hai: ${this.title}, Gia ve: ${this.ticketPrice}: Phim hài nhẹ nhàng, vui nhộn`;
    }
}
class AnimationMovie extends Movie {
    calculateTicketCost(quantity) {
        // kiem tra neu tuoi nho hon 12 thi khong tinh tien
        return this.ticketPrice * quantity;
    }
    getSpecialOffers() {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo() {
        return `Phim hoat hinh: ${this.title}, Gia ve: ${this.ticketPrice}: Phim hoạt hình với hình ảnh sống động`;
    }
}
// 4. lop tickeBooking
class TicketBooking {
    constructor(audience, movie, quantity, totalPrice) {
        this.bookingId = TicketBooking.counter++;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    getDetails() {
        return `Thong tin dat ve: ...`;
    }
}
TicketBooking.counter = 1;
// 5. lop Cinema
class Cinema {
    // trien khai cac phuong thuc
    // 1. them khan gia
    addAudience(name, email, phone) {
        let newAudience = new Audience(name, email, phone);
        this.audiences.push(newAudience); // them khan gia
        return newAudience;
    }
    // 2. them phim moi
    addMovie(movie) {
        this.movies.push(movie); // them phim moi
    }
    // 3. dat ve
    bookTicket(audienceId, movieId, quantity) {
        // kiem tra xem ton tai khach hang, id phim
        let findAudienceById = this.audiences.find(item => item.id === audienceId);
        let findMovieById = this.movies.find(item => item.id == movieId);
        if (findAudienceById && findMovieById && quantity > 0 && findMovieById.isShowing) {
            let newBooking = new TicketBooking(findAudienceById, findMovieById, quantity, findMovieById.calculateTicketCost(quantity));
            this.bookings.push(newBooking);
            return newBooking;
        }
        return null;
    }
    // 4. ngung chieu phim
    cancelMovie(movieId) {
        let findMovieById = this.movies.find(item => item.id == movieId);
        if (findMovieById) {
            findMovieById.isShowing = false;
        }
    }
    // 5. hien thi phim dang chieu
    listShowingMovies() {
        let result = this.movies.filter(item => item.isShowing);
        for (let index = 0; index < result.length; index++) {
            console.log(`Phim dang chieu: ${[index * 1]}: Ten: ${result[index].title}`);
        }
    }
}
