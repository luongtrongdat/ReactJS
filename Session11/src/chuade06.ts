// 1. lop khan gia
class Audience {
    static counter = 0;;
    id: number;
    name: string;
    email: string;
    phone: string;
    constructor(name: string, email: string, phone: string) {
        this.id= Audience.counter++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails(): string {
        return `Thong tin khan gia: Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}
// 2. lop phim
abstract class Movie {
    static counter = 1;
    id: number;
    title: string;
    genre: string; // the loai phim
    ticketPrice: number; // gia ve
    isShowing: boolean = false; // trang thai phim dang chieu
    constructor(title: string, genre: string, ticketPrice: number) {
        this.id = Movie.counter++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
    }
    // cac phuong thuc
    startShow() : void{
        this.isShowing = true;
    }
    stopShow() : void {
        this.isShowing = false;
    }
    // phuong thuc tinh tong gia ve
    abstract calculateTicketCost(quantity: number): number;
    // phuong thuc cac uu dai dac biet
    abstract getSpecialOffers(): string[];
    // phuong thuc mo ta thong tin phim
    abstract getMovieInfo(): string;
}
// 3. tao cac lop con cua lop cha
class ActionMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice * quantity;
    }
    getSpecialOffers(): string[] {
        return ["Mien phi bap rang bo", "Tang poster"];
    }
    getMovieInfo(): string {
        return `Phim hanh dong: ${this.title}, Gia ve: ${this.ticketPrice}: Phim hành động gay cấn, kỹ xảo hoành tráng`;
    }
}
class ComedyMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        let root_price = this.ticketPrice;
        return quantity > 4 ? root_price * quantity * 0.9 : root_price * quantity;
    }
    getSpecialOffers(): string[] {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo(): string {
        return `Phim hai: ${this.title}, Gia ve: ${this.ticketPrice}: Phim hài nhẹ nhàng, vui nhộn`;
    }
}
class AnimationMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        // kiem tra neu tuoi nho hon 12 thi khong tinh tien
        return this.ticketPrice * quantity;
    }
    getSpecialOffers(): string[] {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo(): string {
        return `Phim hoat hinh: ${this.title}, Gia ve: ${this.ticketPrice}: Phim hoạt hình với hình ảnh sống động`;
    }
}
// 4. lop tickeBooking
class TicketBooking {
    static counter = 1;
    bookingId: number;
    audience: Audience;
    movie: Movie;
    quantity: number;
    totalPrice: number;
    constructor(audience: Audience, movie: Movie, quantity: number, totalPrice: number) {
        this.bookingId = TicketBooking.counter++;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    getDetails(): string {
        return `Thong tin dat ve: ...`;
    }
}
// 5. lop Cinema
class Cinema {
    movies: Movie[];
    audiences: Audience[];
    bookings: TicketBooking[];
    // trien khai cac phuong thuc
    // 1. them khan gia
    addAudience(name: string, email: string, phone: string): Audience {
        let newAudience = new Audience(name, email, phone);
        this.audiences.push(newAudience); // them khan gia
        return newAudience;
    }
    // 2. them phim moi
    addMovie(movie: Movie): void {
        this.movies.push(movie);// them phim moi
    }
    // 3. dat ve
    bookTicket(audienceId: number, movieId: number, quantity: number): TicketBooking | null {
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
    cancelMovie(movieId: number): void {
        let findMovieById = this.movies.find(item => item.id == movieId);
        if (findMovieById) {
            findMovieById.isShowing = false;
        }
    }
    // 5. hien thi phim dang chieu
    listShowingMovies() {
        let result = this.movies.filter(item => item.isShowing);
        for (let index = 0; index < result.length; index++) {
            console.log(`Phim dang chieu: ${[index*1]}: Ten: ${result[index].title}`);
        }
    }
}