export default function Footer() {

    const currentYear = new Date().getFullYear();
    

    return(
        <footer>
            <h4>Books</h4>
            <img src="https://cdn.penguin.co.uk/dam-assets/books/9780099589341/9780099589341-jacket-large.jpg" alt="Sense and Sensibility" />
            <img src="https://cdn.penguin.co.uk/dam-assets/books/9780099589334/9780099589334-jacket-large.jpg" alt="Pride and Predjudice" />
            <img src="https://cdn.penguin.co.uk/dam-assets/books/9780099589280/9780099589280-jacket-large.jpg" alt="Mansfield Park" />
            <img src="https://cdn.penguin.co.uk/dam-assets/books/9780099589273/9780099589273-jacket-large.jpg" alt="Emma" />
            <img src="https://cdn.penguin.co.uk/dam-assets/books/9780099589297/9780099589297-jacket-large.jpg" alt="Northanger Abby" />
            <img src="https://cdn.penguin.co.uk/dam-assets/books/9780099589327/9780099589327-jacket-large.jpg" alt="Persuasion" />
            <img src="https://m.media-amazon.com/images/I/41WpIOlIAXL.jpg" alt="Sanditon" />

            <p>&copy; {currentYear}</p>
        </footer>
    );
}