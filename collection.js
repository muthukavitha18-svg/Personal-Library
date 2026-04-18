const books = [
  // classic books
  {
    title: "1984",
    author: "George Orwell",
    genre: "Classic",
    rating: 5,
    image: "./assets/1984.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    rating: 4,
    image: "./assets/mockingbird.jpg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classic",
    rating: 4,
    image: "./assets/prideandprejudice.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald",
    genre: "Classic",
    rating: 4,
    image: "./assets/TGGBOOK.jpg"
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Classic",
    rating: 4,
    image: "./assets/MobyDick.jpg"
  },
  //   self help books
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self Help",
    rating: 4,
    image: "./assets/atomicHabits.jpg"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Self Help",
    rating: 4,
    image: "./assets/richDadPoorDad.jpg"
  },
  {
    title: "Mindset",
    author: "Carol Dweck",
    genre: "Self Help",
    rating: 4,
    image: "./assets/Mindset.jpg"
  },
  {
    title: "Who Moved My Cheese?",
    author: "Spencer Johnson",
    genre: "Self Help",
    rating: 4,
    image: "./assets/WhoMovedMyCheese.jpg"
  },
  {
    title: "The 5 Love Languages",
    author: "Gary Chapman",
    genre: "Self Help",
    rating: 4,
    image: "./assets/The5LoveLanguages.jpg"
  },
  //   fantasy
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "Fantasy",
    rating: 4,
    image: "./assets/harrypotter.jpg"
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4,
    image: "./assets/TLOR-BOOK.jpg"
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    genre: "Fantasy",
    rating: 4,
    image: "./assets/TGame-of-throneBOOK.jpg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4,
    image: "./assets/hobbit.jpg"
  },
  {
    title: "Percy Jackson",
    author: "Rick Riordan",
    genre: "Fantasy",
    rating: 4,
    image: "./assets/percy-jackson.jpg"
  },


  //   science books
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    rating: 4,
    image: "./assets/brief-historyoftimebook.jpg"
  },
  {
    title: "The Gene",
    author: "Siddhartha Mukherjee",
    genre: "Science",
    rating: 4,
    image: "./assets/the-gene.jpg"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Science",
    rating: 4,
    image: "./assets/sapiens.jpg"
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    genre: "Science",
    rating: 4,
    image: "./assets/cosmos.jpg"
  },
  {
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    genre: "Science",
    rating: 4,
    image: "./assets/selfish-gene.jpg"
  },


  //   romance books
  {
    title: "Me Before You",
    author: "Jojo Moyes",
    genre: "Romance",
    rating: 4,
    image: "./assets/me-before-you.jpg"
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Romance",
    rating: 4,
    image: "./assets/the-fault-in-our-stars.jpg"
  },
  {
    title: "Twilight",
    author: "Stephenie Meyer",
    genre: "Romance",
    rating: 4,
    image: "./assets/twilight.jpg"
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Romance",
    rating: 4,
    image: "./assets/jane-eyre.jpg"
  },
  {
    title: "It Ends With Us",
    author: "Colleen Hoover",
    genre: "Romance",
    rating: 4,
    image: "./assets/itEndsWithUs.jpg"
  },


  //   thriller books
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    rating: 4,
    image: "./assets/the-silent-patient.jpg"
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Thriller",
    rating: 4,
    image: "./assets/GoneGirl.jpg"
  },

  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Thriller",
    rating: 4,
    image: "./assets/daVenciCode.jpg"
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Thriller",
    rating: 4,
    image: "./assets/dragon-tattoo.jpg"
  },
  {
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Thriller",
    rating: 4,
    image: "./assets/sherlock.jpg"
  },

]

// ========== GET LIBRARY FROM STORAGE ==========
function getLibrary() {
  const stored = localStorage.getItem('myLibrary');
  return stored ? JSON.parse(stored) : [];
}

// ========== SAVE LIBRARY TO STORAGE ==========
function saveLibrary(booksArray) {
  localStorage.setItem('myLibrary', JSON.stringify(booksArray));
}

const container = document.getElementById("bookContainer")

function displayBooks(bookList) {
  container.innerHTML = ""

  bookList.forEach(book => {
    const card = document.createElement("div")
    card.classList.add("book-card")
    
    // Check if book already in library
    const library = getLibrary();
    const isInLibrary = library.some(b => b.title === book.title);

    card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>⭐⭐⭐⭐${book.rating}</p>
            <button class="add-btn" ${isInLibrary ? 'disabled' : ''}>
              ${isInLibrary ? '✓ Added to Library' : 'Add to Library'}
            </button>
        `
    const btn = card.querySelector(".add-btn")

    btn.addEventListener("click", () => {
      addToLibrary(book)
      displayBooks(getFilteredBooks())
    })

    container.appendChild(card)
  })
}

let currentGenre = "All"
let searchQuery = ""

function getFilteredBooks() {
  return books.filter(book => {
    const matchGenre =
      currentGenre === "All" || book.genre === currentGenre

    const matchSearch =
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery)

    return matchGenre && matchSearch
  })
}

function updateUI() {
  displayBooks(getFilteredBooks())
}

const buttons = document.querySelectorAll(".genre-btn")

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"))
    btn.classList.add("active")

    currentGenre = btn.textContent.trim()
    updateUI()
  })
})

const searchInput = document.querySelector(".c-hero-inputbox")

if (searchInput) {
  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value.toLowerCase()
    updateUI()
  })
}

// ========== ADD TO LIBRARY FUNCTION ==========
function addToLibrary(book) {
    const library = getLibrary();
    const exists = library.some(b => b.title === book.title)

    if (!exists) {
        library.push(book)
        saveLibrary(library)
        alert("✅ Added to Library")
    } else {
        alert("❌ Already added")
    }

    console.log(library)
}

updateUI()